export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 pr-8 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white"
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-4 h-4 text-purple-600"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};
