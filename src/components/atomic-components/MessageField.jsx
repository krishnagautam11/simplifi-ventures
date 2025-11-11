export const MessageField = ({ label, type, inputValue, value, error, enterMessage }) => {
    
    return (
        <div className="message-field">
            <label htmlFor="">{label}</label>
            <textarea type={type} name="" id="" value={value} onChange={inputValue} placeholder={enterMessage} />
        </div>

    )
}