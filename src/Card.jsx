import profilePic from './assets/cat.jpg'
import PropTypes from 'prop-types'

function Card(props){
    if (props.isLoggedIn){
        return(
            <div className="card">
                <img src={profilePic} className='cardImage' alt="Profile picture" />
                <h2 className='cardTitle'>{props.title}</h2>
                <p className='cardText'>{props.text}</p>
            </div>
        )
    }
    else {return <Card></Card>}

}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

Card.defaultProps = {
    title: "Offline",
    text: "The person is offline",
    isLoggedIn: true
}

export default Card