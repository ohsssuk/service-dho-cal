import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type OptionProps = {
  value: string | number;
  content: ReactNode;
};

type SelectProps = {
  options: OptionProps[];
  onSelect: (selectedOption: OptionProps['value']) => void;
  selectedValue?: OptionProps['value'];
};

export default function Select({
  options,
  onSelect,
  selectedValue,
}: SelectProps) {
  const [selectedOption, setSelectedOption] = useState<
    OptionProps['value'] | null
  >(selectedValue ?? null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: OptionProps['value']) => {
    setSelectedOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full text-left">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">
          {options.find((option) => option.value === selectedOption)?.content}
        </span>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`ml-3 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-full rounded-md shadow-lg bg-white z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.value)}
                className="whitespace-nowrap block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                role="menuitem"
              >
                {option.content}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
