import { useState } from 'react';
import styled from 'styled-components';

function NumberSelector({error, selected, setSelected}){
    const arr = [1,2,3,4,5,6];
    
    return(
        <Numberarray>
        <p className='err'>{error}</p>
        <div className='arr'>
        
        {arr.map((number)=>(
            <Box
            isSelected = {number == selected}
            onClick={()=>setSelected(number)}
            >
            {number}
            </Box>) )    
        }
        
        </div>
        <p>Select Number</p>
        </Numberarray>
    )
}


const Box = styled.div`
    height : 72px;
    width : 72px;
    border : 1px solid black;
    display: grid;
    place-items:center;
    background-color : ${(props)=>props.isSelected?'black':'white'};
    color : ${(props)=>props.isSelected?'white':'black'};
    &:hover{
        cursor: pointer;
    };
`
const Numberarray = styled.div`
font-size : 25px;
    font-weight: 700;
    padding : 20px;
.arr{
    display : flex;
    gap : 30px;
}

.err{
    color : rgb(161, 125, 0);
}

`;
export default NumberSelector;