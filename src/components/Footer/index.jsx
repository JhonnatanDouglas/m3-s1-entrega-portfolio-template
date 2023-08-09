import whatsappIcon from '../../assets/whatsapp-icon.png'
import linkedInIcon from '../../assets/linkedin-icon.png'
import gitHubIcon from '../../assets/github-icon.png'
import styles from './style.module.css'
import { user } from '../../data/user'
import { ContactImg } from '../ContactImages'

export function Footer() {
  return (
    <footer id='contact__area' className={styles.footer__container}>
      <div>
        <h3>Contato</h3>
        <div>
          <ContactImg
            url={whatsappIcon}
            altText={'icone do WhatsApp'}
          />
          <ContactImg
            url={linkedInIcon}
            altText={'icone do LinkedIn'}
          />
          <ContactImg
            url={gitHubIcon}
            altText={'icone do GitHub'}
          />
        </div>
      </div>
      <p>Todos os direitos reservados - {user}</p>
    </footer>
  )
}