import CreatorDescription from '@/entities/CreatorDescription/CreatorDescription'
import CreatorSocials from '@/features/CreatorSocials/CreatorSocials'
import githubSvg from '@/features/CreatorSocials/assets/github.svg?url'
import vkSvg from '@/features/CreatorSocials/assets/vk.svg?url'
import classes from '@/widgets/CreatorCard/CreatorCard.module.scss'

interface ICreatorCard {
  className: string
  imageUrl: string
  altText: string
  name: string
  role: string
}

export default function CreatorCard({
  className,
  imageUrl,
  altText,
  name,
  role,
}: ICreatorCard) {
  return (
    <article className={classes.card + ' ' + className}>
      <div className={classes.imgWrapper}>
        <img src={imageUrl} alt={altText} />
        <CreatorSocials
          className={classes.socials}
          urls={[
            { href: 'https://github.com/Slurpeesh', svgSource: githubSvg },
            { href: 'https://vk.com/id180296166', svgSource: vkSvg },
          ]}
        />
      </div>
      <CreatorDescription name={name} role={role}></CreatorDescription>
    </article>
  )
}
