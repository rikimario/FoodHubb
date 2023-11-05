import '../assets/NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html">
                    Dish<span className='discoveries'>D</span>iscoveries
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="register.html">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};