import ContactBlock from '@/entities/ContactBlock/ContactBlock'
import GradientBackground from '@/entities/GradientBackground/GradientBackground'
import HeaderText from '@/entities/HeaderText/HeaderText'
import classes from '@/pages/Contacts/Contacts.module.scss'
import contactsSvg from '@/pages/Contacts/assets/contacts.svg?url'
import Discord from '@/pages/Contacts/assets/discord.svg'
import Mail from '@/pages/Contacts/assets/mail.svg'
import Phone from '@/pages/Contacts/assets/phone.svg'
import Telegram from '@/pages/Contacts/assets/telegram.svg'
import VK from '@/pages/Contacts/assets/vk.svg'
import Youtube from '@/pages/Contacts/assets/youtube.svg'

interface IContacts {
  className: string
}

export default function Contacts({ className }: IContacts) {
  return (
    <main className={className}>
      <GradientBackground />
      <HeaderText>Наши контакты</HeaderText>
      <section className={classes.wrapper}>
        <div className={classes.contactWrapper}>
          <ContactBlock
            href="mailto:example@example.com&body=Пожалуйста, не отправляйте это письмо."
            isLeft={true}
            description="Отправить сообщение на почту"
          >
            <Mail className={classes.logo} />
          </ContactBlock>
          <ContactBlock
            href="tel:+79999999999"
            isLeft={true}
            description="+7-999-999-99-99"
          >
            <Phone className={classes.logo} />
          </ContactBlock>
          <ContactBlock
            href="https://vk.com"
            isLeft={true}
            description="ВКонтакте"
          >
            <VK className={classes.logo} />
          </ContactBlock>
          <ContactBlock
            href="https://discord.com/"
            isLeft={true}
            description="Discord"
          >
            <Discord className={classes.logo} />
          </ContactBlock>
          <ContactBlock
            href="https://www.youtube.com/"
            isLeft={true}
            description="YouTube"
          >
            <Youtube className={classes.logo} />
          </ContactBlock>
          <ContactBlock
            href="https://web.telegram.org/"
            isLeft={true}
            description="Telegram"
          >
            <Telegram className={classes.logo} />
          </ContactBlock>
        </div>
        <img
          src={contactsSvg}
          className={classes.pic}
          alt="Ноутбук с письмами и почтовым ящиком"
        />
      </section>
    </main>
  )
}
