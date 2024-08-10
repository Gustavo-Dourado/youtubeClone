import styled from 'styled-components';

export const Container = styled.div<{isOpenMenu: boolean}>`
    width: ${({isOpenMenu}) => (isOpenMenu? '250px' : '100px')};
    height: 100vh;
    box-sizing: border-box;
    padding: 65px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

export const MenuItem = styled.div<{isOpenMenu: boolean}>`
    width: 90%;
    min-height: ${({isOpenMenu}) => (isOpenMenu? '40px' : '70px')};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({isOpenMenu}) => (isOpenMenu? 'row' : 'column')};
    align-items: center;
    justify-content: ${({isOpenMenu}) => (isOpenMenu? 'none' : 'center')};

    span{
        font-weight: ${({isOpenMenu}) => (isOpenMenu? '600' : '400')};
        margin-left: ${({isOpenMenu}) => (isOpenMenu? '20px' : 'none')};
        font-size: ${({isOpenMenu}) => (isOpenMenu? '17px' : '12px')};
    }

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;