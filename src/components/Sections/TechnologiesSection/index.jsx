import styles from './style.module.css'
import { technologies } from '../../../data/technologies'
import { CardTechnology } from '../../TechnologiesCards'
import { TittleH2 } from '../../TittleH2'

export function TechnologiesSection() {
  const [tech1, tech2, tech3, tech4] = technologies
  return (
    <section id='stack__section' className={styles.container__section}>
      <TittleH2>Tecnologias</TittleH2>
      <ul className={styles.container__card}>
        <CardTechnology {...tech1} />
        <CardTechnology {...tech2} />
        <CardTechnology {...tech3} />
        <CardTechnology {...tech4} />
      </ul>
    </section>
  )
}

