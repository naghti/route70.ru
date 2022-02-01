import React from "react";
import '../styles/OtherInfo/otherInfo.css'
function OtherInfo(props) {
    return (
        <div className="otherInfo">
            <div className="title">
                <h3 className={'titleText'}>Доп.информация</h3>
            </div>
            <div className="infoBlocksBox">
                <div className="infoBlock ">
                    <div className="infoBlockImgBox">
                        <img className={'infoBlockImg'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png" alt="VK"/>
                    </div>
                    <h3 className={'infoBlockText'}>Мы в Вконтакте</h3>
                </div>
                <a href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/cWtJvaWObdOzWTWQ8HWOuD">
                    <div className="infoBlock ">
                        <div className="infoBlockImgBox">
                            <img className={'infoBlockImg'} src="https://img.icons8.com/ultraviolet/40/000000/feedback.png" alt="VK"/>
                        </div>
                        <h3 className={'infoBlockText'}>Обратная Связь</h3>
                    </div>
                </a>
                <a href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/blW4RcGvncNioSW7O0ySoC">
                    <div className="infoBlock ">
                        <div className="infoBlockImgBox">
                            <img className={'infoBlockImg'} src="https://img.icons8.com/ultraviolet/40/000000/add-image.png" alt="VK"/>
                        </div>
                        <h3 className={'infoBlockText'}>Добавить Место</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default OtherInfo;
