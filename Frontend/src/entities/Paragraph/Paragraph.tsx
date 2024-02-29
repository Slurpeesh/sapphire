import classes from '@/entities/Paragraph/Paragraph.module.scss'
import Text from '@/shared/Text/Text'

interface IParagraph {
  children: string
}

export default function Paragraph({ children }: IParagraph) {
  return <Text className={classes.p}>{children}</Text>
}
