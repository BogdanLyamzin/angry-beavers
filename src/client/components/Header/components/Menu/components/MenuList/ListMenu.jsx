import {MenuList } from "@material-ui/core";

import {useStyles} from '../../../../../../../shared/hooks/useStyles'
import MenuItem from '../MenuItem'

import navigationElems from '../../../../../../../shared/navigationElems'

function ListMenu({handleClose}) {
    const styles = useStyles()

    const menuElems = navigationElems.map(item => <MenuItem key={item.id} {...item} handleClose={handleClose}/>)

    return (
        <MenuList className={styles.menuList} >
            {menuElems}
        </MenuList>

    );
}

export default ListMenu;