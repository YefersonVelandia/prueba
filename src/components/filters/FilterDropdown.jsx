export const FilterDropdown = ({
  label,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div>
      <select
        className="w-full p-2 text-left border border-gray-300 rounded-lg"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
