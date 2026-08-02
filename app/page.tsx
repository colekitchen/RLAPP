import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const ranks = [
    {name: "Gold", image: "/ranks/gold_1.png", slug: "gold"},
    {name: "Plat", image: "/ranks/plat_1.png", slug: "plat"},
    {name: "Diamond", image: "/ranks/diamond_1.png", slug: "diamond"},
    {name: "Champ", image: "/ranks/champ_1.png", slug: "champ"},
    {name: "GC", image: "/ranks/GC_1.png", slug: "gc"},
    {name: "SSL", image: "/ranks/SSL.png", slug: "ssl"}
  ];

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
              <button
                key={rank.name}
                className="flex items-center justify-center aspect-square rounded-2xl border border-zinc-700 bg-zinc-800 text-lg font-semibold shadow-lg transition hover:bg-zinc-700"
              >
                <Image
                  src={rank.image}
                  alt={rank.name}
                  width={100}
                  height={100}
                  />
              </button>
            ))}
          </section>
        </div>
        </div>
    </main>
  );
}