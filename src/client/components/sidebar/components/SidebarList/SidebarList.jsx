import React from 'react';
import {sidebarElems} from "../SidebarElems";
import SidebarItem from "../SIdebarItem";
import {useStyles} from "../../../../../shared/hooks/useStyles";

function SidebarList(props) {
    const styles = useStyles()
    const murkupSidebar = sidebarElems.map(item => <SidebarItem key={item.id} {...item}/>)
    return (
        <ul className={styles.sidebarList}>
            {murkupSidebar}
        </ul>
    );
}

export default SidebarList;