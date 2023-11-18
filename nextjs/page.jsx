import CountButton from "./CountButton"
export default function Page() {
    return <div>
        <CountButton name="1" mult={1}/> <CountButton name="2" mult={2}/>
        <hr />
        <a href="">My Github Repo</a>
        <hr />
        <p>Search Bar</p>
    </div>
}