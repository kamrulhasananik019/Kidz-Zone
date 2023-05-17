
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} replace={true} to='/login'></Navigate>
    );
};

export default PrivateRoute;