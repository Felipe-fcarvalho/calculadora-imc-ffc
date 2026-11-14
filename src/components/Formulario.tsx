interface FormProps {
  label: string;
  state: string;
  funcState: (valor: string) => void;
}

export default function Formulario({ label, state, funcState }: FormProps) {
  return (
    <div className="flex mx-2">
      <label htmlFor={label} className="w-15">
        {label}
      </label>
      <input
        id={label}
        type="text"
        value={state}
        onChange={(e) => funcState(e.target.value)}
        className="border p-1 w-full rounded-lg"
      />
    </div>
  );
}
