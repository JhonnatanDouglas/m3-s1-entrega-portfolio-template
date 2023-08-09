import styles from './style.module.css'

export function CardTechnology({ name, img }) {
  return (
    <li className={styles.tech__card}>
      <figure>
        <img
          src={img}
          alt={`card com a tecnologia ${name}`}
        />
      </figure>
      <p>{name}</p>
    </li>
  )
}
