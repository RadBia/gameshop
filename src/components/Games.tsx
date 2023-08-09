import React from "react";
import {GamesDataSource} from "../data/GamesDataSource";

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
            {GamesDataSource.map((game) => <tr>
                <td>{game.id}</td>
                <td>{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.creator}</td>
                <td>{game.dateOfRelease.toDateString()}</td>
                <td>{game.price}</td>
                <td>{game.status}</td>
                <td>Button</td>
            </tr>)}
            </tbody>
        </table>
    }
}