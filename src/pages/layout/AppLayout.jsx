import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/SocialIcon/ScrollToTop";

export default function AppLayout() {
    return (
        <>
            <Outlet />
            <ScrollToTop />
        </>
    )
}
