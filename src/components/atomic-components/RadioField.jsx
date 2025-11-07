export const RadioField = ({ label, type, name, radioOption, radioSelectValue }) => {
    return (
        <div className="input-fields">
            <label htmlFor="">{label}</label>

            {radioOption.map((radioDiv) => (
                <label htmlFor="" key={radioOption}> {radioDiv.label}
                    <input type={type}
                        name={name}
                        value={radioDiv.value}
                        onChange={radioSelectValue}
                    />
                   
                </label>

            ))}



        </div>

    )
}