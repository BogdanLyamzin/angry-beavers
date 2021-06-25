import React from 'react';
import {NavLink} from "react-router-dom";
import {useStyles} from "../../../../../shared/hooks/useStyles";

function SidebarItem({to,page}) {
    const styles = useStyles()
    return (
        <li>
           <NavLink className={styles.sidebarItemLink} activeClassName={styles.activeSidebar} exact  to={to} > {page} </NavLink>
        </li>
    );
}

export default SidebarItem;