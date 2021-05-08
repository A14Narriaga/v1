const HeaderMovile = (
    { headerInfo, headerBtn, themeIcon, languageIcon, handleThemeChange, handlelanguageChange }:
        { headerInfo: string, headerBtn: string, themeIcon: string, languageIcon: string, handleThemeChange: any, handlelanguageChange: any }
) => {
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
                    <img src="./img/profile1.jpg" alt="Alan Arriaga img" />
                </div>
                <div className="content">
                    <p>{headerInfo}</p>
                </div>
                <section className="resume">
                    <a href="/">
                        <i className="fas fa-download"></i>
                        <p>{headerBtn}</p>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default HeaderMovile