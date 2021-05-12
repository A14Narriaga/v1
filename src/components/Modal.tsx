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
            <>
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
            </>;
            break;
        case 2: container =
            <>
                <CardEducation
                    school={"ESCOM - IPN"}
                    content={"Ingeniería en Sistemas Computacionales"}
                    period={"Ene 2017 - Actualidad"}
                    img={"ESCOM.png"} />
                <CardEducation
                    school={"UPIICSA - IPN"}
                    content={"Ingles (Nivel B2)"}
                    period={"Mar 2018 - Ene 2020"}
                    img={"UPIICSA.jpg"} />
            </>
            break;
        case 3: container =
            <>
                <Tool
                    icon={Data.icon.REACT}
                    progress={progress}
                    end={70}
                    level={"Intermediate"}
                    name={"React"} />
                <Tool
                    icon={Data.icon.HTML}
                    progress={progress}
                    end={100}
                    level={"Advanced"}
                    name={"HTML5"} />
                <Tool
                    icon={Data.icon.CSS}
                    progress={progress}
                    end={100}
                    level={"Advanced"}
                    name={"CSS3"} />
                <Tool
                    icon={Data.icon.SASS}
                    progress={progress}
                    end={70}
                    level={"Intermediate"}
                    name={"Sass"} />
                <Tool
                    icon={Data.icon.BOOTSTRAP}
                    progress={progress}
                    end={100}
                    level={"Advanced"}
                    name={"Bootstrap"} />
                <Tool
                    icon={Data.icon.JS}
                    progress={progress}
                    end={70}
                    level={"Intermediate"}
                    name={"Javascript"} />
                <Tool
                    icon={Data.icon.PHP}
                    progress={progress}
                    end={34}
                    level={"Basic"}
                    name={"php"} />
            </>
            break;
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
        case 5: container =
            <>
                <p className="experience-text">Actualmente no cuento con experiencia laboral pero en la sección de proyectos se pueden encontrar aquellos que he desarrollado en mis tiempos libres para probar mis habilidades.</p>
            </>
            break;
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
                <div className="title-modal">
                    <p>{title}</p>
                </div>
            </div>
            <div className="container-modal">
                {container}
            </div>
            <div className="line-modal"></div>
            <div onClick={handleShowModal} className="actions-modal">
                <i onClick={resetProgres} className="fas fa-arrow-circle-left"></i>
                <p onClick={resetProgres}>Regresar</p>
            </div>
        </section>
    )
}

export default Modal
