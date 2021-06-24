import CardProject from "./CardProject"
import Tool from "./Tool"
import Data from "../json/data.json"
import { useEffect, useState } from "react";
import CardEducation from "./CardEducation";

const Modal = ({ showModal, handleShowModal, language, cardSelected }:
    { showModal: string, handleShowModal: any, language: string, cardSelected: number }) => {

    const [progress, setProgress] = useState(0)

    const resetProgres = () => setProgress(0)

    useEffect(() => {
        if (cardSelected === 3) {
            if (progress < 100) {
                setTimeout(() => {
                    setProgress(progress + 1)
                }, 30);
            }
        }
    }, [cardSelected, progress])

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
        case 1: container =
            <div className="container-modal">
                <section className="about-container">
                    <p className="about-paragraph">¡Hola!,</p>
                    <p className="about-paragraph">Soy Arriaga Martinez Alan Eduardo, estudiante de Noveno Semestre de la Escuela Superior de Cómputo del Instituto Politécnico Nacional.</p>
                    <p className="about-paragraph">Me apasiona el desarrollo web tanto de back-end como de front-end, asi como el desarrollo móvil, la algoritmia y las finanzas personales.</p>
                    <p>Aptitudes:</p>
                    <ul className="qualities">
                        <li>Creatividad</li>
                        <li>Trabajo en equipo</li>
                        <li>Responsabilidad</li>
                        <li>Organización</li>
                    </ul>
                    <p>Hobbies:</p>
                    <div className="hobbies">
                        <i className="fas fa-chalkboard-teacher"></i>
                        <i className="fas fa-book"></i>
                        <i className="fas fa-dumbbell"></i>
                    </div>
                </section>
            </div>;
            break;
        case 2: container =
            <div className="container-modal">
                <CardEducation
                    school={Data.spa.EDUCATION[1].SCHOOL}
                    content={language === "spanish" ? Data.spa.EDUCATION[1].COURSE : Data.eng.EDUCATION[1].COURSE}
                    period={language === "spanish" ? Data.spa.EDUCATION[1].PERIOD : Data.eng.EDUCATION[1].PERIOD}
                    img={Data.spa.EDUCATION[1].IMG} />
                <CardEducation
                    school={Data.spa.EDUCATION[2].SCHOOL}
                    content={language === "spanish" ? Data.spa.EDUCATION[2].COURSE : Data.eng.EDUCATION[2].COURSE}
                    period={language === "spanish" ? Data.spa.EDUCATION[2].PERIOD : Data.eng.EDUCATION[2].PERIOD}
                    img={Data.spa.EDUCATION[2].IMG} />
            </div>
            break;
        case 3: container =
            <div className="container-modal">
                <Tool
                    icon={Data.icon.XD}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Adobe XD"} />
                <Tool
                    icon={Data.icon.SQL}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"SQL"} />
                <Tool
                    icon={Data.icon.REACT}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"React"} />
                <Tool
                    icon={Data.icon.HTML}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"HTML5"} />
                <Tool
                    icon={Data.icon.CSS}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"CSS3"} />
                <Tool
                    icon={Data.icon.SASS}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Sass"} />
                <Tool
                    icon={Data.icon.JS}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"JavaScript"} />
                <Tool
                    icon={Data.icon.TS}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"TypeScript"} />
                <Tool
                    icon={Data.icon.BOOTSTRAP}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Bootstrap"} />
                <Tool
                    icon={Data.icon.PHP}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Php"} />
                <Tool
                    icon={Data.icon.JAVA}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Java"} />
                <Tool
                    icon={Data.icon.PYTHON}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Python"} />
                <Tool
                    icon={Data.icon.LINUX}
                    progress={progress}
                    end={70}
                    level={language === "spanish" ? Data.spa.INTER_LABEL : Data.eng.INTER_LABEL}
                    name={"Linux"} />
            </div>
            break;
        case 4: container =
            <div className="container-modal">
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
            </div>
            break;
        case 5: container =
            <div className="container-modal">
                <p className="experience-text">Actualmente no cuento con experiencia laboral pero en la sección de proyectos se pueden encontrar aquellos que he desarrollado en mis tiempos libres para probar mis habilidades.</p>
            </div>
            break;
        case 6: container =
            <div className="container-modal-contact">
                <div className="wrapper-contact">
                    <a href={Data.link.WHATSAPP} className="contact-btn" target="blank">
                        <i className={Data.icon.WHATS}></i>
                        <div className="contact-btnTitle">
                            <p>WhatsApp</p>
                            <span>5585175413</span>
                        </div>
                    </a>
                    <a href={Data.link.MAIL} className="contact-btn" target="blank">
                        <i className={Data.icon.MAIL}></i>
                        <div className="contact-btnTitle">
                            <p>Gmail</p>
                            <span>A14Narriaga@gmail.com</span>
                        </div>
                    </a>
                    <a href={Data.link.GITHUB} className="contact-btn" target="blank">
                        <i className={Data.icon.GITHUB}></i>
                        <div className="contact-btnTitle">
                            <p>GitHub</p>
                            <span>A14Narriaga</span>
                        </div>
                    </a>
                    <a href={Data.link.LINKEDIN} className="contact-btn" target="blank">
                        <i className={Data.icon.IN}></i>
                        <div className="contact-btnTitle">
                            <p>LinkedIn</p>
                            <span>A14Narriaga</span>
                        </div>
                    </a>
                </div>
            </div>
            break;
    }

    return (
        <section className={`modal ${showModal}`}>
            <div className="header-modal">
                <div className="title-modal">
                    <p>{title}</p>
                </div>
            </div>
            {container}
            <div className="line-modal"></div>
            <div onClick={handleShowModal} className="actions-modal">
                <i onClick={resetProgres} className="fas fa-arrow-circle-left"></i>
                <p onClick={resetProgres}>{language === "spanish" ? Data.spa.BACK_BTN : Data.eng.BACK_BTN}</p>
            </div>
        </section>
    )
}

export default Modal
