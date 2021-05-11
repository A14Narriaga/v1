import CardProject from "./CardProject"
import Data from "../json/data.json"

const Modal = ({ showModal, handleShowModal, language, cardSelected }:
    { showModal: string, handleShowModal: any, language: string, cardSelected: number }) => {

    var title;
    switch (cardSelected) {
        case 1: title = language === "spanish" ? Data.spa.CARD_1 : Data.eng.CARD_1; break;
        case 2: title = language === "spanish" ? Data.spa.CARD_2 : Data.eng.CARD_2; break;
        case 3: title = language === "spanish" ? Data.spa.CARD_3 : Data.eng.CARD_3; break;
        case 4: title = language === "spanish" ? Data.spa.CARD_4 : Data.eng.CARD_4; break;
        case 5: title = language === "spanish" ? Data.spa.CARD_5 : Data.eng.CARD_5; break;
        case 6: title = language === "spanish" ? Data.spa.CARD_6 : Data.eng.CARD_6; break;
    }

    var container;
    switch (cardSelected) {
        case 1: container = <h1>1</h1>; break;
        case 2: container = <h1>2</h1>; break;
        case 3: container = <h1>3</h1>; break;
        case 4: container =
            <>
                <CardProject
                    title={language === "spanish" ? Data.spa.projects[1].title : Data.eng.projects[1].title}
                    link={Data.spa.projects[1].link}
                    git={Data.spa.projects[1].git}
                    img={Data.spa.projects[1].img}
                    desc={language === "spanish" ? Data.spa.projects[1].desc : Data.eng.projects[1].desc}
                    tools={Data.spa.projects[1].tools}
                />
                {/* <CardProject 
                title = {language === "spanish" ? Data.spa.projects[2].title : Data.eng.projects[2].title}
                link = {Data.spa.projects[2].link}
                git={Data.spa.projects[2].git}
                img={Data.spa.projects[2].img}
                desc={language === "spanish" ? Data.spa.projects[2].desc : Data.eng.projects[2].desc}
                tools={Data.spa.projects[2].tools}
            /> */}
                <CardProject
                    title={language === "spanish" ? Data.spa.projects[3].title : Data.eng.projects[3].title}
                    link={Data.spa.projects[3].link}
                    git={Data.spa.projects[3].git}
                    img={Data.spa.projects[3].img}
                    desc={language === "spanish" ? Data.spa.projects[3].desc : Data.eng.projects[3].desc}
                    tools={Data.spa.projects[3].tools}
                />
                <CardProject
                    title={language === "spanish" ? Data.spa.projects[4].title : Data.eng.projects[4].title}
                    link={Data.spa.projects[4].link}
                    git={Data.spa.projects[4].git}
                    img={Data.spa.projects[4].img}
                    desc={language === "spanish" ? Data.spa.projects[4].desc : Data.eng.projects[4].desc}
                    tools={Data.spa.projects[4].tools}
                />
            </>
            break;
        case 5: container = <h1>5</h1>; break;
        case 6: container =
            <>
                <a href={Data.link.WHATSAPP} className="contact-btn">
                    <i className={Data.icon.WHATS}></i>
                    <div className="contact-btnTitle">
                        <p>WhatsApp</p>
                        <span>5585175413</span>
                    </div>
                </a>
                <a href={Data.link.MAIL} className="contact-btn">
                    <i className={Data.icon.MAIL}></i>
                    <div className="contact-btnTitle">
                        <p>Gmail</p>
                        <span>A14Narriaga@gmail.com</span>
                    </div>
                </a>
                <a href={Data.link.TWITTER} className="contact-btn">
                    <i className={Data.icon.TW}></i>
                    <div className="contact-btnTitle">
                        <p>Twitter</p>
                        <span>@A14Narriaga</span>
                    </div>
                </a>
                <a href={Data.link.GITHUB} className="contact-btn">
                    <i className={Data.icon.GITHUB}></i>
                    <div className="contact-btnTitle">
                        <p>GitHub</p>
                        <span>A14Narriaga</span>
                    </div>
                </a>
                <a href={Data.link.LINKEDIN} className="contact-btn">
                    <i className={Data.icon.IN}></i>
                    <div className="contact-btnTitle">
                        <p>LinkedIn</p>
                        <span>Alan Arriaga</span>
                    </div>
                </a>
            </>
            break;
    }

    return (
        <section className={`modal ${showModal}`}>
            <div className="header-modal">
                <div onClick={handleShowModal} className="actions-modal">
                    <i className="fas fa-times"></i>
                </div>
                <div className="title-modal">
                    <p>{title}</p>
                </div>
            </div>
            <div className="container-modal">
                {container}
            </div>
            <div className="line-modal"></div>
        </section>
    )
}

export default Modal
