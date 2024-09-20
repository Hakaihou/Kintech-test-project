import React from 'react';

export default function ButtonGroup(props) {

    return (
        <React.Fragment>
            <div className="button-group">
                <button onClick={props.stageChange}>Изменить состояние</button>
                <button disabled={props.stage === 0 || props.stage === 3} onClick={props.scoreGain}>Добавить очки
                </button>
                <button disabled={props.stage === 0 || props.stage === 3} onClick={props.scoreReset}>Сбросить очки
                </button>
            </div>
        </React.Fragment>
    )
}