export const Header=()=>{

    return(
        <header className="header">
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"> 
                        <h1 className="headerTittle">Alex6Dev</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#competences">
                                    <button className="button headerBtn"type="button">
                                        <p className="textBtn">
                                        Compétences
                                        </p>
                                    </button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    <button className="btn headerBtn"type="button">
                                        <p className="textBtn">
                                            PortFolio
                                        </p>
                                    </button>                            
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#presentation">
                                    <button className="btn headerBtn"type="button">
                                        <p className="textBtn">
                                            A propos
                                        </p>
                                    </button> 
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <button className="btn headerBtn"type="button">
                                        <p className="textBtn">
                                            Contact
                                        </p>
                                    </button> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

  
    )
}