import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import useAuth from '../hooks/useAuth';


const RequiredRoute = () => {

    // const isAuthenticated = useAuth((state) => state.isAuthenticated);
    //   const token = useAuth((state) => state.token);
    const token = ''

    // console.log(isAuthenticated, "isAuthenticated")

    const location = useLocation()
    return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredRoute
