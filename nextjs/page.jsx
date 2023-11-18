"use client"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar"
export default function Page() {
    return <div>
        <CountButton name="1" mult={1}/> <CountButton name="2" mult={2}/>
        <hr />
        <a href="https://github.com/MFroyo/331-Web-Dev/tree/main/nextjs">My Github Repo</a>
        <hr />
        <SearchBar />
    </div>
}