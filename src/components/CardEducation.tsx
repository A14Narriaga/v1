import { CSSProperties } from "react";

const CardEducation = ({school, content, period, img}: 
    {school: string, content: string, period: string, img:string}) => {

    return (
        <section className="card-edu" style={{"--myImg": `url(./img/${img})`} as CSSProperties} >
            <div className="edu-content">
                <p className="edu-school">{school}</p>
                <p className="edu-content">{content}</p>
                <p className="edu-period">{period}</p>
            </div>
        </section>
    )
}

export default CardEducation