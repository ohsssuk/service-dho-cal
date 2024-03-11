type InputProps = {
  id?: string;
  className?: string;
  placeholder: string;
  value?: string;
  type?: string;
  onChange?: (value: string) => void;
};

export default function Input({
  id = '',
  className = '',
  value = '',
  placeholder,
  type = 'text',
  onChange,
}: InputProps) {
  const handleInputChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={className}>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`px-2 py-1 rounded-md border border-gray-300 outline-none text-base leading-normal w-full placeholder-gray-700::placeholder`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e.target.value)
        }
      />
    </div>
  );
}
