import { useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ReviewPage () {
    const history = useHistory();

    const inputArray = useSelector(store => store.feedback);
    let [q1, setQ1] = useState(inputArray[0]);
    let [q2, setQ2] = useState(inputArray[1]);
    let [q3, setQ3] = useState(inputArray[2]);
    let [q4, setQ4] = useState(inputArray[3]);

    const postArray = [q1, q2, q3, q4];

    function handleClick () {
        if (q1 == false || q2 == false || q3 == false) {
            return alert('Please do not leave blank feedback')
        } else {
        axios.post('/api/feedback', postArray).then((response) => {

        }).catch(error => {
      console.log(error);
    })
    history.push('/6')
    }
    }

    return (
        <>
        <h3>Review Your Feedback</h3> 
        <form onSubmit={handleClick}>
        <p>Feeling: {q1}</p> <TextField value={q1} onChange={(e) => setQ1(e.target.value)} required/>
        <p>Understanding: {q2}</p> <TextField value={q2} onChange={(e) => setQ2(e.target.value)} required/>
        <p>Support: {q3}</p> <TextField value={q3} onChange={(e) => setQ3(e.target.value)} required/>
        <p>Comments: {q4}</p> <TextField value={q4} onChange={(e) => setQ4(e.target.value)} />
        <br />
        <Button data-testid="next" type='submit' variant="contained">Submit</Button>
        </form>
        </>
    )
}

export default ReviewPage;