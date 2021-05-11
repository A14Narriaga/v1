import { CSSProperties } from "react";

const Tool = ({ icon, progress, end, level, name }:
    {icon: string, progress: number, end: number, level: string, name: string}
) => {
    return (
        <section className="tool">
            <i className={icon}></i>
            <div className="tool-content">
                <div className="tool-progress-bar" style={{ "--start": progress, "--end": end } as CSSProperties} data-label={level}></div>
                <p className="tool-name">{name}</p>
            </div>
        </section>
    )
}

export default Tool
