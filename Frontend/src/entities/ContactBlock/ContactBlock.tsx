import classes from '@/entities/ContactBlock/ContactBlock.module.scss'
import LinkReroute from '@/shared/LinkReroute/LinkReroute'
import { ReactNode } from 'react'

interface IContactBlock {
  isLeft: Boolean
  href: string
  description: string
  children: ReactNode
}

export default function ContactBlock({
  children,
  description,
  isLeft,
  href,
}: IContactBlock) {
  return (
    <LinkReroute href={href} className={classes.contactBlock}>
      {isLeft && children}
      <p className={classes.text}>{description}</p>
      {!isLeft && children}
    </LinkReroute>
  )
}
