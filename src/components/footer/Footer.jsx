import "./Footer.css";

import htmlIcon from "icons/html.png";
import icoCss from "/icons/css.png";

export default function Footer() {
  return (
    <section className="footer">
        <div class="footer-transition"></div>
        <div className="footer-tecnologias">
            <p className="footer-tecnologias-title">Technology that Brings This Experience to Life</p>
            <div className="footer-tecnologias-icones">
                <img className="footer-tecnologias-icon" src={htmlIcon} alt="logo html 5"/>
                <img className="footer-tecnologias-icon" src={icoCss} alt="logo css"/>
                <img className="footer-tecnologias-icon" src="/MEMOS-STORE/icons/js.png" alt="logo javascript" />
                <img className="footer-tecnologias-icon" src="icons/git.png" alt="logo git" />
                <img className="footer-tecnologias-icon" src="icons/react.png" alt="logo react"/>
                <img className="footer-tecnologias-icon" src="icons/Vite.png" alt="logo vite"/>
            </div>
        </div>
        <div className="footer-infoLinks">
            <ul className="footer-info">
                <li>Guillermo Gallardo Pino</li>
                <li>guillermogallardopino@gmail.com</li>
                <li>+57 3126968778</li>
            </ul>
            <div className="footer-Links">
                <a href="https://www.linkedin.com/in/guillermo-andres-gallardo-pino-30911822a/" target="_blank">
                    <img src="icons/linkedin.png" alt="Linkedin icon" className="footer_icon"/>
                </a>
                <a href="https://github.com/GuillermoGallardo1998" target="_blank">
                    <img src="icons/github.png" alt="Github icon" className="footer_icon"/>
                </a>
                <a href="https://discordapp.com/users/memo8857" target="_blank">
                    <img src="icons/discord.png" alt="Discord icon" className="footer_icon"/>
                </a>
                <a href="https://www.instagram.com/just.gallardo.98/" target="_blank">
                    <img src="icons/instagram.png" alt="Instagram icon" className="footer_icon"/>
                </a>
            </div>
        </div>
        
    </section>
  )
}
