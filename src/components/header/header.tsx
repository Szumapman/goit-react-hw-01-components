import reactHomeLogo from '../../assets/reactHomeLogo.svg'
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo-container">
                        <a href="./index.html">
                            <img src={reactHomeLogo} className="logo react" alt="React home logo" />
                        </a>
                    </div>    
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="./index.html">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="./index.html">Statistics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="./index.html">Friends list</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link {=$highlight-act}" href="./index.html">Transactions</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>  
    )
}