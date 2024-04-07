async function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('dhoCalDB', 1);

    request.onerror = () => {
      console.error('Failed to open database');
      reject(request.error);
    };

    request.onsuccess = () => {
      const db = request.result as IDBDatabase;
      resolve(db);
    };

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;

      const store = db.createObjectStore('useData', {
        keyPath: 'id',
        autoIncrement: true,
      });

      store.createIndex('by_kind', 'kind', { unique: false });
    };
  });
}

export async function saveUseData(data: any): Promise<void> {
  const db = await openDatabase();
  const transaction = db.transaction(['useData'], 'readwrite');
  const store = transaction.objectStore('useData');
  const request = store.put(data);

  return new Promise((resolve, reject) => {
    request.onerror = () => {
      console.error('Failed to save data');
      reject(request.error);
    };

    request.onsuccess = () => {
      console.log('Data saved successfully');
      resolve();
    };
  });
}

async function getUseData(): Promise<any> {
  const db = await openDatabase();
  const transaction = db.transaction(['useData'], 'readonly');
  const store = transaction.objectStore('useData');
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onerror = () => {
      console.error('Failed to get data');
      reject(request.error);
    };

    request.onsuccess = () => {
      const data = request.result;
      resolve(data);
    };
  });
}

export async function getLastSavedData(): Promise<any> {
  try {
    const storedData = await getUseData();

    if (storedData.length === 0) {
      console.log('저장된 데이터가 없습니다.');
      return null;
    }

    let lastData = storedData[0];
    for (const data of storedData) {
      if (data.id > lastData.id) {
        lastData = data;
      }
    }

    return lastData;
  } catch (error) {
    console.error('마지막 데이터 가져오기 실패:', error);
    return null;
  }
}
