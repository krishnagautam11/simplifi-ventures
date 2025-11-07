export const InputField = ({ label, type, inputValue, value }) => {
    
    return (
        <div className="input-fields">
            <label htmlFor="">{label}</label>
            <input type={type} name="" id="" value={value} onChange={inputValue} />
        </div>

    )
}