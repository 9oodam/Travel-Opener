import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainBottomBox, BigLabel, SmallLabel, SelectBox, Select, BtnBox, MakePlanBtn } from './Main.styled'
import { useNavigate } from 'react-router-dom';

const MainBottom = ({choiceSelected}) => {
    const gptData = useSelector((state) => {
        return state.gptSlice;
    })

    let withArr = ['혼자', '친구와', '연인과', '배우자와', '아이와', '부모님과', '반려동물과'];
    let whichArr = ['체험·액티비티', 'SNS 핫플레이스', '자연과 함께', '유명 관광지는 필수', '여유롭게 힐링', '문화·예술·역사', '여행지 느낌 물씬', '쇼핑은 열정적으로', '관광보다 먹방'];

    const [choiceIndex1, setChoice1] = useState('');
    const [choiceIndex2, setChoice2] = useState('');

    const [choiceAll, setAll] = useState(false);

    // 누구와
    const isChoice1 = (value) => {
        if(choiceIndex1.indexOf(value) !== -1) {
            let arr = choiceIndex1.filter((va) => va !== value)
            setChoice1(arr);
        }else {
            if(choiceIndex1 == '') {
                setChoice1([value])
            }else {
                setChoice1([...choiceIndex1, value]);
            }
            choiceSelected(choiceIndex1, choiceIndex2)
        }
    }
    // 여행 스타일
    const isChoice2 = (value) => {
        if(choiceIndex2.indexOf(value) !== -1) {
            let arr = choiceIndex2.filter((va) => va !== value)
            setChoice2(arr);
        }else {
            if(choiceIndex2 == '') {
                setChoice2([value])
            }else {
                setChoice2([...choiceIndex2, value]);
            }
            choiceSelected(choiceIndex1, choiceIndex2)
        }
    }

    useEffect(() => {
        if (choiceIndex1.length > 0 && choiceIndex2.length > 0) {
            setAll(true);
        } else {
            setAll(false);
        }
    }, [choiceIndex1, choiceIndex2]);

    useEffect(() => {
        console.log(gptData)
    }, [gptData])

    return (
        <>
        <MainBottomBox>
            <BigLabel>어떤 스타일의 여행을 할 계획인가요?</BigLabel>
            <SmallLabel>누구와</SmallLabel>
            <SelectBox>
                {withArr.map((value, index) => {
                    if(choiceIndex1.indexOf(value) == -1) {
                        return <Select onClick={() => isChoice1(value)} key={index} back={'#edebeb'} font={'#9b9a9a'}>{value}</Select>
                    }else {
                        return <Select onClick={() => isChoice1(value)} key={index} back={'#277bc0'} font={'white'}>{value}</Select>

                    }
                })}
            </SelectBox>
            <SmallLabel>여행 스타일</SmallLabel>
            <SelectBox>
                {whichArr.map((value, index) => {
                    if(choiceIndex2.indexOf(value) == -1) {
                        return <Select onClick={() => {isChoice2(value)}} key={index} back={'#edebeb'} font={'#9b9a9a'}>{value}</Select>
                    }else {
                        return <Select onClick={() => {isChoice2(value)}} key={index} back={'#277bc0'} font={'white'}>{value}</Select>
                    }
                })}
            </SelectBox>

            {choiceAll &&
            <BtnBox>
                <MakePlanBtn>완료</MakePlanBtn>
            </BtnBox>
            }
        </MainBottomBox>
        </>
    )
}

export default MainBottom;
