import { Link } from "react-router-dom"
import "../components/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="/logo.png" alt="logo pet shop" />

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/banho-e-tosa">
                                Banho e tosa
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Adestramento">
                                Adestramento
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/hotel-risorte">
                                Hotel Risorte
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}