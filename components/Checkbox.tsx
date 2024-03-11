import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
}: CheckboxProps) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="inline-flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={`inline-flex items-center cursor-pointer rounded-full pl-2.5 pr-3 py-1`}
        style={{ backgroundColor: checked ? 'var(--main500)' : '' }}
      >
        <FontAwesomeIcon
          icon={checked ? faCheckSquare : faSquare}
          className={`mr-1 ${checked ? 'text-white' : 'text-gray-600'}`}
        />
        <span className={`text-sm ${checked ? 'text-white' : 'text-gray-600'}`}>
          {label}
        </span>
      </label>
    </div>
  );
}
