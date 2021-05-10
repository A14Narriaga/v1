const Card = ({id, handleShowModal, title, icon, typeClass}: 
    {id: number ,handleShowModal: any, title: string, icon: string, typeClass: string }
) => {
    return (
        <section onClick={() => handleShowModal(id)} className={`card${typeClass}`}>
            <div className="card-content">
                <p>{title}</p>
                <i className={icon}></i>
            </div>
        </section>
    )
}

export default Card
