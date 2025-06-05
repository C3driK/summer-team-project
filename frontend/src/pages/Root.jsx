import Header from './Header/Header';
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";

const Root = () =>{
    return(
        <>
        <Header logo='Finnish Event Planner'/>
        <main>
        <Outlet />
        </main>
        <Footer year='2025K'/>
        </>
    )
}

export default Root;