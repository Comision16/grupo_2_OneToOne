import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./App.css"


export const App = () => {


    return (
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Header />

                    <Outlet />
                </div>

                <Footer />

            </div>

        </div>
    )
}

// clase 117 : 00:39:01 


 






