import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { insert } from "../redux/features/dataForGpt";

import BottomNav from '../components/nav/BottomNav'
import MainTop from '../components/main/MainTop'
import MainMid from '../components/main/MainMid'
import MainBottom from '../components/main/MainBottom'
import { Loading1, Loading2 } from '../components/loading/Loading'
import { PopupBox, PopupBtn } from '../components/main/Main.styled';


const Main = () => {
    const dispatch = useDispatch();
    const gptData = useSelector((state) => {
        return state.gptSlice;
    })

    // gpt에 요청할 content
    const [content, setContent] = useState({
        location : '',
        startDate : '',
        endDate : '',
        option1 : '',
        option2 : ''
    });

    // 지역 검색
    const [isSearched, setSearch] = useState(false);
    // 날짜 입력
    const [isDated, setDate] = useState(false);
    // 옵션 선택
    const [isChoiced, setChoice] = useState(false);


    // 지역 검색
    const locationSearched = (lo) => {
        if(lo == undefined) {
            return;
        }else {
            // 지역이 제대로 검색 되었을 시 (올바른 지역명인지 한 번 확인?)
            setSearch(true)
            setContent({
                ...content,
                location : lo
            })
        }
    }
    // 날짜 입력
    const dateSelected = (sd, ed) => {
        setDate(true);
        setContent({
            ...content,
            startDate : sd,
            endDate : ed
        })
    }
    // 옵션 선택
    const choiceSelected = (choiceIndex1, choiceIndex2) => {
        setChoice(true);
        setContent({
            ...content,
            option1 : choiceIndex1,
            option2 : choiceIndex2
        })
    }

    // 다 
    useEffect(() => {
        console.log(content);

        // dispatch 전송
        if(isChoiced) {
            dispatch(insert({...gptData,
                location : content.location,
                date : `${content.startDate}~${content.endDate}`,
                choiceDataWho : content.option1,
                choiceDataHow : content.option2
            }))
        }
    }, [content])


    // useEffect(() => {
    //     console.log(gptData)
    // }, [gptData])


    return (
        <>
        <MainTop locationSearched={locationSearched} />
        {isSearched && <MainMid dateSelected={dateSelected} />}
        {isDated && <MainBottom page={'main'} choiceSelected={choiceSelected} />}

        <BottomNav page={'main'} />
        </>
    )
}

// const Popup = () => {
//     return (
//         <>
//             <PopupBox>
//                 <PopupBtn>
//                     <p>일정 만들러가기</p>
//                     <div className='btns'>
//                         <div className='btn btn1'>출발</div>
//                         <div className='btn btn2'>취소</div>
//                     </div>
//                 </PopupBtn>
//             </PopupBox>
//         </>
//     )
// }



export default Main
