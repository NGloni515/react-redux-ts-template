import { useSelector } from "react-redux"
import { useAppSelector } from "./reduxToolkitSetUp";


export const useUiStore = () => {

    const {
        isOpen,
        status,
        count,
    } = useAppSelector((state: any) => state.ui);

    return {
        // Properties
        isOpen,
        status,
        count,
        // methods

    }

}