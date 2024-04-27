import './FeedbackInput.css';

function FeebackInput ({question}) {

    function handleSubmit () {

    }

    return (
        <>
        <p>{question}</p>
        <form onSubmit={handleSubmit}>
            <input  />
            <input  type="submit" />
        </form>
        </>
    )
}

export default FeebackInput;