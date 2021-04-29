import { useState, useEffect } from "react"
import Card from "./Card"
import Header from "./Header"
import "../sass/App.scss"

type themeOptions = "dark" | "light"
const themeInitialState = (localStorage.getItem("theme") || "light") as themeOptions
type languajeOptions = "spanish" | "english"
const languajeInitialState = (localStorage.getItem("languaje") || "spanish") as languajeOptions


const App = () => {

    const [theme, setTheme] = useState(themeInitialState)
    const [languaje, setLanguaje] = useState(languajeInitialState)

    const handleThemeChange = () => {
        setTheme(theme => (theme === "dark" ? "light" : "dark"))
        document.body.classList.toggle(theme)
    }

    const handleLanguajeChange = () => {
        setLanguaje(languaje => (languaje === "spanish" ? "english" : "spanish"))
        document.body.classList.toggle(languaje)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.classList.toggle(theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem("languaje", languaje)
        document.body.classList.toggle(languaje)
    }, [languaje])

    return (
        <>
            <Header
                headerInfo={languaje === "spanish" ? "Estudiante de Ingeniería en Sistemas Computacionales" : "Computer Systems Engineering Student"}
                headerBtn={languaje === "spanish" ? "Mi CV" : "Resume"}
                handleThemeChange={handleThemeChange}
                handleLanguajeChange={handleLanguajeChange}
            />
            <div className="container">
                <main>
                    <section className="cards">
                        <Card title={languaje === "spanish" ? "Sobre mi" : "About me"} icon={"fas fa-user"} />
                        <Card title={languaje === "spanish" ? "Formación" : "Training"} icon={"fas fa-graduation-cap"} />
                        <Card title={languaje === "spanish" ? "Herramientas y Tecnologías" : "Tools and Technologies"} icon={"fas fa-cogs"} />
                        <Card title={languaje === "spanish" ? "Proyectos" : "Projects"} icon={"fas fa-folder"} />
                        <Card title={languaje === "spanish" ? "Experiencia" : "Experience"} icon={"fas fa-briefcase"} />
                        <Card title={languaje === "spanish" ? "Información de contacto" : "Contact information"} icon={"fas fa-hand-peace"} />
                    </section>
                </main>
            </div>
        </>
    )
}

export default App
