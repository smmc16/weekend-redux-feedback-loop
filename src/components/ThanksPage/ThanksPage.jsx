import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';

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
        <Button data-testid="next" variant="contained" onClick={handleClick}>Submit more feedback</Button>
        </>
    )
}

export default ThanksPage;