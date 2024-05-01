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
        <p>Feeling: {q1}</p> <input value={q1} onChange={(e) => setQ1(e.target.value)} />
        <p>Understanding: {q2}</p> <input value={q2} onChange={(e) => setQ2(e.target.value)} />
        <p>Support: {q3}</p> <input value={q3} onChange={(e) => setQ3(e.target.value)} />
        <p>Comments: {q4}</p> <input value={q4} onChange={(e) => setQ4(e.target.value)} />
        <button data-testid="next" onClick={handleClick}>Submit</button>
        </>
    )
}

export default ReviewPage;