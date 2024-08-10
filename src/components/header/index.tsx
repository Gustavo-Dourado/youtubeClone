import { 
    ButtonContainer,
    ButtonIcon, 
    Container, 
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons
} from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png";
import YoutubeLogo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import { useContext } from "react";
import { MenuContext } from "../../contexts/openMenuContext";

function Header(){
    
    const {isOpenMenu, setIsOpenMenu } = useContext(MenuContext);

    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setIsOpenMenu(!isOpenMenu)} margin='0 10px 0 0'>
                    <ButtonIcon  alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img
                style={{cursor: 'pointer', width: '100px'}} 
                alt=""
                src={YoutubeLogo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder='Pesquisar'/>
                </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src={SearchIcon}/>
                    </SearchButton>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt ="" src={MicIcon}/>
                    </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    G
                </ButtonContainer>
            </HeaderButtons>

        </Container>
    )
}

export { Header } 