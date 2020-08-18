import React from 'react'
import Daun from "../img/global/daun.png";

function Footer() {
    return (
        <div className="bg-warning footer">
        <img src={Daun} className="daun" alt="daun" />
        <div className="text-white  text-center p-4">
            Copyright @ 2020 Dewe Tour - Andi - DW17S3UGC. All Rights reserved
        </div>
        </div>
    )
}

export default Footer
