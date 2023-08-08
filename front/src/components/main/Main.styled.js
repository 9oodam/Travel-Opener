import styled, {keyframes} from 'styled-components'

// MainTop
export const MainTopBox = styled.div`
    width: 100%; height: auto;
    background-color: #277bc0;
    border-radius: 0 0 30px 30px;
    padding: 10px;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
`
export const LogoBox = styled.div`
    width: 100%; height: 50px;
    position: relative;
    box-sizing: border-box;

    & img {
        height: 100%;
        position: absolute; left: 10px;
    }
`
export const TextBox = styled.div`
    width: 100%;
    // height: 70%;
    display: flex; flex-wrap: wrap;
    margin: 0 0 20px 0;

    & img {
        width: 100%;
    }
`
export const InputBox = styled.div`
    width: 320px;
    height: 45px;
    border-radius: 25px;
    color: white;
    background-color: white;
    display: flex; align-items: center;
    padding: 0 30px 0 30px;
    box-sizing: border-box;
    margin: 0 0 20px 0;

    & img {
        width: 20px; height: 20px;
    }
    & input {
        width: 100%; height: 30px;
        padding: 10px 0 7px 10px;
        box-sizing: border-box;
        font-size: 18px;
        border: none; outline: none;
        font-size: 16px;
        color: #1c2120;
    }
`

// ---------------------------------- //

// MainMid
export const MainMidBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
`
export const BigLabel = styled.div`
    width: 100%;
    text-align: start;
    font-size: 18px; font-weight: bold;
    color: #1c2120;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`
export const DateBoxWrap = styled.div`
    width: 100%; height: auto;
    display: flex; justify-content: center; align-items: center;
    box-sizing: border-box;
`
export const DateBox = styled.div`
    width: 170px; height: 30px;
    background-color: white;
    display: flex; align-items: center;
    box-sizing: border-box;
    margin: 0 5px 0 5px;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 0 5px 0 5px;

    & input {
        width: 100%;
        border: none;
    }
`

// ---------------------------------- //

// MainBottom
export const MainBottomBox = styled.div`
    width: 100%; height: auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
    padding: 0 0 70px 0;
`
export const SmallLabel = styled.div`
    width: 100%;
    text-align: start;
    font-size: 14px; font-weight: bold;
    color: #1c2120;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`
export const SelectBox = styled.div`
    width: 100%; height: auto;
    display: flex; flex-wrap: wrap;
    padding: 0 30px 0 30px;
    box-sizing: border-box;
    margin: 0 0 10px 0;
`
export const Select = styled.div`
    font-size: 14px; font-weight: bold;
    width: auto; height: 30px;
    border-radius: 25px;
    background-color: ${(props) => props.back || '#edebeb'};
    color: ${(props) => props.font || '#9b9a9a'};
    display: flex; justify-content: center; align-items: center;
    padding: 15px;
    box-sizing: border-box;
    margin: 0 10px 7px 0;
    cursor: pointer;
`
export const BtnBox = styled.div`
    width: 100%; height: auto;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`
export const MakePlanBtn = styled.div`
    padding: 15px;
    box-sizing: border-box;
    width: 100%; height: 20px;
    display: flex; justify-content: center; align-items: center;
    border-radius: 15px;
    background-color: #277bc0;
    color: white;
    font-size: 16px; font-weight: bold;
    cursor: pointer;
`