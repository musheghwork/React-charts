export default function RadioGroup({ name, options, selected, onChange }) {
  return (
    <div className="inputs">
      {options.map(({ id, label, value }) => (
        <div className="checkVal" key={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={selected === value}
            onChange={(e) => onChange(e.target.value)}
            className="custom-radio"
          />
          <label htmlFor={id}>{label}</label>
        </div>
      ))}
    </div>
  );
}
