import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faCalculator,
  faCode,
  faSave,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';

type ButtonProps = {
  onClick: () => void;
  icon: IconDefinition;
  text: string;
};
const Button = ({ onClick, icon, text }: ButtonProps) => (
  <button
    onClick={onClick}
    className="flex items-center py-2 px-3 mx-1 bg-white rounded-md focus:outline-none"
    style={{ backgroundColor: 'var(--main800)' }}
  >
    <FontAwesomeIcon icon={icon} />
    <span className="ml-2 text-sm">{text}</span>
  </button>
);

type BottomMenuBar = {
  calculate: () => void;
  save: () => void;
  useCode: () => void;
  deleteAll: () => void;
};
export default function BottomMenuBar({
  calculate,
  save,
  useCode,
  deleteAll,
}: BottomMenuBar) {
  const scrollToResultTable = () => {
    const resultTable = document.getElementById('result_table');
    if (resultTable) {
      resultTable.scrollIntoView();
    }
  };

  const handleCalculate = () => {
    scrollToResultTable();
    calculate();
  };

  const handleSave = () => {
    save();
  };

  const handleUseCode = () => {
    useCode();
  };

  const handleDeleteAll = () => {
    deleteAll();
  };

  return (
    <section
      style={{
        borderTop: '1px solid var(--gray200)',
        minWidth: 300,
        zIndex: 999,
      }}
      className="fixed bottom-0 text-white left-0 w-full bg-white px-2 py-3 flex justify-end"
    >
      <Button onClick={handleCalculate} icon={faCalculator} text="계산" />
      <Button onClick={handleSave} icon={faSave} text="저장" />
      <Button onClick={handleUseCode} icon={faCode} text="코드 사용" />
      <div className="hidden md:flex">
        <Button onClick={handleDeleteAll} icon={faSyncAlt} text="초기화" />
      </div>
    </section>
  );
}
