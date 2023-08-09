import './style.module.css'
import { NavList } from '../NavList';

export function NavHeader() {
  return (
    <nav>
      <ul>
        <NavList
          href={'#about-me__section'}
          text={'Sobre'}
        />
        <NavList
          href={'#stack__section'}
          text={'Stack'}
        />
        <NavList
          href={'#projects__section'}
          text={'Projetos'}
        />
      </ul>
    </nav>
  )
}

