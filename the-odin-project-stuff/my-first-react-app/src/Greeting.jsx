// since React 17.0 there's no need to import react in react component files
function Greeting() {
    return <h1>&quot;Greetings by Ziad!&quot;</h1>
}

export function SecondGreeting() {
    return <h2>Here is a second greeting</h2>
}

export function LessonPiece() {
    return (
        <div>
            <h1>Test title</h1>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input type="text" />
            </form>
        </div>
    );
}

export default Greeting;
