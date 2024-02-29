import CopyrightText from '@/entities/CopyrightText/CopyrightText'
import { ReactNode } from 'react'

interface IFooter {
  className: string
  children?: ReactNode
}

export default function Footer({ children, className }: IFooter) {
  return (
    <footer className={className}>
      {children}
      <CopyrightText />
    </footer>
  )
}
