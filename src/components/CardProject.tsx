import Data from "../json/data.json"

const CardProject = ({ title, link, git, img, desc }:
    { title: string, link: string, git: string, img: string, desc: string }) => {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt asperiores reiciendis consectetur, doloribus, vel dignissimos dolores officiis placeat debitis hic eum doloremque saepe repellat nemo necessitatibus voluptas error autem.
            </div>
        </section>
    )
}

export default CardProject
