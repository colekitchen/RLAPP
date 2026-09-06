import Image from "next/image";
import {ranks} from "../../../data/ranks";
import VideoCard from "../../../components/VideoCard";
import { db } from "../../../db";
import { videos } from "../../../db/schema";
import { eq, and } from "drizzle-orm";

export default async function Page({params}) {
    const {slug} = await params;
    const currentRank = ranks.find(rank => rank.slug === slug);
    const gameSense = {name:"Game Sense", image:"/Titles/game_sense1.png"}
    const mechanics = {name:"Mechanics", image:"/Titles/mechs_test.png"}

    const gameSenseVideos = await db
        .select()
        .from(videos)
        .where(
            and(
                eq(videos.rank, slug), 
                eq(videos.category, "game sense")
            )
        );

    const mechanicsVideos = await db
        .select()
        .from(videos)
        .where(
            and(
                eq(videos.rank, slug), 
                eq(videos.category, "mechanics")
            )
        );

    return (
        <main className="bg-rl-app-bg min-h-screen text-white">
            <div className="flex min-h-screen flex-col px-6 py-10 bg-rl-app-bg">
                <div className="flex justify-center tracking-wide">
                    <Image
                        src={currentRank.image}
                        alt={currentRank.name}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="flex-1">
                        <div className="flex items-center justify-center">
                            <Image
                                src={gameSense.image}
                                alt={gameSense.name}
                                width={200}
                                height={200}
                            />
                        </div>
                        
                        <div className="mt-10">
                            <section className="flex flex-col gap-20">
                                {gameSenseVideos.map(video=> (
                                    <VideoCard
                                        key={video.id}
                                        title={video.title}
                                        channel={video.channel}
                                        youtubeId={video.youtubeId}
                                    />
                                ))}
                            </section>
                        </div>
                    </div>
            
                    <div className="flex-1">
                        <div className="flex items-center justify-center">
                            <Image
                                src={mechanics.image}
                                alt={mechanics.name}
                                width={200}
                                height={200}
                            />
                        </div>
                        
                        <div className="mt-10">
                            <section className="flex flex-col gap-20">
                                {mechanicsVideos.map(video=> (
                                    <VideoCard
                                        key={video.id}
                                        title={video.title}
                                        channel={video.channel}
                                        youtubeId={video.youtubeId}
                                    />
                                ))}
                            </section>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}