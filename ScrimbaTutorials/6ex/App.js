import React from "react";

function App()
{
    return (
        <div>
            <MyNavbar />
            <MyMainContent />
            <MyFooter />
        </div>    
    )
}

//el index.js llama a app
export default app

import MyNavbar from "./components/MyNavBar"
import MyMainContent from "./components/MyMainContent"
import MyFooter from "./components/MyFooter"