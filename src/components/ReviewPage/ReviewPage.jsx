import { useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewPage () {
    const history = useHistory();

    const inputArray = useSelector(store => store.feedback);
    let [q1, setQ1] = useState(inputArray[0]);
    let [q2, setQ2] = useState(inputArray[1]);
    let [q3, setQ3] = useState(inputArray[2]);
    let [q4, setQ4] = useState(inputArray[3]);

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
        <form onSubmit={handleClick}>
        <p>Feeling: {q1}</p> <input value={q1} onChange={(e) => setQ1(e.target.value)} required/>
        <p>Understanding: {q2}</p> <input value={q2} onChange={(e) => setQ2(e.target.value)} required/>
        <p>Support: {q3}</p> <input value={q3} onChange={(e) => setQ3(e.target.value)} required/>
        <p>Comments: {q4}</p> <input value={q4} onChange={(e) => setQ4(e.target.value)} />
        <input data-testid="next" type='submit' value="Submit" />
        </form>
        </>
    )
}

export default ReviewPage;