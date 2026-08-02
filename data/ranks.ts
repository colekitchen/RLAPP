export type Rank = {
    name: string;
    slug: string;
    image: string;
}

export const ranks: Rank[] = [
    {name: "Gold", image: "/ranks/gold_1.png", slug: "gold"},
    {name: "Plat", image: "/ranks/plat_1.png", slug: "plat"},
    {name: "Diamond", image: "/ranks/diamond_1.png", slug: "diamond"},
    {name: "Champ", image: "/ranks/champ_1.png", slug: "champ"},
    {name: "GC", image: "/ranks/GC_1.png", slug: "gc"},
    {name: "SSL", image: "/ranks/SSL.png", slug: "ssl"}
];