export default function InputField({
  id,
  name,
  type = "text",
  value,
  error = { message: "", invalid: false },
  onChange,
  placeholder,
  dirty = false,
  fieldtype = "input",
  rows = 5,
}) {
  const isError = error?.invalid && dirty;

  const baseClasses = `gap-[10px] w-full p-[12px] rounded-lg border transition duration-500 ease-in-out
    bg-[hsla(253,6%,72%,0.2)] text-white text-[12px] focus:shadow-[0_0_5px_rgba(0,0,0,0.2)]
    ${isError ? "border-[#d9534f] animate-shake" : "border-transparent"}
  `;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-[12px] text-[#888] block mb-1">
        {name}
      </label>

      {fieldtype === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}

      {isError && (
        <span className="text-[#d9534f] text-[10px] mt-1 block">
          {error?.message}
        </span>
      )}
    </div>
  );
}
