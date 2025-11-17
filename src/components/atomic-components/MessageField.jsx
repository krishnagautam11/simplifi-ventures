export const MessageField = ({ label, type, inputValue, value, error, enterMessage }) => {

    return (

        <div className="message-field flex flex-col gap-1">
            <label>{label}</label>
            <textarea
                type={type}
                value={value}
                onChange={inputValue}
                placeholder={enterMessage}
                className="w-full resize-none"
            />
            {error && <p className="error-text">{error}</p>}
        </div>

        // <div className="message-field">
        //     <label htmlFor="">{label}</label>
        //     <textarea type={type} name="" id="" value={value} onChange={inputValue} placeholder={enterMessage} />
        // </div>

    )
}