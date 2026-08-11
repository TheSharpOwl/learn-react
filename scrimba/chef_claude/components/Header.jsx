import chefLogo from "../images/chef-claude-icon.png"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="Chef Claude logo" />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}
