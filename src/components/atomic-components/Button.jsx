export const Button = ({btnType , btnText, submitForm}) => {

    return (
        <button type={btnType} className="primary-btn" onClick={submitForm}>{btnText}</button>
    )
}