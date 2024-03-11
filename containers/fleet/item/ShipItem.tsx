'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faSailboat,
  faAnchor,
  faShield,
  faTrowel,
} from '@fortawesome/free-solid-svg-icons';

import { ShipItemProps } from './ShipProps';

import styles from '../fleet.module.css';
import Input from '@/components/Input';

import { statRow } from '../data';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

export default function ShipItem({
  option,
  index,
  onChange,
}: {
  option: ShipItemProps;
  index: number;
  onChange: (option: ShipItemProps, index: number) => void;
}) {
  const changeStat = ({
    index,
    key,
    value,
  }: {
    index: number;
    key: string;
    value: string | number | boolean;
  }) => {
    option[key] = value;
    onChange(option, index);
  };

  let itemStatRow = statRow[option.kind];

  const deleteItem = () => {
    if (!confirm(`[${option.name}]을 삭제할까요?`)) {
      return;
    }

    option.isDelete = true;
    onChange(option, index);
  };

  return (
    <li className={styles.item}>
      <section className={styles.menu}>
        <div>
          <Checkbox
            id={`${option.kind}_isUse_${index}`}
            label={`${option.isUse ? '사용' : '대기'}`}
            checked={option.isUse}
            onChange={(value) => changeStat({ index, key: 'isUse', value })}
          />
        </div>
        <div>
          <Button onClick={deleteItem}>
            <FontAwesomeIcon icon={faTrashAlt} className="text-gray-500" />
          </Button>
        </div>
      </section>
      <section className={styles.head}>
        <div className={styles.icon}>
          {(() => {
            switch (option.kind) {
              case 'armor':
                return <FontAwesomeIcon icon={faShield} />;
              case 'anchor':
                return <FontAwesomeIcon icon={faAnchor} />;
              case 'ram':
                return <FontAwesomeIcon icon={faTrowel} />;
              default:
                return <FontAwesomeIcon icon={faSailboat} />;
            }
          })()}
        </div>
        <div className={styles.name}>
          <Input
            id={`${option.kind}_name_${index}`}
            value={option.name}
            className={styles.input}
            placeholder="선박 이름"
            onChange={(value) => changeStat({ index, key: 'name', value })}
          />
        </div>
      </section>
      <section className={styles.body}>
        {itemStatRow.map((stat) => (
          <div key={stat.val} className={styles.stat_row}>
            <label htmlFor={`${option.kind}_${stat.val}_${index}`}>
              {stat.kor}
            </label>
            <Input
              type="number"
              id={`${option.kind}_${stat.val}_${index}`}
              className={styles.input}
              value={String(option[stat.val] ?? '')}
              placeholder={`${stat.placeholder ?? `${stat.kor} 입력`}`}
              onChange={(value) =>
                changeStat({ index, key: stat.val, value: Number(value) })
              }
            />
          </div>
        ))}
      </section>
    </li>
  );
}
