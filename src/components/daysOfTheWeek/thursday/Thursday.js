import React from 'react';

import css from './Thursday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Thursday = () => {
    return (
        <div className={css.Thursday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Thursday
};