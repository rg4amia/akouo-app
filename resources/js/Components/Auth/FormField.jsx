import InputError from "../InputError";

export default function FormField({ label, type, name, placeholder, onChange, error }) {
    return (
    <div className="mb-2 relative">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full px-10 py-3 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
        onChange={onChange}
      />
      {error && <InputError message={error} className="mt-2" />}
    </div>
  );
}
