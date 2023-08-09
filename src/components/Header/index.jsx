import styles from './style.module.css'
import logo from '../../assets/portfolio.png'
import { NavHeader } from '../Nav/NavHeader'
import { PrimaryButton } from '../Buttons/PrimaryButton'

export function Header() {
  return (
    <header className={styles.container}>
      <figure>
        <img
          src={logo}
          alt='logo com o nome portfólio'
        />
      </figure>
      <NavHeader />
      <PrimaryButton
        text='Contato'
      />
    </header>
  )
}
