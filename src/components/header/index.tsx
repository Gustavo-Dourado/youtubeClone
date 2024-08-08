import { ButtonContainer, ButtonIcon, Container, LogoContainer } from "./style"
import HamburguerIcon from '../../assets';

function Header(){
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
            </LogoContainer>
        </Container>
    )
}

export {Header}