import  {Button} from 'react-bootstrap'

function HomePage() {
    return (
        <div className="container">
            <header>
                <h1>Welcom To The Fishing Diary!</h1>
            </header>
            <artical>
                <Button variant="outline-success">Login to see your entries!</Button>
            </artical>
        </div>
    )
}

export default HomePage;