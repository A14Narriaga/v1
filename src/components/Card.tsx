const Card = ({title, icon}: {title: string, icon: string}) => {
    return (
        <section className="card">
            <a href="/">
                <p>{title}</p>
                <i className={icon}></i>
            </a>
        </section>
    )
}

export default Card
