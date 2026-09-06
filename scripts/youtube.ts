import { db } from "../db/index";
import { videos } from "../db/schema";

function parseDuration(duration: string): number {
    const match = duration.match(
        /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/
    );

    if (!match) {
        return 0;
    }

    const hours = Number(match[1] ?? 0);
    const minutes = Number(match[2] ?? 0);
    const seconds = Number(match[3] ?? 0);

    return hours * 3600 + minutes * 60 + seconds;
}

async function ask(rank: string, category: string) {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
        throw new Error("YOUTUBE_API_KEY is not defined");
    }

   // Search

    const searchParams = new URLSearchParams({
        part: "snippet",
        q: `Rocket League ${rank} ${category}`,
        type: "video",
        maxResults: "50",
        key: apiKey,
    });

    const searchUrl =
        `https://www.googleapis.com/youtube/v3/search?${searchParams}`;

    const searchResponse = await fetch(searchUrl);

    if (!searchResponse.ok) {
        throw new Error(
            `YouTube search failed: ${searchResponse.status}`
        );
    }

    const searchData = await searchResponse.json();

    const searchResults = searchData.items.filter(
        (video: any) =>
            video.id?.videoId &&
            video.snippet?.title &&
            video.snippet?.channelTitle &&
            video.snippet?.publishedAt
    );

    // Get length for filtering

    const videoIds = searchResults.map(
        (video: any) => video.id.videoId
    );

    if (videoIds.length === 0) {
        console.log("No videos found.");
        return;
    }

    const detailsParams = new URLSearchParams({
        part: "contentDetails",
        id: videoIds.join(","),
        key: apiKey,
    });

    const detailsUrl =
        `https://www.googleapis.com/youtube/v3/videos?${detailsParams}`;

    const detailsResponse = await fetch(detailsUrl);

    if (!detailsResponse.ok) {
        throw new Error(
            `YouTube video details failed: ${detailsResponse.status}`
        );
    }

    const detailsData = await detailsResponse.json();

    const durationMap = new Map<string, number>();

    for (const video of detailsData.items) {
        const duration = parseDuration(
            video.contentDetails.duration
        );

        durationMap.set(video.id, duration);
    }

    // Remove youtube shorts

    const filtered = searchResults.filter(
        (video: any) => {
            const duration = durationMap.get(video.id.videoId);
            const title = video.snippet.title.toLowerCase();

            return (
                duration !== undefined && 
                duration > 180 &&
                !title.includes("sideswipe")
            );
        }
    );

    const shuffled = [...filtered].sort(
        () => Math.random() - 0.5
    );

    // Limit to 20 videos

    const selected = shuffled.slice(0, 20);

    const videoData = selected.map((video: any) => ({
        rank,
        category,
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        youtubeId: video.id.videoId,
        publishedAt: new Date(video.snippet.publishedAt),
    }));

    // Add to database

    if (videoData.length > 0) {
        await db
            .insert(videos)
            .values(videoData)
            .onConflictDoNothing();
    }

    console.log(
        `Inserted up to ${videoData.length} ${rank} ${category} videos.`
    );
}

ask("ssl", "mechanics");
