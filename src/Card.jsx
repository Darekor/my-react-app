import profilePic from './assets/cat.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} className='cardImage' alt="Profile picture" />
            <h2 className='cardTitle'>Dunkash</h2>
            <p className='cardText'>I make pizza and eat it</p>
        </div>
    )
}

export default Card