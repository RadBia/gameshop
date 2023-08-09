import React from "react";
import {Game} from "../models/Game";

interface SingleGameProps {
    game: Game
}

export default class SingleGame extends React.Component<SingleGameProps> {
    private game = this.props.game
    public render() {
        return <tr>
            <td>{this.game.id}</td>
            <td>{this.game.title}</td>
            <td>{this.game.genre}</td>
            <td>{this.game.creator}</td>
            <td>{this.game.dateOfRelease.toDateString()}</td>
            <td>{this.game.price}</td>
            <td>{this.game.status}</td>
            <td>Button</td>
        </tr>
    }

}