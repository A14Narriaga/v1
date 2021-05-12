import { useState, useEffect } from "react"
import { useMediaPredicate } from "react-media-hook"
import Card from "./Card"
import Header from "./Header"
import HeaderMovile from "./HeaderMovile"
import Modal from "./Modal"
import Data from "../json/data.json"
import "../sass/App.scss"


type themeOptions = "dark" | "light"
const themeInitialState = (localStorage.getItem("theme") || "light") as themeOptions
type languageOptions = "spanish" | "english"
const languageInitialState = (localStorage.getItem("language") || "spanish") as languageOptions

const App = () => {

    const movileSize = useMediaPredicate("(max-width: 699px)");
    const [theme, setTheme] = useState(themeInitialState)
    const [language, setlanguage] = useState(languageInitialState)
    const [showModal, setShowModal] = useState("hidde")
    const [cardSelected, setCardSelected] = useState(1)

    const handleThemeChange = () => {
        setTheme(theme => (theme === "dark" ? "light" : "dark"))
        document.body.classList.toggle(theme)
    }

    const handlelanguageChange = () => {
        setlanguage(language => (language === "spanish" ? "english" : "spanish"))
        document.body.classList.toggle(language)
    }

    const handleShowModal = (card: number) => {
        setCardSelected(card)
        if(movileSize) document.body.style.position = showModal === "hidde" ? "fixed" : "";
        setShowModal(modal => (modal === "hidde" ? "" : "hidde"));
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.classList.toggle(theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem("language", language)
        document.body.classList.toggle(language)
    }, [language])

    return (
        <>
            {!movileSize ?
                <>
                    <Header
                        headerInfo={language === "spanish" ? Data.spa.HEADER_INFO : Data.eng.HEADER_INFO}
                        headerBtn={language === "spanish" ? Data.spa.HEADER_BTN : Data.eng.HEADER_BTN}
                        themeIcon={theme === "dark" ? Data.icon.MOON : Data.icon.SUN}
                        languageIcon={language === "spanish" ? Data.icon.SPA : Data.icon.ENG}
                        handleThemeChange={handleThemeChange}
                        handlelanguageChange={handlelanguageChange} />
                    <div className="container">
                        <main>
                            <section className="cards">
                                <Card id={1} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_1 : Data.eng.CARD_1} icon={Data.icon.CARD_1} />
                                <Card id={2} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_2 : Data.eng.CARD_2} icon={Data.icon.CARD_2} />
                                <Card id={3} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_3 : Data.eng.CARD_3} icon={Data.icon.CARD_3} />
                                <Card id={4} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_4 : Data.eng.CARD_4} icon={Data.icon.CARD_4} />
                                <Card id={5} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_5 : Data.eng.CARD_5} icon={Data.icon.CARD_5} />
                                <Card id={6} handleShowModal={handleShowModal} typeClass="" title={language === "spanish" ? Data.spa.CARD_6 : Data.eng.CARD_6} icon={Data.icon.CARD_6} />
                            </section>
                        </main>
                    </div>
                </>
                :
                <>
                    <HeaderMovile
                        headerInfo={language === "spanish" ? Data.spa.HEADER_INFO : Data.eng.HEADER_INFO}
                        headerBtn={language === "spanish" ? Data.spa.HEADER_BTN : Data.eng.HEADER_BTN}
                        themeIcon={theme === "dark" ? Data.icon.MOON : Data.icon.SUN}
                        languageIcon={language === "spanish" ? Data.icon.SPA : Data.icon.ENG}
                        handleThemeChange={handleThemeChange}
                        handlelanguageChange={handlelanguageChange}
                    />
                    <div className="container-mobile" >
                        <main>
                            <section className="cards-mobile">
                                <Card id={1} handleShowModal={handleShowModal} typeClass="-mobile sm" title={language === "spanish" ? Data.spa.CARD_1 : Data.eng.CARD_1} icon={Data.icon.CARD_1} />
                                <Card id={2} handleShowModal={handleShowModal} typeClass="-mobile sm" title={language === "spanish" ? Data.spa.CARD_2 : Data.eng.CARD_2} icon={Data.icon.CARD_2} />
                                <Card id={3} handleShowModal={handleShowModal} typeClass="-mobile lg" title={language === "spanish" ? Data.spa.CARD_3 : Data.eng.CARD_3} icon={Data.icon.CARD_3} />
                                <Card id={4} handleShowModal={handleShowModal} typeClass="-mobile sm" title={language === "spanish" ? Data.spa.CARD_4 : Data.eng.CARD_4} icon={Data.icon.CARD_4} />
                                <Card id={5} handleShowModal={handleShowModal} typeClass="-mobile sm" title={language === "spanish" ? Data.spa.CARD_5 : Data.eng.CARD_5} icon={Data.icon.CARD_5} />
                                <Card id={6} handleShowModal={handleShowModal} typeClass="-mobile lg" title={language === "spanish" ? Data.spa.CARD_6 : Data.eng.CARD_6} icon={Data.icon.CARD_6} />
                            </section>
                        </main>
                    </div>
                </>
            }
            <Modal 
                showModal={showModal}
                handleShowModal={handleShowModal}
                language={language}
                cardSelected={cardSelected}
            />
        </>
    )
}

export default App
