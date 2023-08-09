import React from "react";
import {Game} from "../models/Game";
import {GameStatus} from "../models/GameStatus";

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

    private changeStatus(game: Game) {
        switch (game.status) {
            case GameStatus.New:
                game.status = GameStatus.SpecialOffer;
                break;
            case GameStatus.SpecialOffer:
                game.status = GameStatus.OutOfStock;
                break;
            case GameStatus.OutOfStock:
                game.status = GameStatus.SpecialOffer;
                break;
            default:
                game.status = GameStatus.New;
                break;
        }
        this.props.updateGame(game);
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
                <button onClick={() => this.changeStatus(this.props.game)}>
                    Change status
                </button>
            </td>
        </tr>
    }
}