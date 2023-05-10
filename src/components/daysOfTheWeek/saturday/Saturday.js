import React from 'react';

import css from './Saturday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Saturday = () => {
    return (
        <div className={css.Saturday} activeClassName>
            <CheckSheet/>
        </div>
    );
};

export {
    Saturday
};