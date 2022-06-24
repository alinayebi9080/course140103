import { useEffect, useState } from "react";
import { useFetch } from 'use-http';

const UserList = () => {

    const [users, setUsers] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [resultPerPage, setResultPerPage] = useState(5)

    const { get, response } = useFetch()

    const handleGetData = async (page) => {
        await get(`/api/admin/user/all?page=${page}`)
        if (response.ok) {
            setUsers(response.data?.users)
            setResultPerPage(response.data?.resultsPerPage)
            setPageCount(response.data?.count / response.data?.resultsPerPage)
        }
    }

    useEffect(() => {
        handleGetData(currentPage)
    }, [currentPage])

    let pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className="p-4">
            <table className="table-auto min-w-full">
                <thead className="bg-slate-800 border-t-2">
                    <tr>
                        <th className="table-header">ردیف</th>
                        <th className="table-header">نام و نام خانوادگی</th>
                        <th className="table-header">نام کاربری</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) =>
                        <tr key={user._id} className={`${index % 2 ? "bg-gray-100" : "bg-white"}`}>
                            <td className="table-cell">{(index + 1) + resultPerPage * (currentPage - 1)}</td>
                            <td className="table-cell">{`${user.firstName} ${user.lastName}`}</td>
                            <td className="table-cell">{user.username}</td>
                        </tr>
                    )}

                </tbody>
            </table>
            <div className="flex">
                {pages.map(item =>
                    <p className="m-2 cursor-pointer" onClick={() => setCurrentPage(item)}>{item}</p>
                )}
            </div>

        </div>
    );
}

export default UserList;