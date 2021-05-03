import { useState, useEffect } from "react"
import Card from "./Card"
import Header from "./Header"
import "../sass/App.scss"
import data from "../json/data.json"

type themeOptions = "dark" | "light"
const themeInitialState = (localStorage.getItem("theme") || "light") as themeOptions
type languageOptions = "spanish" | "english"
const languageInitialState = (localStorage.getItem("language") || "spanish") as languageOptions


const App = () => {

    const [theme, setTheme] = useState(themeInitialState)
    const [language, setlanguage] = useState(languageInitialState)

    const handleThemeChange = () => {
        setTheme(theme => (theme === "dark" ? "light" : "dark"))
        document.body.classList.toggle(theme)
    }

    const handlelanguageChange = () => {
        setlanguage(language => (language === "spanish" ? "english" : "spanish"))
        document.body.classList.toggle(language)
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
            <Header
                headerInfo={language === "spanish" ? data.spa.HEADER_INFO : data.eng.HEADER_INFO}
                headerBtn={language === "spanish" ? data.spa.HEADER_BTN : data.eng.HEADER_BTN}
                themeIcon={theme === "dark" ? data.icon.SUN : data.icon.MOON}
                languageIcon={language === "spanish" ? data.icon.SPA : data.icon.ENG}
                handleThemeChange={handleThemeChange}
                handlelanguageChange={handlelanguageChange}
            />
            <div className="container">
                <main>
                    <section className="cards">
                        <Card title={language === "spanish" ? data.spa.CARD_1 : data.eng.CARD_1} icon={data.icon.CARD_1} />
                        <Card title={language === "spanish" ? data.spa.CARD_2 : data.eng.CARD_2} icon={data.icon.CARD_2} />
                        <Card title={language === "spanish" ? data.spa.CARD_3 : data.eng.CARD_3} icon={data.icon.CARD_3} />
                        <Card title={language === "spanish" ? data.spa.CARD_4 : data.eng.CARD_4} icon={data.icon.CARD_4} />
                        <Card title={language === "spanish" ? data.spa.CARD_5 : data.eng.CARD_5} icon={data.icon.CARD_5} />
                        <Card title={language === "spanish" ? data.spa.CARD_6 : data.eng.CARD_6} icon={data.icon.CARD_6} />
                    </section>
                </main>
            </div>
        </>
    )
}

export default App
