import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import TopNav from '../componentsPc/nav/TopNavPc'
import AddPlaceTop from '../componentsPc/place/AddPlaceTopPc'
import AddPlaceMid from '../componentsPc/place/AddPlaceMidPc'
import AddPlaceBottom from '../componentsPc/place/AddPlaceBottomPc'
import { useSelector } from 'react-redux'

import PlanTopPc from "../componentsPc/plan/PlanTopPc";
import PlanMidPc from "../componentsPc/plan/PlanMidPc";
import PlanBottomPc from "../componentsPc/plan/PlanBottomPc";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { AddPlaceMid2, PlanMidPcLeft } from '../componentsPc/place/PlacePc.styled'

const AddPlacePc = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const day = queryParams.get('day');

    const [choiceIndex, setChoice] = useState('');
    const [show, setShow] = useState(false);
    const [suggested, setsuggested] = useState([]);

    const gptAnswerSaved = useSelector((state) => {
        return state.gptAnswerSave;
      });

      // 유저의 선택된 여행정보 가져오기
    const userChoiceSaved = useSelector((state) => {
        return state.userChoiceSave;
    });

    // 리덕스에서 ai 추천관광지 가져오기
    const attractionsWithImg = useSelector((state) => {
        return state.attractionsWithImg;
    });


    useEffect(()=>{
        let arr =[];
        for(let i=0; i<attractionsWithImg.length; i++){
            arr.push(attractionsWithImg[i].name);
        }
        setsuggested(arr);
    },[])



    // gpt 추천 관광지
    // let suggested = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역']

    useEffect(() => {
        if(choiceIndex.length > 0) {
            setShow(true)
        }else {
            setShow(false);
        }
    }, [choiceIndex])

    return (
        <>
        <TopNav isScrolled={true} gptAnswerSaved={gptAnswerSaved} />

        {/* 지도 */}
        <PlanMidPcLeft>
            {/* LA 여행 날짜 */}
            <PlanTopPc gptAnswerSaved={gptAnswerSaved} />

            <AddPlaceMid2>
            <AddPlaceMid page={'add'} day={day} suggested={suggested} choiceIndex={choiceIndex} setChoice={setChoice} />
            </AddPlaceMid2>

            {/* day 1 ~ 저장 */}
            {/* <PlanBottomPc gptAnswerSaved={gptAnswerSaved} userChoiceSaved={userChoiceSaved}/> */}

            {show && <AddPlaceBottom choiceIndex={choiceIndex} />}

        </PlanMidPcLeft>
        <PlanMidPc gptAnswerSaved={gptAnswerSaved} />
        

        <BottomNavPc />
        </>
    )
}

export default AddPlacePc
