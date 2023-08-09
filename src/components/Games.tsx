import React from "react";
import {GamesDataSource} from "../data/GamesDataSource";
import SingleGame from "./SingleGame";

export default class Games extends React.Component {
    render() {
        return <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Creator</th>
                <th>Date of release</th>
                <th>Price</th>
                <th>Status</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            {GamesDataSource.map((game) => <SingleGame game={game}/>)}
            </tbody>
        </table>
    }
}