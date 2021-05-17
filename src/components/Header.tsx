import React from 'react'

const Header = (
    { headerInfo, headerBtn, themeIcon, languageIcon, handleThemeChange, handlelanguageChange, resume }:
        { headerInfo: string, headerBtn: string, themeIcon: string, languageIcon: string, handleThemeChange: any, handlelanguageChange: any, resume: string }
) => {
    return (
        <div className="header-container">
            <header>
                <section className="card">
                    <img src="./img/profile1.jpg" alt="Alan Arriaga img" />
                    <section className="info">
                        <div className="title">
                            <p><span>ALAN</span>ARRIAGA</p>
                            <div onClick={handlelanguageChange}>
                                <i className={languageIcon}></i>
                            </div>
                            <div onClick={handleThemeChange}>
                                <i className={themeIcon}></i>
                            </div>
                        </div>
                        <div className="content">
                            <p>{headerInfo}</p>
                        </div>
                    </section>
                </section>
                <section className="resume">
                    <a href={`./files/${resume}`} download>
                        <i className="fas fa-download"></i>
                        <p>{headerBtn}</p>
                    </a>
                </section>
            </header>
        </div>
    )
}

export default Header
