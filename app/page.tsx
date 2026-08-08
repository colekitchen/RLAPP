import Image from "next/image";
import Link from "next/link";
import {ranks} from "../data/ranks";

export default function Home() {

  const title = {name: "Title", image: "/Titles/Title.png"};

  return (
    <main className="bg-rl-app-bg text-white min-h-screen">
      <div className="flex min-h-screen flex-col px-6 py-10 bg-rl-app-bg">
        <div className="flex justify-center tracking-wide">
          <Image
            src={title.image}
            alt={title.name}
            width={600}
            height={400}
            loading="eager"
            />
        </div>

        <div className="mt-20 flex items-center">
          <section className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {ranks.map((rank) => (
              <Link
                key={rank.name} 
                href={`/ranks/${rank.slug}`}
                className="flex items-center justify-center aspect-square rounded-2xl border border-zinc-700 bg-zinc-800 shadow-lg transition hover:bg-zinc-700"
              >
                <Image
                  src={rank.image}
                  alt={rank.name}
                  width={100}
                  height={100}
                  />
              </Link>
            ))}
          </section>
        </div>
        </div>
    </main>
  );
}