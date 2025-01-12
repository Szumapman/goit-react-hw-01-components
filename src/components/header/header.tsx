import reactHomeLogo from '../../assets/reactHomeLogo.svg'
import css from './header.module.css'

type HeaderProps = {
    setCurrentContent: (content: string) => void;
};

export const Header = ({ setCurrentContent }: HeaderProps) => {
    const handleContentChange = (content: string) => {
        setCurrentContent(content);
    };

    return (
        <header className={css.header}>
            <div>
                <nav className={css.nav}>
                    <div className={css.logoContainer}>
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleContentChange('profile')
                        }}>
                            <img src={reactHomeLogo} className={css.logo} alt="React home logo" />
                        </a>
                    </div>    
                    <ul className={css.navList}>
                    <li className={css.navItem}>
                            <a className={css.navLink} href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('profile')
                                }}>Profile
                            </a>
                        </li>
                        <li className={css.navItem}>
                            <a className={css.navLink} href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('statistics')
                                }}>Statistics
                            </a>
                        </li>
                        <li className={css.navItem}>
                            <a className={css.navLink} href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('friendsList')
                                }}>Friends list
                            </a>
                        </li>
                        <li className={css.navItem}>
                            <a className={css.navLink} href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('transactions')
                                }}>Transactions
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>  
    )
}