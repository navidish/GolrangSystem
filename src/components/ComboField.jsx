const ComboField = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-3 text-sm bg-secondary-0"
    >
      <option selected value>
        انتخاب کاربر
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
export default ComboField;
