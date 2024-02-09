import { useState } from 'react';
import styled from 'styled-components';
import Rules from './Rules';
function RollDice({
    currentDice, rollDice,setSCore
}){
    const resetScore = () =>{
        setSCore(0);
    };

    const [rules, setRules] = useState(false);
   
    return(
        <RollDiceContainer>
            <div className="rolldiv" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="No dice"></img>
                <p>Click to roll the dice</p>
            </div>
            <div className='buttondivs'>
                <button onClick={resetScore}>Reset Score</button>
                <button>Show Rules</button>
            </div>
        </RollDiceContainer>
    );
};


const RollDiceContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items : center;
margin : 50px;

.rolldiv{
text-align : center;
}

.buttondivs{
    text-align: center;
}
`;

export default RollDice;