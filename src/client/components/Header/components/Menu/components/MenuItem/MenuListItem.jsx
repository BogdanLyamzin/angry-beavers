import { NavLink } from "react-router-dom";
import {MenuItem} from "@material-ui/core";

import {useStyles} from '../../../../../../../shared/hooks/useStyles'

function MenuListItem({page, to, handleClose}) {
    const styles = useStyles()
    return (
       <MenuItem className={styles.menuItem} onClick={handleClose}>
            <NavLink to={to} className={styles.menuItemLink}>{page}</NavLink>
        </MenuItem >
    );
}

export default MenuListItem;