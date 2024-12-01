import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color:#223a5f;
    color:#ffffff;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:20px; 

`
export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    border:#ffffff 2px solid;
    border-radius:10px;
    padding:10px;
    width:60vw;
    background-color:transparent;
`
export const ScoreCard = styled.div`
    background-color:#ffffff;
    border:0px;
    border-radius:10px;
    color:#223a5f;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
`
export const OptionsList = styled.ul`
    list-style-type:none;
    display:flex;
    flex-wrap:wrap;
`
export const ResultOptionImg = styled.img`
    height:170px;
    width:170px;
`
export const ResultButton = styled.button`
    border:none;
    background-color:transparent;
    cursor:pointer;
    outline:none;
`
export const CustomBtn = styled.button`
    border:none;
    background-color:#ffffff;
    color:#223a5f;
    padding:10px;
    border-radius:10px;
    align-self:flex-end;
`
export const ResultContainer = styled.div`
    background-color:transparent;
    dispaly:flex;
    flex-direction:column;
    justify-content:center;
    align-items-center;
    width:50vw;
    text-align:center;
`
export const ResultOptions = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-between;
    width:50vw;
`
export const PopupBody = styled.div`
    height:500px;
    width:500px;
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`
export const PopupImage = styled.img`
    height:350px;
    width:350px;
`
export const CloseButton = styled.button`
    align-self:flex-end;
    background-color:transparent;
    height:40px;
    width:40px;
    border:none;
`
export const Score=styled.p`
    font-family:Roboto;
`