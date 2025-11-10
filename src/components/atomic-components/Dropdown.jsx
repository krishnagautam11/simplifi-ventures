export const Dropdown = ({ value, selectValue, optionValue, error }) => {
    return (
        <>
            <div className="input-fields">
                <label htmlFor="">Select Contact Reason</label>
                <select name="" id="" value={value} onChange={selectValue}>
                    {
                        optionValue.map((fruit) => (
                            <option key={fruit.id} value={fruit.value}>{fruit.value}</option>
                        ))
                    }

                </select>
                {error && <p className="error-text">{error}</p>}
            </div>

        </>
    )
}