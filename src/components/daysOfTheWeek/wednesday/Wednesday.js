import React from 'react';

import css from './Wednesday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Wednesday = () => {
    return (
        <div className={css.Wednesday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Wednesday
};