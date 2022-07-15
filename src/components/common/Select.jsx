

const Select = ({ label, name, formik, options }) => {
    return (
        <div className="flex flex-col my-2">
            <label className="font-bold" htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                {...formik.getFieldProps(name)}
                className="border border-gray-200 mt-2 rounded p-1 outline-none">
                {options.map(item =>
                    <option value={item.value}>{item.label}</option>
                )}
            </select>
            {formik.errors[name] && formik.touched[name] && <p className="text-rose-500 mt-2 text-sm">{formik.errors[name]}</p>}
        </div>
    );
}

export default Select;