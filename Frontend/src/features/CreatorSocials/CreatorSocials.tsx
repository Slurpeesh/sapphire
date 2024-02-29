import classes from '@/features/CreatorSocials/CreatorSocials.module.scss'
import LinkReroute from '@/shared/LinkReroute/LinkReroute'

interface ILinkSvg {
  href: string
  svgSource: string
}

interface ICreatorSocials {
  className: string
  urls: Array<ILinkSvg>
}

export default function CreatorSocials({ className, urls }: ICreatorSocials) {
  return (
    <ul className={className}>
      {urls.map((urlObj) => (
        <li key={urlObj.href}>
          <LinkReroute href={urlObj.href}>
            <img
              className={classes.socialImg}
              src={urlObj.svgSource}
              aria-label="Соц. сеть"
            />
          </LinkReroute>
        </li>
      ))}
    </ul>
  )
}
