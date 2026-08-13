CREATE TABLE "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"youtube_id" text NOT NULL,
	"rank" text NOT NULL,
	"category" text NOT NULL,
	"title" text NOT NULL,
	"channel" text NOT NULL,
	"published_at" timestamp with time zone NOT NULL,
	CONSTRAINT "unique_video_rank_category" UNIQUE("youtube_id","rank","category")
);
