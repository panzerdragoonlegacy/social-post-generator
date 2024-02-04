type Props = {
  name: string;
  label: string;
  onChange: (value: string) => void;
};

export default function URLInput({ name, label, onChange }: Props) {
  return (
    <label htmlFor={name} className="block mb-3">
      <span className="text-gray-700">{label}</span>
      <input
        name={name}
        type="url"
        className="mt-1 block w-full"
        placeholder=""
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </label>
  );
}
