import CardProject from "./CardProject"
import Data from "../json/data.json"

const Modal = ({ showModal, handleShowModal, language, cardSelected }: 
    { showModal: string, handleShowModal: any, language: string, cardSelected: number }) => {

    var title;
    switch(cardSelected) {
        case 1: title = language === "spanish" ? Data.spa.CARD_1 : Data.eng.CARD_1; break;
        case 2: title = language === "spanish" ? Data.spa.CARD_2 : Data.eng.CARD_2; break;
        case 3: title = language === "spanish" ? Data.spa.CARD_3 : Data.eng.CARD_3; break;
        case 4: title = language === "spanish" ? Data.spa.CARD_4 : Data.eng.CARD_4; break;
        case 5: title = language === "spanish" ? Data.spa.CARD_5 : Data.eng.CARD_5; break;
        case 6: title = language === "spanish" ? Data.spa.CARD_6 : Data.eng.CARD_6; break;
    }
    
    return (
        <section className={`modal ${showModal}`}>
            <div className="header-modal">
                <div onClick={handleShowModal} className="actions-modal">
                    <i className="fas fa-times"></i>
                </div>
                <div className="title-modal">
                    <p>{title}</p>
                </div>
            </div>
            <div className="container-modal">
                {cardSelected === 1 &&
                    <>
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                    </>
                }
            </div>
            <div className="line-modal"></div>
        </section>
    )
}

export default Modal
