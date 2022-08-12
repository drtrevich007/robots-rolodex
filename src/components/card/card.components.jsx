import { Component } from 'react';
import './card.styles.css';


class Card extends Component {
    render() {
        const { id, name, email } = this.props.robot;
        return (
            <div className="card-container" key={id}>
                <img alt={`robot ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;