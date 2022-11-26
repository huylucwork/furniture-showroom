import { useState, useEffect } from "react";

import "../../styles/alert.css"

export default function Alert({ alert, setOpenAlert }) {

    const [animation, setAnimation] = useState('in');

    if (alert &&
        (
            alert.type === "error"
            || alert.type === "success"
            || alert.type === "warning"
        )
    ) {
        return (
            <div className={'alert_container ' + alert.type + ' ' + animation}>
                <div className='alert_icon'>
                    {alert.type === 'error' && <i className="fa-solid fa-circle-exclamation"></i>}
                    {alert.type === 'success' && <i className="fa-solid fa-circle-check"></i>}
                    {alert.type === 'warning' && <i className="fa-solid fa-triangle-exclamation"></i>}
                </div>
                <div className='alert_content'>
                    <h3 className='alert_content_title'>
                        {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </h3>
                    <p className='alert_content_message'>
                        {alert.message}
                    </p>
                </div>
                <div className="hidden">
                {
                    setTimeout(function () {
                        setAnimation('out')
                    }, 1400)
                }
                {
                    setTimeout(function () {
                        setOpenAlert(false)
                    }, 1900)
                }
                </div>
            </div>

        )
    }
}