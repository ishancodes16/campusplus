import { Link } from 'react-router-dom'

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const SIZE_CLASS = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
}) {
  const classes = `btn ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`.trim()

  if (to) {
    return (
      <Link className={classes} to={to} onClick={onClick} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
