type Props = {
  name: string;
  label: string;
};

export default function URLInput({ name, label }: Props) {
  return (
    <label htmlFor={name} className="block mb-3">
      <span className="text-gray-700">{label}</span>
      <input
        name={name}
        type="url"
        className="mt-1 block w-full"
        placeholder=""
      />
    </label>
  );
}
