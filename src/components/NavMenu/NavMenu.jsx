import { v4 } from 'uuid';
import { MENU_DATA } from '../../constants/menu-data';
import {
	StyledMenuNumber,
	StyledMenuOption,
	StyledMenuText,
	StyledNavList,
	StyledNavMenu
} from './nav-menu.styles';

const NavMenu = () => {
	return (
		<StyledNavMenu>
			<StyledNavList>
				{MENU_DATA.map((element, i) => (
					<StyledMenuOption
						key={v4()}
						to={element === 'home' ? '/' : `/${element}`}
					>
						<StyledMenuNumber>0{i}</StyledMenuNumber>
						<StyledMenuText>{element.toUpperCase()}</StyledMenuText>
					</StyledMenuOption>
				))}
			</StyledNavList>
		</StyledNavMenu>
	);
};

export default NavMenu;
