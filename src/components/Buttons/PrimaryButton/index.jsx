import styles from './style.module.css'

export function PrimaryButton({ text }) {
  return (
    <button className={styles.primary__button}>{text}</button>
  )
}