import React, { useCallback, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routeList } from '../../assets/data/data';
import DisburstIcon from '../../assets/svg/DisburstIcon';
import LoginIcon from '../../assets/svg/LoginIcon';
import MenuIcon from '../../assets/svg/MenuIcon';
import './sidebar.css'

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate();
    const location = useLocation()

    const logout = useCallback(() => {

        // useAuth.setState({
        //     isAuthenticated: false,
        //     email: null,
        //     token: null,
        // });
        // Cookies.remove('@Authenticated')
        navigate("/");

    }, [])

    return (
        <section className={`sidebar hidden sm:block`}>
            <div className={` sm:w-60 w-max flex flex-col justify-between transition-all ease-in-out  top-0 left-0 bg-[#] text-white p-5 h-screen pt-8 relative duration-300`}>

                <div className={`pt-6 ${'' && " mx-auto"}`}>
                    <div className="flex items-center justify-between pb-10 gap-4">
                        <div className="text-3xl text-[#668A99]">Arvo link</div>
                        <MenuIcon onClick={() => setOpen(!open)} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                    </div>
                    {routeList.map((item, index) => {
                        const activeItem = item.route.includes(location.pathname);

                        const iconArr = [
                            <DisburstIcon key={1} index={activeItem} />,
                            <DisburstIcon key={2} index={activeItem} />,
                        ]

                        return (
                            <Link to={item.route} key={index} className={`${activeItem && "bg-[#A362F8] rounded-[4px] text-[#fff]"} text-[#716C81] flex items-center rounded-md p-2 cursor-pointer my-4 text-base space-x-3`}>
                                <div key={index}> {iconArr[index]}</div>

                                <span className={` origin-left duration-200`}>
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

                <div className="flex items-center justify-start" onClick={logout}>
                    <div className="flex items-center  gap-5 cursor-pointer" >
                        <LoginIcon />
                        <div className={` bg-[#E8E9F2] text-red-600 text-sm`}> Logout</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
