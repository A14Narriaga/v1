import React from 'react'

const Header = (
    { headerInfo, headerBtn, handleThemeChange, handleLanguajeChange }:
        { headerInfo: string, headerBtn: string, handleThemeChange: any, handleLanguajeChange: any }
) => {
    return (
        <div className="header-container">
            <header>
                <section className="card">
                    <img src="./img/me.jpg" alt="Alan Arriaga img" />
                    <section className="info">
                        <div className="title">
                            <p><span>ALAN</span>ARRIAGA</p>
                            <div onClick={handleLanguajeChange}>
                                <i className="fas fa-language"></i>
                            </div>
                            <div onClick={handleThemeChange}>
                                <i className="fas fa-sun"></i>
                            </div>
                        </div>
                        <div className="content">
                            <p>{headerInfo}</p>
                        </div>
                    </section>
                </section>
                <section className="resume">
                    <a href="/">
                        <i className="fas fa-download"></i>
                        <p>{headerBtn}</p>
                    </a>
                </section>
            </header>
        </div>
    )
}

export default Header
