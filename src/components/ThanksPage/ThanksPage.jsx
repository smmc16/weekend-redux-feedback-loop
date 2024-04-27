import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function ThanksPage () {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleClick () {
        let action = {type: 'RESET'};
        dispatch(action);
        history.push('/');
    }


    return (
        <>
        <p>Thank you for your feedback!</p>
        <button data-testid="next" onClick={handleClick}>Submit more feedback</button>
        </>
    )
}

export default ThanksPage;