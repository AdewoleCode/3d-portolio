import React from 'react'
import "./Spinner.css"
import { Html } from "@react-three/drei"

const Spinner = () => {
    return (
        <Html>
            <div className="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </Html>

    )
}

export default Spinner