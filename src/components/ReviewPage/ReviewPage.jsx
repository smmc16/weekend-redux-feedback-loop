import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewPage () {
    const history = useHistory();

    const inputArray = useSelector(store => store.feedback);
    const q1 = inputArray[0];
    const q2 = inputArray[1];
    const q3 = inputArray[2];
    const q4 = inputArray[3];

    function handleClick () {
        axios.post('/api/feedback', inputArray).then((response) => {

        }).catch(error => {
      console.log(error);
    })
    history.push('/6')
    }

    return (
        <>
        <h3>Review Your Feedback</h3>
        <p>Feeling: {q1}</p>
        <p>Understanding: {q2}</p>
        <p>Support: {q3}</p>
        <p>Comments: {q4}</p>
        <button data-testid="next" onClick={handleClick}>Submit</button>
        </>
    )
}

export default ReviewPage;