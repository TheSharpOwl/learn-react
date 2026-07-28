import profile from '../assets/profile.jpg'
import './Top.css'

function Top() {
    return (
        <div className="top">
            <img src={profile} alt="Profile" className="profile-img"/>
            <span className="name">Mohamad Ziad Alkabakibi</span>
            <span className="title">Software Engineer</span>
            <a className="website" href="https://TheSharpOwl.github.io" target="_blank" rel="noopener noreferrer">TheSharpOwl.github.io</a>
        </div>
    )
}

export default Top