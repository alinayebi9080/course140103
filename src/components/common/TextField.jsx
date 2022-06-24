const TextField = ({ label, name, placeholder, formik, type = "text" }) => {
    return (
        <div className="flex flex-col my-2">
            <label className="font-bold" htmlFor={name}>{label}</label>
            <input
                id={name}
                placeholder={placeholder}
                name={name}
                type={type}
                {...formik.getFieldProps(name)}
                className="border border-gray-200 mt-2 rounded p-1 outline-none" />
            {formik.errors[name] && formik.touched[name] && <p className="text-rose-500 mt-2 text-sm">{formik.errors[name]}</p>}
        </div>
    );
}

export default TextField;