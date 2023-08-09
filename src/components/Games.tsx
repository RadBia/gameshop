import React from "react";
import {GamesDataSource} from "../data/GamesDataSource";
import SingleGame from "./SingleGame";
import {GameStatus} from "../models/GameStatus";
import {Game} from "../models/Game";

interface GamesState {
    games: Game[];
}

interface GamesProps {

}


export default class Games extends React.Component<GamesProps, GamesState> {
    state: GamesState = {
        games: GamesDataSource
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
        }
    }

    render() {
        return <table>
            <thead>
            <tr>
                {Object.keys(this.state.games[0]).map(name => <th>{name}</th>)}
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            {this.state.games.map((game) => <SingleGame updateGame={this.changeStatus} game={game}/>)}
            </tbody>
        </table>
    }
}