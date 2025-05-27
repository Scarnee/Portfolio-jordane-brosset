import "./Header.scss";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";
//import BlackLogo from '../../assets/blackLogo-no-background.png'
import WhiteLogo from '../../assets/logo.svg'



export default function Header() {
    return (
        <header>
            <div className="headerLeft">
                <Link to="/">
                    <img src={WhiteLogo} alt="logoJB"></img>
                </Link>
            </div>
            <div className="headerRight">
                <LanguageSelector />
            </div>
        </header>
    );
}
