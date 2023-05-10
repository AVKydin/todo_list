import React from 'react';

import сss from "./Friday.module.css";
import {CheckSheet} from "../../checkSheet/CheckSheet";

const Friday = () => {
    return (
        <div className={сss.Friday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Friday
};