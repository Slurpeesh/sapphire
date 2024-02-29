import classes from '@/entities/HeaderText/HeaderText.module.scss'
import Text from '@/shared/Text/Text'

interface IHeaderText {
  className?: string
  children: string
}

export default function HeaderText({ children, className }: IHeaderText) {
  return (
    <header className={className + ' ' + classes.header}>
      <Text>{children}</Text>
    </header>
  )
}
