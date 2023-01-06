import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { routeList } from '../assets/data/data';
import DisburstIcon from '../assets/svg/DisburstIcon';

const   BottomNav = () => {
    const location = useLocation()

    return (
        <section className="sm:hidden bottomnav px-3 fixed  bottom-0 bg-white w-full shadow-xl flex items-center gap-3 justify-between overflow-x-scroll">
            {routeList.map((item, index) => {
                const activeItem = item.route.includes(location.pathname);
                const iconArr = [
                    <DisburstIcon key={1} index={activeItem} />,
                    <DisburstIcon key={2} index={activeItem} />,
                ]
                return (
                    <Link to={item.route} key={index}
                        className={`${activeItem && "text-white rounded-2xl bg-[#A362F8] w-max"} flex justify-evenly flex-1 gap-x-4 items-center rounded-full px-3 py-2 cursor-pointer my-3  text-base space-x-1`}>
                        <div className=''> {iconArr[index]}</div>

                        <span className={`origin-left duration-200`}>
                            {item.title}
                        </span>
                    </Link>
                )
            }
            )}
        </section>
  )
}

export default BottomNav
