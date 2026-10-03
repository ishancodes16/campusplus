import { Link } from 'react-router-dom'

export default function Card({
  children,
  className = '',
  padded = true,
  to,
  as: Tag = 'article',
}) {
  const classes = `card ${padded ? 'card-padded' : ''} ${className}`.trim()

  if (to) {
    return (
      <Link className={`${classes} card-link`} to={to}>
        {children}
      </Link>
    )
  }

  return <Tag className={classes}>{children}</Tag>
}
