import styled from 'styled-components';

function ScoreCard({score}){
    return(
        <Container>
        <h1>{score}</h1>
        <p>Total Score</p>
        </Container>
    );
};

const Container = styled.div`
max-width: 100px;
text-align : center;
line-height : 20px;
h1{
    font-size: 100px;
    line-height : 10px;
}
p{
    font-weight: 500;
    font-size:25px;
}
`

export default ScoreCard;