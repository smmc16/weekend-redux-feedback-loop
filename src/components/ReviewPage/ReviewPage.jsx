import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewPage () {
    const history = useHistory();

    const inputArray = useSelector(store => store.feedback);
    let q1 = inputArray[0];
    let q2 = inputArray[1];
    let q3 = inputArray[2];
    let q4 = inputArray[3];

    const postArray = [q1, q2, q3, q4];

    function handleClick () {
        axios.post('/api/feedback', postArray).then((response) => {

        }).catch(error => {
      console.log(error);
    })
    history.push('/6')
    }

    return (
        <>
        <h3>Review Your Feedback</h3>
        <p>Feeling:</p> <input value={q1} />
        <p>Understanding: {q2}</p>
        <p>Support: {q3}</p>
        <p>Comments: {q4}</p>
        <button data-testid="next" onClick={handleClick}>Submit</button>
        </>
    )
}

export default ReviewPage;