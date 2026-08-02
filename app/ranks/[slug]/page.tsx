
import {ranks} from "../../../data/ranks";

export default async function Page({params}) {
    const {slug} = await params;

    return (
        <h1>Viewing Page {slug}</h1>
    )
}