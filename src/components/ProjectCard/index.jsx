import styles from './style.module.css'

export function ProjectCard({ tittle, description, link, acessText, img, alt }) {
  return (
    <li className={styles.project__card}>
      <div>
        <h3>
          {tittle}
        </h3>
        <p>
          {description}
        </p>
        <a href={link}>
          {acessText}
        </a>
      </div>
      <figure>
        <img
          src={img}
          alt={alt}
        />
      </figure>
    </li>
  )
}