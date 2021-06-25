import React from 'react';
import navigationElems from "../../../../../shared/navigationElems";
import SidebarItem from "../SIdebarItem";
import {useStyles} from "../../../../../shared/hooks/useStyles";

function SidebarList(props) {
    const styles = useStyles()
    const markupSidebar = navigationElems.map(item => <SidebarItem key={item.id} {...item}/>)
    return (
        <ul className={styles.sidebarList}>
            {markupSidebar}
        </ul>
    );
}

export default SidebarList;