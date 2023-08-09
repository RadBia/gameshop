import React from "react";
import {Game} from "../models/Game";

interface SingleGameProps {
    game: Game
    updateGame: (game: Game) => void;
}

export default class SingleGame extends React.Component<SingleGameProps> {

    private game = this.props.game

    private formatDate(date: Date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDay()

        //yyyy-MM-dd
        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    }

    public render() {
        return <tr>
            <td>{this.game.id}</td>
            <td>{this.game.title}</td>
            <td>{this.game.genre}</td>
            <td>{this.game.creator}</td>
            <td>{this.formatDate(this.game.dateOfRelease)}</td>
            <td>{this.game.price}</td>
            <td>{this.game.status}</td>
            <td>
                <button onClick={() => this.props.updateGame(this.props.game)}>
                    Change status
                </button>
            </td>
        </tr>
    }
}