import { ReactNode } from 'react'

export interface ILinkReroute
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  className?: string
  href: string
  children?: ReactNode
}

export default function LinkReroute({
  children,
  href,
  className,
  ...props
}: ILinkReroute) {
  return (
    <a target="_blank" href={href} className={className} {...props}>
      {children}
    </a>
  )
}
