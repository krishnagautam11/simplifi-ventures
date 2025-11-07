export const Dropdown = ({ value, selectValue, optionValue }) => {
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
            </div>

        </>
    )
}