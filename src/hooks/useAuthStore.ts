import { useAppSelector } from "./reduxToolkitSetUp";


export const useAuthStore = () => {

    const {
        isAuthenticated,
        status,
    } = useAppSelector((state) => state.auth);

    return {
        // Properties
        isAuthenticated,
        status,
        // methods

    }

}