import Image from "next/image";
import Link from "next/link";

type VideoCardProps = {
    title: string;
    channel: string;
    youtubeId: string;
}

export default function VideoCard({title, channel, youtubeId}: VideoCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 shadow-lg transition hover:bg-zinc-700">
            <a
                href={`https://www.youtube.com/watch?v=${youtubeId}`}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex relative aspect-video w-full items-center justify-center">
                    <Image
                        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-4">
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-xs text-zinc-400">{channel}</p>
                </div>
            </a>
        </div>
    )
}