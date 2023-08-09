import styles from './style.module.css'
import bannerImage from '../../../assets/banner-img.png'
import { PrimaryButton } from '../../Buttons/PrimaryButton'
import { username } from '../../../data/user'

export function HomeSection() {
  return (
    <section className={styles.container__section}>
      <div className={styles.user__introduction}>
        <h5>{username}</h5>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Uma frase interessante sobre mim</p>
        <PrimaryButton text='Saiba mais' />
      </div>
      <figure className={styles.user__banner}>
        <img src={bannerImage} alt='banner do usuário José da Silva' />
      </figure>
    </section>
  )
}