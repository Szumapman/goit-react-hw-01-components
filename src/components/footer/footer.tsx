import css from './footer.module.css'
import goITLogo from '../../assets/goITlogo.svg'
import reactLogo from '../../assets/react.svg'
import gitHubLogo from '../../assets/github-color.svg'


export const Footer = () => {
  return (
    <footer className={css.footer}>
        <a href="https://goit.global/pl/" target="_blank">
            <img src={goITLogo} className={css.logo} alt="GoIT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={css.logo + ' ' + css.react} alt="React logo" />
        </a>
        <a href="https://github.com/Szumapman" target="_blank">
              <img src={gitHubLogo} className={css.logo} alt="GitHub logo" />
        </a>
    </footer>
  )
}