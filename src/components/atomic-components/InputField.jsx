export const InputField = ({ label, type, inputValue, value, error }) => {

    return (
        <div className="input-fields">
            <label htmlFor="">{label}</label>
            <input type={type} name="" id="" value={value} onChange={inputValue} />
            {error && <p className="error-text">{error}</p>}
        </div>


    )
}