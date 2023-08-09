import {Game} from "../models/Game";
import {GameStatus} from "../models/GameStatus";
import {Genre} from "../models/Genre";

export const GamesDataSource: Game[] = [
    {
        id: 1,
        title: "CS GO",
        creator: "Valve",
        dateOfRelease: new Date("2011-09-30T00:00:00"),
        genre: Genre.Fps,
        price: 11.99,
        status: GameStatus.New
    },
    {
        id: 2,
        title: "Diablo 4",
        creator: "Blizzard",
        dateOfRelease: new Date("2023-06-15T00:00:00"),
        genre: Genre.Rpg,
        price: 99.99,
        status: GameStatus.New
    }


]