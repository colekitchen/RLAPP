import Image from "next/image";

type VideoCardProps = {
    title: string;
    channel: string;
    thumbnail: string;
}

export default function VideoCard({title, channel, thumbnail}: VideoCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 shadow-lg">
            <div className="flex relative aspect-video w-full items-center justify-center">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={100}
                    height={100}
                    className="object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-xs text-zinc-400">{channel}</p>
            </div>
        </div>
    )
}