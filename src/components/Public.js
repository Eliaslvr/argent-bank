import { Link } from "react-router-dom";

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Repaire Store!</h1>
            </header>
            <main>
                <p>Located in Beautiful</p>
                <p>&nbsp;</p>
                <address>
                    Repair Store<br />
                    555 Foo Drive
                </address>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
    return content
}
export default Public