import { Component } from "react";
import Card from "../card/card.components";

import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { robots } = this.props;
        return (
            <div className="card-list">
                {robots.map(robot => {
                    return (
                        <Card robot={robot} />
                    )
                }
                )}
            </div>
        );
    }
}

export default CardList;
