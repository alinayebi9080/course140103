import { useFormik } from "formik";
import { useNavigate } from "react-router";
import useFetch from "use-http";
import * as yup from 'yup';

const initialValues = {
    username: "",
    password: ""
}

const validationSchema = yup.object({
    username: yup.string().required("نام کاربری اجباری است").min(2, "حداقل بایستی 2 کاراکتر تایپ شود"),
    password: yup.string()
        .required("رمزعبور اجباری است")
        .min(4, "حداقل بایستی 4 کاراکتر تایپ شود")
    // .matches("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$", "فرمت رمزعبور اشتباه است")
})

const Login = () => {

    const { post, response } = useFetch()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        await post("/api/admin/login", values)
        if (response.ok) {
            localStorage.setItem("token", response.data.accessToken)
            navigate("/", { replace: true })
        } else {

        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })


    return (
        <div>
            <form className="flex flex-col border shadow-sm max-w-md mx-auto mt-36 p-4" onSubmit={formik.handleSubmit}>
                <h1 className="font-bold text-2xl text-center my-8">ورود به پنل ادمین</h1>
                <div className="flex flex-col my-2">
                    <label className="font-bold" htmlFor="username-login">نام کاربری</label>
                    <input
                        id="username-login"
                        placeholder="نام کاربری"
                        name="username"
                        {...formik.getFieldProps("username")}
                        className="border border-gray-200 mt-2 rounded p-1 outline-none" />
                    {formik.errors.username && formik.touched.username && <p className="text-rose-500 mt-2 text-sm">{formik.errors.username}</p>}
                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="password-login" className="font-bold">رمز عبور</label>
                    <input
                        placeholder="رمز عبور"
                        type={"password"}
                        name="password"
                        {...formik.getFieldProps("password")}
                        id="password-login"
                        className="border border-gray-200 mt-2 rounded p-1" />
                    {formik.errors.password && formik.touched.password && <p className="text-rose-500 mt-2 text-sm">{formik.errors.password}</p>}
                </div>

                <button type="submit" disabled={!formik.isValid} className="mt-5 p-1 bg-gray-600 rounded text-white disabled:bg-gray-200">ورود</button>
            </form>
        </div>
    );
}

export default Login;