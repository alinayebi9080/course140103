import TextField from './../components/common/TextField';
import { useFormik } from 'formik';


const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNumber: "",
    birthDate: new Date().getTime()
}

const CreateUser = () => {
    const formik = useFormik({
        initialValues
    })

    return (
        <div>
            <form className='grid grid-cols-2 gap-8 max-w-[500px] border rounded shadow mx-auto mt-20 p-2'>
                <h1 className='col-span-2 text-center p-3 text-2xl font-bold'>ایجاد کاربر</h1>
                <TextField
                    formik={formik}
                    name={"username"}
                    label={"نام کاربری"}
                    placeholder={"نام کاربری"}
                />
                <TextField
                    formik={formik}
                    name={"password"}
                    label={"رمز عبور"}
                    placeholder={"رمز عبور"}
                    type={"password"}
                />
                <TextField
                    formik={formik}
                    name={"firstName"}
                    label={"نام"}
                    placeholder={"نام"}
                />
                <TextField
                    formik={formik}
                    name={"lastName"}
                    label={"نام خانوادگی"}
                    placeholder={"نام خانوادگی"}
                />
                <TextField
                    formik={formik}
                    name={"email"}
                    label={"ایمیل"}
                    placeholder={"ایمیل"}
                />
                <TextField
                    formik={formik}
                    name={"mobileNumber"}
                    label={"موبایل"}
                    placeholder={"موبایل"}
                />
                <button type='submit' className='border-b-2 border border-b-gray-300 bg-gray-100 w-full p-1 col-span-2 '>ایجاد کاربر</button>
            </form>
        </div>
    );
}

export default CreateUser;