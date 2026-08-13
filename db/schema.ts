import { pgTable, serial, text, unique, timestamp } from "drizzle-orm/pg-core";

export const videos = pgTable(
    "videos",
    {
        id: serial("id").primaryKey(),
        youtubeId: text("youtube_id").notNull(),
        rank: text("rank").notNull(),
        category: text("category").notNull(),
        title: text("title").notNull(),
        channel: text("channel").notNull(),
        publishedAt: timestamp("published_at", { withTimezone: true}).notNull()
    },
    (table) => [
        unique("unique_video_rank_category").on(
            table.youtubeId,
            table.rank,
            table.category
        )
    ]
);