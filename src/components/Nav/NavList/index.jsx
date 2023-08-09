import styles from './style.module.css'

export function NavList({ href, text }) {
  return (
    <li>
      <a className={styles.link} href={href}>{text}</a>
    </li>
  )
}