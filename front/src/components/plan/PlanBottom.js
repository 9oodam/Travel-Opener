import React, { useEffect, useState } from 'react'
import { PlanBottomBox, PerDayBox, PerDayDate, PerDayAttraction, RouteBox, RouteNumber, RoutePlace, BtnBox, SavePlanBtn, EditPlanBtn } from './Plan.styled'

import city from '../../img/places/city.jpeg'
import { useNavigate } from 'react-router-dom';

// 지도 아래 일정 부분
const PlanBottom = () => {


    // 일정 며칠인지
    let periodArr = ['8.28', '8.29', '8.30', '8.31'];
    let placeArr = [
        ['캐널시티', '이치란 본사', '후쿠오카 타워', '시사이드 모모치 해변공원'],
        ['유후인'],
        ['유후인'],
        ['유후인']
    ]



    return (
        <>
        <PlanBottomBox>
            {periodArr.map((value, index) => {
                return <PerDay key={index} period={value} index={index+1} place={placeArr[index]} />
            })}
            <BtnBox>
                <SavePlanBtn>저장</SavePlanBtn>
            </BtnBox>
        </PlanBottomBox>
        </>
    )
}

// 1일마다 관광지 보여주는 부분
const PerDay = ({period, index, place}) => {
    const nav = useNavigate();

    // 관광지 검색 & 추가 페이지로 이동
    const moveToAdd = (id) => { // 해당 plan의 해당 날짜에 대한 id
        nav(`/addPlace/${id}?day=${id}`)
    }

    return (
        <>
            <PerDayBox>
                {/* 날짜 */}
                <PerDayDate>
                    <p><span>day {index}</span>{period}</p>
                </PerDayDate>

                {/* 관광지 하나 */}
                <PerDayAttraction>
                    {place.map((value, index) => {
                        return (
                            <RouteBox>
                                <RouteNumber>
                                    <span></span>
                                    <div>{index+1}</div>
                                </RouteNumber>
                                <RoutePlace>
                                    <div>
                                        {value}
                                        <img src={city}></img>
                                    </div>
                                </RoutePlace>
                            </RouteBox>
                        )
                    })}
                </PerDayAttraction>

                {/* 장소 편집 버튼 */}
                <BtnBox>
                    <EditPlanBtn onClick={() => {moveToAdd(index)}}>장소 추가</EditPlanBtn>
                </BtnBox>
            </PerDayBox>
        </>
    )
}

export default PlanBottom
