import React from "react";
import {GamesDataSource} from "../data/GamesDataSource";
import SingleGame from "./SingleGame";
import {Game} from "../models/Game";

interface GamesState {
    games: Game[];
}

interface GamesProps {

}


export default class Games extends React.Component<GamesProps, GamesState> {

    constructor(props: GamesProps) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
    }

    state: GamesState = {
        games: GamesDataSource
    }

    private changeStatus(game: Game) {
        const otherGames = this.state.games.filter((x) => x.id !== game.id)

        const newGames = [...otherGames, game]

        this.setState({games: newGames})
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
            {GamesDataSource.map((game) => <SingleGame updateGame={this.changeStatus} game={game}/>)}
            </tbody>
        </table>
    }
}