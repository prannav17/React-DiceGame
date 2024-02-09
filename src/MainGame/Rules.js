import styled from "styled-components";
function Rules(){
    return(<>
            <RulePlate></RulePlate>
            </>
    );
}

const RulePlate = styled.div`
min-width : 200px;
min-height : 200px;
background-color : red;
`

export default Rules;