import './sass/index.scss'

const body = document.body
const btnTheme = document.getElementById('theme-toggler') as HTMLElement;
const btnLanguaje = document.getElementById('languaje-toggler') as HTMLElement;
const localTheme = localStorage.getItem('THEME')
const localLanguaje = localStorage.getItem('LANGUAJE')
if(localTheme === 'dark') body.classList.add('dark')
if(localLanguaje === 'english') body.classList.add('english')

btnTheme.addEventListener('click', (): void => {
    body.classList.toggle('dark')
    localStorage.setItem('THEME', body.classList.contains('dark') ? 'dark' : 'light')
})

btnLanguaje.addEventListener('click', (): void => {
    body.classList.toggle('english')
    localStorage.setItem('LANGUAJE', body.classList.contains('english') ? 'english' : 'spanish')
})