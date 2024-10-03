import profilePic from './assets/cat.jpg'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img src={profilePic} className='cardImage' alt="Profile picture" />
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardText'>{props.text}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

Card.defaultProps = {
    title: "Guest",
    text: "The person is unknown"
}

export default Card