import { useEffect, useState } from "react";

const HeaderMovile = (
    { headerInfo, headerBtn, themeIcon, languageIcon, handleThemeChange, handlelanguageChange, resume }:
        { headerInfo: string, headerBtn: string, themeIcon: string, languageIcon: string, handleThemeChange: any, handlelanguageChange: any, resume: string }
) => {

    const [picture, setPicture] = useState(0);

    useEffect(() => {
        if (picture === 4) setPicture(0);
        else {
            setTimeout(() => {
                setPicture(picture + 1);
            }, 3000);
        }
    }, [picture])

    return (
        <div className="header-container-movile">
            <div className="back"></div>
            <div className="header-movile">
                <div className="btns">
                    <div onClick={handlelanguageChange}>
                        <i className={languageIcon}></i>
                    </div>
                    <div onClick={handleThemeChange}>
                        <i className={themeIcon}></i>
                    </div>
                </div>
                <div className="title">
                    <p><span>ALAN</span>ARRIAGA</p>
                </div>
                <div className="img-content">
                <img src={`./img/profile${picture}.jpg`} alt={`Alan Arriaga ${picture}`} />
                </div>
                <div className="content">
                    <p>{headerInfo}</p>
                </div>
                <section className="resume">
                    <a href={`./files/${resume}`} target="blank">
                        <i className="fas fa-download"></i>
                        <p>{headerBtn}</p>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default HeaderMovile