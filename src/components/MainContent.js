import React, {useState, useEffect} from 'react';
import logo from '../img/logo.png';
import redBg from '../img/red-bg.png';
import lightBlackBg from '../img/light-black-bg.png';
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import StageFour from "./StageFour";
import ButtonGroup from "./ButtonGroup";
import data from "../playersData.js";

export default function MainContent() {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || data.playersData;

    const savedCounter = Number(localStorage.getItem('counter')) || 2000;
    const [counter, setCounter] = useState(savedCounter);
    const [isHidden, setIsHidden] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);
    const [isHidden3, setIsHidden3] = useState(true);
    const [isHidden4, setIsHidden4] = useState(true);
    const [popUp, setPopUp] = useState();
    const [popUp2, setPopUp2] = useState();
    const [stage, setStage] = useState(3);
    const [fill, setFill] = useState(localStorage.getItem('fill') || 0);
    const [players, setPlayers] = useState(savedPlayers);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        localStorage.setItem('counter', counter);
    }, [counter]);

    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    useEffect(() => {
        localStorage.setItem('fill', fill);
    }, [fill]);

    function getTime(sec) {
        let seconds = sec % 60;
        let minutes = Math.floor(sec / 60);
        let hours = Math.floor(sec / 3600);
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    function hiddenHandle() {
        setIsHidden(!isHidden);
    }

    function hiddenHandle2() {
        setIsHidden2(!isHidden2);
    }

    function hiddenHandle3() {
        setIsHidden3(!isHidden3);
    }

    function hiddenHandle4() {
        setIsHidden4(!isHidden4);
    }



    function popUpHandle(state) {
        setPopUp(state);
    }

    function popUpHandle2(state) {
        setPopUp2(state);
    }

    function stageChange() {
        setStage(prevState => (prevState + 1) % 4);
    }

    function scoreGain() {
        const playersArr = [...players];
        const currentPlayer = playersArr.findIndex(player => player.username === 'currentUser');
        playersArr[currentPlayer].RP += 500;
        setPlayers(playersArr);
        if (fill < 100) {
            setFill(prevState => Number(prevState) + 10);
        }
    }

    function scoreReset() {
        const currentPlayer = players.findIndex(player => player.username === 'currentUser');
        setFill(0);
        players[currentPlayer].RP = 0;
    }

    return (
        <main className="main-container">
            {
                stage === 0 ? <StageOne
                    logo={logo}
                    counter={counter}
                    getTime={getTime}
                    hiddenHandle={hiddenHandle}
                    popUpHandle={popUpHandle}
                    popUp={popUp}
                    isHidden={isHidden}
                /> : stage === 1 ? <StageTwo
                    logo={logo}
                    redBg={redBg}
                    lightBlackBg={lightBlackBg}
                    counter={counter}
                    getTime={getTime}
                    popUpHandle={popUpHandle}
                    popUp={popUp}
                    popUpHandle2={popUpHandle2}
                    popUp2={popUp2}
                    isHidden={isHidden2}
                    hiddenHandle={hiddenHandle2}
                    fill={fill}
                /> : stage === 2 ? <StageThree
                    logo={logo}
                    redBg={redBg}
                    lightBlackBg={lightBlackBg}
                    popUpHandle={popUpHandle}
                    popUp={popUp}
                    popUpHandle2={popUpHandle2}
                    popUp2={popUp2}
                    isHidden={isHidden3}
                    hiddenHandle={hiddenHandle3}
                    fill={fill}
                    players={players}
                /> : stage === 3 ? <StageFour
                    logo={logo}
                    redBg={redBg}
                    lightBlackBg={lightBlackBg}
                    popUpHandle={popUpHandle}
                    popUp={popUp}
                    popUpHandle2={popUpHandle2}
                    popUp2={popUp2}
                    isHidden={isHidden4}
                    hiddenHandle={hiddenHandle4}
                    players={players}
                /> : stage === 0
            }
            <ButtonGroup
                stage={stage}
                stageChange={stageChange}
                scoreGain={scoreGain}
                scoreReset={scoreReset}
            />

        </main>
    );
}
