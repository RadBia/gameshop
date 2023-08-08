import {Game} from "../models/Game";
import {GameStatus} from "../models/GameStatus";
import {Genre} from "../models/Genre";

export const GamesDataSource: Game[] = [
    {
        id: 1,
        title: "CS GO",
        creator: "Valve",
        dateOfRelease: new Date(),
        genre: Genre.Fps,
        price: 22,
        status: GameStatus.New
    }
]