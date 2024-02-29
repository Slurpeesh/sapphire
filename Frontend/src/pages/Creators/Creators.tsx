import GradientBackground from '@/entities/GradientBackground/GradientBackground'
import HeaderText from '@/entities/HeaderText/HeaderText'
import classes from '@/pages/Creators/Creators.module.scss'
import profile2img from '@/pages/Creators/assets/2.jpg'
import CreatorCard from '@/widgets/CreatorCard/CreatorCard'

interface ICreators {
  className: string
}

export default function Creators({ className }: ICreators) {
  return (
    <main className={className}>
      <GradientBackground />
      <HeaderText>Разработчики</HeaderText>
      <div className={classes.flexWrapper}>
        <CreatorCard
          className={classes.creatorCard}
          imageUrl={profile2img}
          altText="Шведько Вячеслав Геннадьевич"
          name="Шведько Вячеслав Геннадьевич"
          role="Frontend разработчик"
        />
        {/* <CreatorCard
          className={classes.creatorCard}
          imageUrl={profile3img}
          altText="Малинин Алексей Беликович"
          name="Малинин Алексей Беликович"
          role="Backend разработчик"
        /> */}
      </div>
    </main>
  )
}
