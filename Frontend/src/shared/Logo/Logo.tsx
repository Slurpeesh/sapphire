import { ReactNode } from 'react'

interface ILogo {
  className: string
  children?: ReactNode
}

export default function Logo({ children, className }: ILogo) {
  return <div className={className}>{children}</div>
}
