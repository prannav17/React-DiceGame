import './homepage.css';
function Homepage({toggle}){
    return(<div className="maindiv">
        <div>
            <img src='/images/dices 1.png' alt="No image"></img>
        </div>
        <div>
            <h1 className='h1'>DICE GAME</h1>
            <button className='b1' onClick={toggle}>Play Now</button>
        </div>
        </div>
    )
}


export default Homepage;