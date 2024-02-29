import classes from '@/shared/Text/Text.module.scss'
import { ReactNode } from 'react'

interface IText {
  className?: string
  children?: ReactNode
}

export default function Text({ children, className }: IText) {
  return <p className={className + ' ' + classes.text}>{children}</p>
}
