import React from 'react';

import css from './Tuesday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Tuesday = () => {
    return (
        <div className={css.Tuesday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Tuesday
};