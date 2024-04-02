import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node.isRequired
}