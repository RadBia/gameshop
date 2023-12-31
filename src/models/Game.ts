import {GameStatus} from "./GameStatus";
import {Genre} from "./Genre";

export interface Game {
    id: number;
    title: string;
    genre: Genre;
    creator: string;
    dateOfRelease: Date;
    price: number;
    status: GameStatus;
}