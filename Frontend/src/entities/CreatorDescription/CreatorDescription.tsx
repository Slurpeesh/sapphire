import classes from '@/entities/CreatorDescription/CreatorDescription.module.scss'
import Text from '@/shared/Text/Text'

interface ICreatorDescription {
  name: string
  role: string
}

export default function CreatorDescription({
  name,
  role,
}: ICreatorDescription) {
  return (
    <div className={classes.wrapper}>
      <Text className={classes.name}>{name}</Text>
      <Text className={classes.role}>{role}</Text>
    </div>
  )
}
