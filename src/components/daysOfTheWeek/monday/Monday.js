import React from 'react';

import css from './Monday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Monday = () => {
    return (
        <div  className={css.Monday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Monday
};