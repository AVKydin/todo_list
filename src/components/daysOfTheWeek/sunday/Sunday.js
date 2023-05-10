import React from 'react';

import css from './Sunday.module.css'
import {CheckSheet} from "../../checkSheet/CheckSheet";
const Sunday = () => {
    return (
        <div className={css.Sunday}>
            <CheckSheet/>
        </div>
    );
};

export {
    Sunday
};