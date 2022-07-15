import { Disclosure } from "@headlessui/react";
import { useJwt } from "react-jwt";
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        title: "مدیریت کاربران", access: "user:list", subMenu: [
            { title: "ایجادکاربر", access: "user:create", path: "/user/create" },
            { title: "لیست کاربران", access: "user:list", path: "/user/list" },
        ]
    },
    {
        title: "مدیریت محصولات", access: "product:create", subMenu: [
            { title: "ایجاد محصول", access: "product:create", path: "/product/create" },
        ]
    }
]

const Navigation = () => {

    let { decodedToken } = useJwt(localStorage.getItem("token"))

    return (
        <nav className="min-w-[300px] border drop-shadow-sm bg-gray-50 h-screen p-4">
            {navigation.map((nav, index) =>
                decodedToken?.scopes?.includes(nav.access) &&
                <div>
                    <Disclosure key={index}>
                        <Disclosure.Button className="py-2">
                            <span className="font-extrabold">{nav.title}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className="flex flex-col">
                                {nav.subMenu.map((item, index) =>
                                    decodedToken.scopes.includes(item.access) &&
                                    <NavLink key={index} to={item.path} className={({ isActive }) =>
                                        `p-1 ${isActive && "text-rose-400"}`
                                    }>{item.title}</NavLink>
                                )}
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            )}


        </nav>
    );
}

export default Navigation;