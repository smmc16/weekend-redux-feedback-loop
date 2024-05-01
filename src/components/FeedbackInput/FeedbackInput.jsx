import './FeedbackInput.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackInput ({question, inputType, next, ph, require}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [userInput, setUserInput] = useState('');

    function handleSubmit () {
        if (require && userInput == '') {
            return alert('Please enter feedback')
        } else {
        let action = {type: 'INPUT_FEEDBACK', payload: userInput}
        dispatch(action);
        history.push(`/${next}`)
        }
        
    }
    
    return (
        <>
        <p>{question}</p>
        <form onSubmit={handleSubmit}>
            <input 
            id="inputField"
            data-testid="input" 
            type={inputType} 
            placeholder={ph}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}

            />
            <input data-testid="next" type="submit" />
        </form>
        </>
    )
}

export default FeedbackInput;