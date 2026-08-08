import Image from "next/image";
import Link from "next/link";
import {ranks} from "../../../data/ranks";
import VideoCard from "../../../components/VideoCard";

export default async function Page({params}) {
    const {slug} = await params;
    const currentRank = ranks.find(rank => rank.slug === slug);
    const gameSense = {name:"Game Sense", image:"/Titles/sense6.png"}
    const mechanics = {name:"Mechanics", image:"/Titles/mechs_test.png"}

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
                            <VideoCard
                            title={`${currentRank.name} Example`}
                            channel="Rocket League Helper"
                            thumbnail={currentRank.image}
                        />
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
                            <VideoCard
                            title={`${currentRank.name} Example`}
                            channel="Rocket League Helper"
                            thumbnail={currentRank.image}
                        />
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}