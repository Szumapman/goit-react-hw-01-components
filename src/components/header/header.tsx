import reactHomeLogo from '../../assets/reactHomeLogo.svg'
import './header.css'

type HeaderProps = {
    setCurrentContent: (content: string) => void;
};

export const Header = ({ setCurrentContent }: HeaderProps) => {
    const handleContentChange = (content: string) => {
        setCurrentContent(content);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo-container">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            handleContentChange('profile')
                        }}>
                            <img src={reactHomeLogo} className="logo" alt="React home logo" />
                        </a>
                    </div>    
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('profile')
                                }}>Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('statistics')
                                }}>Statistics
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleContentChange('friendsList')
                                }}>Friends list
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="#" onClick={(e) => {
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