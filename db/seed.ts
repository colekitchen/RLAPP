import { db } from "./index";
import { videos } from "./schema";

async function seed() {

    const videoData = [
        {
            rank: "gold",
            category: "game-sense",
            title: "Example 1",
            channel: "Example Channel",
            youtube_id: "APtqNSmMOL8"
        },
        {
            rank: "gold",
            category: "mechanics",
            title: "Example 2",
            channel: "Example Channel",
            youtube_id: "APtqNSmMOL8"
        },

    ];

    await db.insert(videos).values(videoData);
};

seed();