'use client'

import Newsletter from "./components/newsletter"
import Subscribed from "./subscribed/page"
import React, { useState } from "react";

export default function parentComponent() {
    const [email, setEmail] = useState("");
    console.log(email)

    return (
        
        <Newsletter setEmail={setEmail}>
            <Subscribed email={email}/>
        </Newsletter>
    )
}

