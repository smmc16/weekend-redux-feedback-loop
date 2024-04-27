import './FeedbackInput.css';
import { useState } from 'react';

function FeedbackInput ({question, inputType}) {

    const [userInput, setUserInput] = useState('');

    function handleSubmit () {

    }

    return (
        <>
        <p>{question}</p>
        <form onSubmit={handleSubmit}>
            <input data-testid="input" type={inputType} />
            <input data-testid="next" type="submit" />
        </form>
        </>
    )
}

export default FeedbackInput;