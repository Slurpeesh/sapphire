import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICustomLink {
  to: string
  className: string
  children?: ReactNode
}

export default function CustomLink({ children, className, to }: ICustomLink) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}
