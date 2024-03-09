function TextField({
  label,
  name,
  errors,
  type,
  register,
  required,
  validationSchema,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        className="textField__input"
        {...register(name, validationSchema)}
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextField;
