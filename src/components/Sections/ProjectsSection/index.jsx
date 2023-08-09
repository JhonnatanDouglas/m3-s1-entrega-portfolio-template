import styles from './style.module.css'
import gitImg from '../../../assets/git-icon.png'
import { projects } from '../../../data/projects'
import { ProjectCard } from '../../ProjectCard'

export function ProjectsSection() {
  const [project1, project2, project3, project4] = projects;
  return (
    <section id='projects__section' className={styles.container__section}>
      <h3>Projetos</h3>
      <ul>
        <ProjectCard
          tittle={project1.name}
          description={project1.descricao}
          link={'#link1'}
          acessText={'Saiba Mais'}
          img={gitImg}
          alt={'imagem do github'}
        />
        <ProjectCard
          tittle={project2.name}
          description={project2.descricao}
          link={'#link2'}
          acessText={'Saiba Mais'}
          img={gitImg}
          alt={'imagem do github'}
        />
        <ProjectCard
          tittle={project3.name}
          description={project3.descricao}
          link={'#link3'}
          acessText={'Saiba Mais'}
          img={gitImg}
          alt={'imagem do github'}
        />
        <ProjectCard
          tittle={project4.name}
          description={project4.descricao}
          link={'#link4'}
          acessText={'Saiba Mais'}
          img={gitImg}
          alt={'imagem do github'}
        />
      </ul>
    </section>
  )
}