export default function FormField({
  id,
  label,
  hint,
  error,
  children,
}) {
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      {label ? (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <p className="field-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="field-hint">{hint}</p>
      ) : null}
    </div>
  )
}

export function TextInput({ id, value, onChange, placeholder, autoComplete = 'off' }) {
  return (
    <input
      id={id}
      className="field-control"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  )
}

export function TextArea({ id, value, onChange, placeholder, rows = 5 }) {
  return (
    <textarea
      id={id}
      className="field-control field-textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  )
}

export function Select({ id, value, onChange, children }) {
  return (
    <select id={id} className="field-control" value={value} onChange={onChange}>
      {children}
    </select>
  )
}
