import { Route, Routes, Navigate } from "react-router"
import { LoginPage, SignInPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuthStore } from "../hooks"


export const AppRouter = () => {
    const { isAuthenticated, status } = useAuthStore();
    const authStatus = isAuthenticated

    return (
        <Routes>
            {
                (!authStatus)
                ? <Route path="/auth/*" element={ <SignInPage  />} />
                : <Route path="/calendar" element={ <CalendarPage  />} />
            }
            <Route path="/calendar" element={ <CalendarPage  />} />
            {/* <Route path="/*" element={ <Navigate to="/auth/login" />} /> */}
        </Routes>
    )
}