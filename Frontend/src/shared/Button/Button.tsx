import { ReactNode } from 'react'

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className: string
  type: 'button' | 'submit' | 'reset'
  children?: ReactNode
}

export default function Button({
  className,
  type,
  children,
  ...props
}: IButton) {
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  )
}
