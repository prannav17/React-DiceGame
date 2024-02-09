import styled from "styled-components";
import { useState } from 'react';
import NumberSelector from "./NumberSelector";
import ScoreCard from "./ScoreCard";
import RollDice from "./RollDice";
function MainGame(){
    const [score, setSCore] = useState(0);
    const  [selected, setSelected] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");


    const getRandomArbitrary = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
      };
    
    
    const rollDice = () =>{
        if (!selected) {
            setError("You have not selected any number ");
            return;
        }
        
        const randomNumber = getRandomArbitrary (1,7);
        setCurrentDice((prev)=>randomNumber);

        if(selected == randomNumber){
            setSCore((prev) => prev+randomNumber);
        }
        else{
            setSCore((prev)=>prev-2);
        }

        setSelected(undefined);

          };

    return(
        <Maincontainer>
        <div className="main">
            <ScoreCard
            score = {score}
            ></ScoreCard>
            <NumberSelector
            selected = {selected}
            setSelected = {setSelected}
            error = {error}
            // setError = {setError("")}
            />
            
        </div>
        <RollDice
        currentDice = {currentDice}
        rollDice = {rollDice}
        setSCore = {setSCore}
        ></RollDice>
        </Maincontainer>
        
    )
}


const Maincontainer = styled.div`

.main{
    display:flex;
    justify-content : space-around;
}
`;


export default MainGame;