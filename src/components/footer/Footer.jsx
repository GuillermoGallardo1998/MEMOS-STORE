import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
        <div className="footer-transition"></div>
        <div className="footer-tecnologias">
            <p className="footer-tecnologias-title">Technology that Brings This Experience to Life</p>
            <div className="footer-tecnologias-icones">
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/html.png`} alt="logo html 5"/>
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/css.png`} alt="logo css"/>
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/js-file.png`} alt="logo javascript" />
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/git.png`} alt="logo git" />
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/react.png`} alt="logo react"/>
                <img className="footer-tecnologias-icon" src={`${import.meta.env.BASE_URL}icons/Vite.png`} alt="logo vite"/>
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
                    <img src={`${import.meta.env.BASE_URL}icons/linkedin.png`} alt="Linkedin icon" className="footer_icon"/>
                </a>
                <a href="https://github.com/GuillermoGallardo1998" target="_blank">
                    <img src={`${import.meta.env.BASE_URL}icons/github.png`} alt="Github icon" className="footer_icon"/>
                </a>
                <a href="https://discordapp.com/users/memo8857" target="_blank">
                    <img src={`${import.meta.env.BASE_URL}icons/discord.png`} alt="Discord icon" className="footer_icon"/>
                </a>
                <a href="https://www.instagram.com/just.gallardo.98/" target="_blank">
                    <img src={`${import.meta.env.BASE_URL}icons/instagram.png`} alt="Instagram icon" className="footer_icon"/>
                </a>
            </div>
        </div>
        
    </section>
  )
}
