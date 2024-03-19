'use client';

import React, { useState } from 'react';

type CodePopupProps = {
  onApply: (text: string) => void;
  onClose: () => void;
  initText?: string;
};

export default function CodePopup({
  onApply,
  onClose,
  initText = '',
}: CodePopupProps) {
  const [text, setText] = useState<string>(initText);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleApply = () => {
    onApply(text);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('코드가 복사되었습니다. 내용에 붙여넣으면 함대구성을 불러옵니다.');
    } catch (error) {
      console.error('텍스트 복사 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      style={{ zIndex: 51 }}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-md"
        style={{
          maxWidth: '800px',
          width: '90%',
          maxHeight: '90%',
          overflow: 'auto',
        }}
      >
        <div>
          <p style={{ lineHeight: 1.4 }}>
            - 현재 코드를 지우고 이전에 저장한 코드를 불러와서 [적용]하면 해당
            하는 함대구성을 불러옵니다.
          </p>
        </div>
        <textarea
          className="w-full text-sm border border-gray-300 rounded-lg p-2 mt-4 mb-4  focus:outline-none focus:outline-blue-500"
          style={{
            height: '400px',
            lineHeight: '1.4',
          }}
          value={text}
          onChange={handleChange}
          placeholder="내용을 비우면 함대구성이 전체 삭제 됩니다."
          autoFocus={true}
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={handleApply}
            className="px-4 py-2 text-white rounded-lg mr-1"
            style={{ backgroundColor: 'var(--main500)' }}
          >
            적용
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-white rounded-lg mr-1"
            style={{ backgroundColor: 'var(--green500)' }}
          >
            복사
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
