import './MyComponent1.css';
import { useState } from "react";

const MyComponent1 = () => {

    const [answer, setAnswer] = useState(false);

    console.log('answer ', answer);
    console.log('setAnswer', setAnswer);

    const showAnswer = () => {

        setAnswer(!answer);

        if (!answer) {
            document.getElementsByTagName('button')[0].innerHTML = '-';
        } else {
            document.getElementsByTagName('button')[0].innerHTML = '+';
        }

    }

    const [answer2, setAnswer2] = useState(false);

    console.log('answer2 ', answer2);
    console.log('setAnswer2', setAnswer2);

    const showAnswer2 = () => {
        setAnswer2(!answer2);
        if (!answer2) {
            document.getElementsByTagName('button')[1].innerHTML = '-';
        } else {
            document.getElementsByTagName('button')[1].innerHTML = '+';
        }
    }


    return (
        <main>
            <div className="clsDiv1">
                <div className='clsDivReactIsSoGreat'><p>Why is React great?</p> <button id="idBtn1" onClick={showAnswer}>+</button></div>
                <hr style={!answer ? { display: 'none' } : { display: 'block' }} />
                <div className='clsDivReactIsSoGreat'><p className="clsFastLearningCurve"
                    style={!answer ? { display: 'none' } : { display: 'block' }} >Fast Learning Curve</p> <button style={!answer ? { display: 'none' } : { display: 'block' }} id="idBtn2" onClick={showAnswer2}>+</button></div>

                <p className='clsReactIsverySimple' style={!answer2 ? { display: 'none' } : { display: 'block' }} >React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                    As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
                </p>
            </div>

        </main >

    );
}

export default MyComponent1;