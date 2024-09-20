import React from 'react';


export default function StageOne(props) {

    return (
        <React.Fragment>
            <section className="stage-one">
                <div className="promo-card">
                    <div className="flex-container">
                        <img src={props.logo} alt=""/>
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
                             width="7" height="5" viewBox="0 0 7 5" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.71098 1.86173L4.18608 4.68155C3.80588 5.10615 3.19172 5.10615 2.81152 4.68155L0.286622 1.86173C-0.327542 1.17583 0.111146 0 0.978775 0L6.02857 0C6.8962 0 7.32514 1.17583 6.71098 1.86173Z"
                                fill="#979797"/>
                        </svg>
                    </div>
                </div>
                {
                    !props.isHidden &&
                    <div className="promo-hidden">
                        <p>Начало через:</p>
                        <p>{props.getTime(props.counter)}</p>
                    </div>
                }
            </section>
        </React.Fragment>
    )
}