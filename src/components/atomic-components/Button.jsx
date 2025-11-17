export const Button = ({ btnType, btnText, submitForm }) => {

    return (

        <button
            type={btnType}
            onClick={submitForm}
            className="
        primary-btn
        inline-flex items-center justify-center
        cursor-pointer
        transition-all duration-200 ease-out
      "
        >
            {btnText}
        </button>
        // <button type={btnType} className="primary-btn" onClick={submitForm}>{btnText}</button>
    )
}