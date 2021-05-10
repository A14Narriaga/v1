import Data from "../json/data.json"

const CardProject = ({ title, link, git, img, desc, tools }:
    { title: string, link: string, git: string, img: string, desc: string, tools: string }) => {

    var names = tools.split(",")
    var iconTools = names.map(name => <i key={name} className={name}></i>)
    console.log(iconTools);

    return (
        <section className="card-proj">
            <div className="card-proj-header">
                <p>{title}</p>
                <div className="card-proj-actions">
                    {link !== "" &&
                        <a href={link}>
                            <i className={Data.icon.LINK}></i>
                        </a>
                    }
                    {git !== "" &&
                        <a href={git}>
                            <i className={Data.icon.GITHUB}></i>
                        </a>
                    }
                </div>
            </div>
            <div className="card-proj-img">
                <img src={`./img/${img}`} alt={title} />
            </div>
            <div className="card-proj-desc">
                {desc}
            </div>
            <div className="card-proj-tools">
                {iconTools}
            </div>
        </section>
    )
}

export default CardProject
