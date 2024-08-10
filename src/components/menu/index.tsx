import SearchIcon from "../../assets/search.png";
import { ButtonIcon, Container, MenuItem } from './styles';
import { useContext } from "react";
import { MenuContext } from "../../contexts/openMenuContext";

function Menu(){

    const { isOpenMenu } = useContext(MenuContext);

    const itemsMenu = [0,0,0];

    return(
        <Container isOpenMenu={isOpenMenu}>
            {itemsMenu.map(() => (
                <MenuItem isOpenMenu={isOpenMenu}>
                    <ButtonIcon alt="" src={SearchIcon}/>
                    <span>Início</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export { Menu };