import React from 'react';
import SidebarList from "../SidebarList";
import {Box} from "@material-ui/core";
import {useStyles} from "../../../../../shared/hooks/useStyles";

function Sidebar(props) {
    const styles = useStyles()
    return (
        <Box className={`mobile-sidebar ${styles.sidebar}`}>
            <SidebarList/>
        </Box>
    );
}

export default Sidebar;