import classes from '@/entities/MiniLink/MiniLink.module.scss'
import CustomLink from '@/shared/CustomLink/CustomLink'

interface IMiniLink {
  children: string
  to: string
}

export default function MiniLink({ to, children }: IMiniLink) {
  return (
    <CustomLink to={to} className={classes.link}>
      {children}
    </CustomLink>
  )
}
