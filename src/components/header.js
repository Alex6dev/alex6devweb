export const Header=()=>{
    const btnMenuMobileOpen=()=>{
        let btnClose= document.getElementById("btnCloseNav")
        let btnOpen= document.getElementById("btnOpenNav")
        let navMobile= document.getElementById("containerNavMobile")
        btnClose.style.display="block";
        btnOpen.style.display="none";
        navMobile.style.display="block";
    }   
    const btnMenuMobileClose=()=>{
        let btnClose= document.getElementById("btnCloseNav")
        let btnOpen= document.getElementById("btnOpenNav")
        let navMobile= document.getElementById("containerNavMobile")
        btnClose.style.display="none";
        btnOpen.style.display="block";
        navMobile.style.display="none";
    }
    return(
        <header className="header">
            <h1 className="headerTittle">Alex6Dev</h1>
            <div className="headerContainerDesktop">
                <nav className="headerNavDesktop"> 
                    <ul className="headerList">
                        <li className="headerElementList">
                            <a href="#competences" >
                                <button className="btn headerBtn"type="button">Compétences</button>                            
                            </a>                                
                        </li>
                        <li className="headerElementList">
                            <a href="#portfolio" >
                                <button className="btn headerBtn"type="button">PortFolio</button>                            
                            </a>                                
                        </li>
                        <li className="headerElementList">
                            <a href="#presentation" >
                                <button className="btn headerBtn"type="button">A propos</button>                            
                            </a>                                
                        </li>
                        <li className="headerElementList">
                            <a href="#contact" >
                                <button className="btn headerBtn"type="button">Contact</button>                            
                            </a>                                
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="containerMobile">
                <button type="button" onClick={()=>btnMenuMobileOpen()} id="btnOpenNav" className="btnNavMobile">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <button type="button" onClick={()=>btnMenuMobileClose()} id="btnCloseNav" className="btnNavMobile">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div id="containerNavMobile">
                    <nav> 
                        <ul className="headerListMobile">
                            <li className="headerElementList headerElementListMobile">
                                <a href="#competences" >
                                    <button className="btn headerBtn"type="button">Compétences</button>                            
                                </a>                                
                            </li>
                            <li className="headerElementList headerElementListMobile">
                                <a href="#portfolio" >
                                    <button className="btn headerBtn"type="button">PortFolio</button>                            
                                </a>                                
                            </li>
                            <li className="headerElementList headerElementListMobile">
                                <a href="#presentation" >
                                    <button className="btn headerBtn"type="button">A propos</button>                            
                                </a>                                
                            </li>
                            <li className="headerElementList headerElementListMobile">
                                <a href="#contact" >
                                    <button className="btn headerBtn"type="button">Contact</button>                            
                                </a>                                
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}