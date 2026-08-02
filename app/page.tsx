import Image from "next/image";
import Link from "next/link";
import {ranks} from "../data/ranks";

export default function Home() {

  const title = {name: "Title", image: "/ranks/Title.png"};

  return (
    <main className="bg-rl-app-bg text-white min-h-screen">
      <div className="flex min-h-screen flex-col px-6 py-10">
        <div className="flex justify-center mt-80 tracking-wide">
          <Image
            src={title.image}
            alt={title.name}
            width={600}
            height={400}
            />
        </div>

        <div className="mt-100 flex items-center">
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