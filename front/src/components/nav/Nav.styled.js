import styled, {keyframes} from 'styled-components'

const fadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`

// BottomNav
export const BottomNavBox = styled.div`
    width: 100%;
    height: 60px;
    position: fixed; bottom: 0;
    border-top: 1px solid #edebeb;
    background-color: white;
    display: flex;
    justify-content: center; align-items: center;
`
export const BottomNavBtn = styled.div`
    width: 100px; height: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    & img {
        height: 50%;
    }
    & .profile_img {
        border-radius: 100%;
    }
`
export const BottomNavText = styled.p`
    margin: 2px 0 0 0;
    font-size: 12px;
    color: ${(props) => props.textcol || '#737373'}; // #a6a6a6
`


// TopNav
export const TopNavBox = styled.div`
    width: 100%;
    height: 50px;
    position: fixed; top: 0;
    background-color: white;
    display: flex;
    z-index: 100;
`
export const TopNavBtn = styled.div`
    width: 50px; height: 100%;
    display: flex; justify-content: center; align-items: center;

    & img {
        width: 40%;
    }
`
export const PlanInfoBox = styled.div`
    height: 100%;
    display: flex; flex-direction: column;
    justify-content: center;
    align-items: start;
    animation: ${fadeInAni} 0.5s ease-in-out;
`
export const PlanInfoTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
`
export const PlantInfoDate = styled.p`
    font-size: 10px;
    margin: 0;
`