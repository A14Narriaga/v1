
const CardEducation = ({school, content, period, img}: 
    {school: string, content: string, period: string, img: string}) => {

    const style = {
        backgroundImage: `linear-gradient(to bottom, rgba(26, 24, 24, 0.850), rgba(26, 24, 24, 0.850)), url(./img/${img})`,
    }

    return (
        <section 
            className="card-edu" style={style} >
            <div className="edu-content">
                <p className="edu-school">{school}</p>
                <p className="edu-content">{content}</p>
                <p className="edu-period">{period}</p>
            </div>
        </section>
    )
}

export default CardEducation