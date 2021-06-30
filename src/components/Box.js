import React, { useState} from 'react'



let cloud = 'Tearing the page away and crumpling it into a ball, he threw it over his shoulder to join its growing mass of brethren on the floor. It was dark in the office, the curtains shut to block out the intrusion of the light. He worked by a single lamp, its artificial brightness casting shadows about the room. Shadows were better than ghosts, he supposed. '

let cloudUpdated = [];
for (let i = 0; i < cloud.length; i++) {
    cloudUpdated[i] = <span >{cloud[i]}</span>;
}
let finalScore = 0;
let globalTime = 0;



function Box() {
    //const [btnText, setBtnText] = useState("Start Now");
    const [time, setTime] = useState(50);
    const [score, setScore] = useState(0);
    


    function textAreaEnable() {
        let typingField = document.getElementById('typing-area');
        typingField.disabled = false;

    }
    function btnHandler(e) {
        let button = document.getElementById('btn');
        button.style.display = "none";

    }
    function btnHandler2() {
        let typingField = document.getElementById('typing-area');
        clearInterval(globalTime);
        typingField.disabled = false;
            countDown();
            let paragraph = document.getElementById('para');
            for (let i = 0; i < paragraph.children.length; i++) {
                paragraph.children[i].style.color = "white"
            }
            document.getElementById('typing-area').value = "";
            let button = document.getElementById('btn2');
            button.style.display = "none";
    }


    function countDown() {
        let count = 50;
        let timer=0;
        clearInterval(timer);
         timer = setInterval(() => {
            setTime(count--);
            if (count === -1) {
                globalTime = timer;
                clearInterval(timer);
                let typingField = document.getElementById('typing-area');
                typingField.disabled = true;
               
                alert("Sorry, Time ran out. Your Final Score is " + finalScore + "char/sec");
                document.getElementById('typing-area').value = "";
                setScore(0);
                let paragraph = document.getElementById('para');
                for (let i = 0; i < paragraph.children.length; i++) {
                    paragraph.children[i].style.color = "white"
                }
                let button2 = document.getElementById('btn2');
                button2.style.display = "inline";

            }
            
        }, 1000);

    }
    function Change(e) {

        let paragraph = document.getElementById('para');
        let count = 0;
        for (let i = 0; i < e.target.value.length; i++) {
            if (paragraph.children[i].innerText === e.target.value[i]) {
                paragraph.children[i].style.color = "lightgreen"
                count++;
                
            } else {
                paragraph.children[i].style.color = "rgb(255, 31, 31)"
        
            }
        }
        setScore(count);
        finalScore = Math.max(finalScore, Math.floor(count/50));
        if (e.target.value.length === paragraph.children.length) {
            alert("Restart The Game and Play Again 😍");
            document.getElementById('typing-area').value = "";
            for (let i = 0; i < paragraph.children.length; i++) {
                paragraph.children[i].style.color = "white"
            }
        }


    }

    return (
        <>
            <div className="box">
                
                <div className="heading">
                    <h2>😍 Typing &nbsp; Speed &nbsp; Game 😍</h2>
                </div>
                <div className="time-and-score">
                    <h4 className="left">Time Left : <span id="timer">{time}</span> second</h4>
                    <h4 className="right">Score : <span>{score} </span>char</h4>
                </div>
                <div className="game-body">
                    <div className="heading-h3">
                    <h3>Type the following</h3>
                    </div>
                    <p id="para">{cloudUpdated}</p>
                    <textarea placeholder="Type the sentences here..." rows="2" cols="40" id="typing-area" onChange={Change} disabled></textarea>
                </div>
                <div className="start-button">
                    <button onClick={() => { textAreaEnable(); btnHandler(); countDown() }} id="btn">Start Now</button>
                    <button onClick={() => { btnHandler2() }} style={{ display: "none" }} id="btn2">Restart Now</button>
                </div>

            </div>

        </>
    );
}

export default Box;