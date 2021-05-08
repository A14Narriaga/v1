const Card = ({title, icon, typeClass}: 
    {title: string, icon: string, typeClass: string }
) => {
    return (
        <section className={"card"+typeClass}>
            <a href="/">
                <p>{title}</p>
                <i className={icon}></i>
            </a>
        </section>
    )
}

export default Card
