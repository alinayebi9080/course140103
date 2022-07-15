import TextField from './../components/common/TextField';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useFetch } from 'use-http';
import Select from '../components/common/Select'

const initialValues = {
    name: "",
    price: ""
}


const CreateProduct = () => {

    const [categories, setCategories] = useState([])

    const { get, post, response } = useFetch(globalOptions => {
        delete globalOptions.headers["content-type"]
        return globalOptions
    })


    const onSubmit = async (values) => {
        let formData = new FormData()
        formData.append("name", values.name)
        formData.append("image", values.image)
        formData.append("price", values.price)
        formData.append("categoryId", values.categoryId)

        await post("api/admin/product", formData)
        if (response.ok) {
            console.log("success");
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })



    useEffect(() => {
        (async () => {
            await get("/api/admin/category/all")
            if (response.ok) {
                let data = response.data?.map(item => ({
                    label: item.name,
                    value: item.id
                }))
                setCategories(data)
            }
        }
        )()
    }, [])

    return (
        <div>
            <div>
                <form className='grid grid-cols-2 gap-8 max-w-[500px] border rounded shadow mx-auto mt-20 p-2' onSubmit={formik.handleSubmit}>
                    <h1 className='col-span-2 text-center p-3 text-2xl font-bold'>ایجاد محصول</h1>
                    <TextField
                        formik={formik}
                        name={"name"}
                        label={"نام محصول"}
                        placeholder={"نام محصول"}
                    />

                    <TextField
                        formik={formik}
                        name={"price"}
                        label={"قیمت"}
                        placeholder={"قیمت"}
                    />

                    <Select
                        formik={formik}
                        name="categoryId"
                        label="گروه محصول"
                        options={categories}
                    />

                    <div className="flex flex-col my-2">
                        <label className="font-bold" htmlFor={"image"}>فایل</label>
                        <input
                            id={"image"}
                            name={"image"}
                            accept="image/*"
                            type={"file"}
                            onChange={e => formik.setFieldValue("image", e.target.files[0])}
                            className="border border-gray-200 mt-2 rounded p-1 outline-none" />
                    </div>

                    <button type='submit' className='border-b-2 border border-b-gray-300 bg-gray-100 w-full p-1 col-span-2 '>ایجاد کاربر</button>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;