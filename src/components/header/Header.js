import React from 'react';

import css from './Header.module.css'
import {Link, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header_block}>
            <div className={css.header}>
                <ul className={css.list}>
                    <li>
                        <Link className={css.link} to={'/monday'}>Понеділок</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/tuesday'}>Вівторок</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/wednesday'}>Середа</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/thursday'}>Четвер</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/friday'}>П'ятниця</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/saturday'}>Субота</Link>
                    </li>
                    <li>
                        <Link className={css.link} to={'/sunday'}>Неділя</Link>
                    </li>
                </ul>

            </div>

            <Outlet/>
        </div>
    );
};

export {
    Header
};