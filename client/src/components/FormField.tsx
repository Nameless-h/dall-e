const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  handleGenerateByEnter,
}: any) => {
  return (
    <div>
      <div className="flex item-center gap-2 mb-2">
        <label
          htmlFor={labelName}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold
            text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleGenerateByEnter}
        required
        className="bg-gray-50 border-2 border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-stone-800
        outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
