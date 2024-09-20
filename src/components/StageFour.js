import React from 'react';
import Players from "./Players";

export default function StageOne(props) {
    const arr = props.players
        .sort((a, b) => b.RP - a.RP)
        .map((player, index) => (
            <Players
                key={player.id}
                name={player.username}
                points={player.RP}
                index={index + 1}
            />
        ));

    return (
        <React.Fragment>
            <section className="stage-two stage-three stage-four">
                <div className="promo-card">
                    <div className="flex-container">
                        <div className="img-container">
                            <img src={props.logo} alt=""/>
                        </div>
                        <h2>Compenigma August 2020</h2>
                    </div>
                    <div className="flex-container">
                        <svg onMouseEnter={() => props.popUpHandle(true)} onMouseLeave={() => props.popUpHandle(false)}
                             width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0.5C3.1552 0.5 0 3.6552 0 7.5C0 11.3448 3.1552 14.5 7 14.5C10.8448 14.5 14 11.3448 14 7.5C14 3.6552 10.8448 0.5 7 0.5ZM7 12.4219C6.54694 12.4219 6.17969 12.0546 6.17969 11.6016C6.17969 11.1485 6.54694 10.7812 7 10.7812C7.45306 10.7812 7.82031 11.1485 7.82031 11.6016C7.82031 12.0546 7.45306 12.4219 7 12.4219ZM8.45357 7.02416C8.21726 7.19799 7.82031 7.56891 7.82031 8.10441V8.32031C7.82031 8.77332 7.453 9.14062 7 9.14062C6.547 9.14062 6.17969 8.77332 6.17969 8.32031V8.10441C6.17969 7.18516 6.65473 6.30918 7.48305 5.70155C7.69735 5.54416 7.82031 5.30301 7.82031 5.03906C7.82031 4.58685 7.45221 4.21875 7 4.21875C6.54779 4.21875 6.17969 4.58685 6.17969 5.03906C6.17969 5.49207 5.81238 5.85938 5.35938 5.85938C4.90637 5.85938 4.53906 5.49207 4.53906 5.03906C4.53906 3.68202 5.64296 2.57812 7 2.57812C8.35704 2.57812 9.46094 3.68202 9.46094 5.03906C9.46094 5.81932 9.08441 6.56154 8.45357 7.02416Z"
                                fill="#FE9400"/>
                        </svg>
                        {props.popUp && <div className="popup-message">
                            Зарабатывайте очки и получите шанс выиграть уникальные призы!
                            <div className="popup-corner"></div>
                        </div>}
                        <svg onClick={props.hiddenHandle} className={`arrow ${!props.isHidden ? 'rotate' : ''}`}
                             width="7"
                             height="5" viewBox="0 0 7 5" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.71098 1.86173L4.18608 4.68155C3.80588 5.10615 3.19172 5.10615 2.81152 4.68155L0.286622 1.86173C-0.327542 1.17583 0.111146 0 0.978775 0L6.02857 0C6.8962 0 7.32514 1.17583 6.71098 1.86173Z"
                                fill="#979797"/>
                        </svg>
                    </div>
                </div>
                <div className="promo-card-footer">
                    <p>Акция завершена!</p>
                </div>
                {
                    !props.isHidden &&
                    <React.Fragment>
                        <div className="score-board">
                            <div className="grid-container score-header">
                                <p>№</p>
                                <p>Username</p>
                                <p>RP</p>
                            </div>
                            {arr}
                        </div>
                        <div className="promo-hidden">
                            <div className="flex-container">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8 15C8.9625 15 9.75 14.2125 9.75 13.25V2.75C9.75 1.7875 8.9625 1 8 1C7.0375 1 6.25 1.7875 6.25 2.75V13.25C6.25 14.2125 7.0375 15 8 15ZM2.75 14.9998C3.7125 14.9998 4.5 14.2124 4.5 13.2499V9.74994C4.5 8.78746 3.7125 7.99997 2.75 7.99997C1.7875 7.99997 1 8.78746 1 9.74994V13.2499C1 14.2124 1.7875 14.9998 2.75 14.9998ZM11.5 13.2499V7.12491C11.5 6.16241 12.2875 5.37491 13.25 5.37491C14.2125 5.37491 15 6.16241 15 7.12491V13.2499C15 14.2124 14.2125 14.9999 13.25 14.9999C12.2875 14.9999 11.5 14.2124 11.5 13.2499Z"
                                          fill="#FE9400"/>
                                </svg>
                                <span>Мои предсказания (0)</span>
                            </div>
                            <div className="flex-container">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.728 1.5098L9.4 2.85319H14.0667C14.58 2.85319 15 3.27011 15 3.77967V10.1912C15 10.7008 14.58 11.1177 14.0667 11.1177H9.036C8.69067 11.1177 8.364 10.9231 8.20533 10.6081L7.53333 9.26473H2.86667V14.0738C2.86667 14.5833 2.44667 15.0002 1.93333 15.0002C1.42 15.0002 1 14.5833 1 14.0738V1.92672C1 1.41716 1.42 1.00024 1.93333 1.00024H7.888C8.24267 1.00024 8.56933 1.1948 8.728 1.5098ZM9.40052 9.26423H13.1339V4.50041H8.46719L7.53385 2.64748H2.86719V7.41131H8.46719L9.40052 9.26423Z"
                                          fill="#FE9400"/>
                                </svg>
                                <span>Таблица лидеров</span>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </section>
        </React.Fragment>
    )
}