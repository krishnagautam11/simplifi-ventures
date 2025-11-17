export const RadioField = ({ label, type, name, radioOption, radioSelectValue }) => {
    return (


        <div className="input-fields flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            {radioOption.map((radioDiv) => (
                <label
                    key={radioDiv.value}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type={type}
                        name={name}
                        value={radioDiv.value}
                        onChange={radioSelectValue}
                    />
                    {radioDiv.label}
                </label>
            ))}
        </div>

        // <div className="input-fields">
        //     <label htmlFor="">{label}</label>

        //     {radioOption.map((radioDiv) => (
        //         <label htmlFor="" key={radioOption}> {radioDiv.label}
        //             <input type={type}
        //                 name={name}
        //                 value={radioDiv.value}
        //                 onChange={radioSelectValue}
        //             />

        //         </label>

        //     ))}



        // </div>

    )
}