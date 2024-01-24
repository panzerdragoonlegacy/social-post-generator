type Props = {
  name: string;
  label: string;
  rows?: number;
};

export default function TextArea({ name, label, rows }: Props) {
  return (
    <label htmlFor={name} className="block mb-3">
      <span className="text-gray-700">{label}</span>
      <textarea name={name} className="mt-1 block w-full" rows={rows || 3} />
    </label>
  );
}
