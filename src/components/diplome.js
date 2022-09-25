export const Diplome=()=>{

    return(
        <section className="col-12 col-lg-11 col-xxl-6 mx-auto">
            <div className="bg-postIt">
                <div className="post-it">
                    <h2 className="tittleSection">Diplôme - Formation </h2>
                    <ul>
                        <li className="elementListDiplome">
                            <p className="timeDiplome">
                                <time dateTime="2021">2022</time> || M2I
                            </p>
                            <h3 className="nameDiplome">POE JAVA FullStack <span>(Spring Boot + Angular)</span></h3>
                        </li>
                        <li className="elementListDiplome">  
                            <p className="timeDiplome">
                                <time dateTime="2021">2021</time> - <time dateTime="2022">2022</time> || Openclassrooms	<i className="fa-solid fa-file-certificate"></i><i className="far fa-gem"></i>
                            </p> 
                            <h3 className="nameDiplome"> 
                                <a href="https://drive.google.com/file/d/1OTasOyaSeEaEfWo4ZtompdPnpj7objiV/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <i className="bi bi-file-earmark-medical-fill"></i>
                                </a>
                                Titre RNCP Développeur web Frontend 
                                <span>
                                    (equivalant Bac+3/4)
                                </span>
                            </h3>
                        </li>
                        <li className="elementListDiplome">
                            <p className="timeDiplome">
                                <time dateTime="2012">2012</time> - <time dateTime="2022">2014</time> || Lycée Saint Louis, Armentières
                            </p>
                            <h3 className="nameDiplome">
                                <a href="https://drive.google.com/file/d/1IhjF-x1NAtPNqhcD1Jr9A4Lktc14yR4W/view?usp=sharing" target="_black" rel="noreferrer">
                                    <i className="bi bi-file-earmark-medical-fill"></i>
                                </a>
                                BTS MAVTPM
                                <span>
                                    (Maintenance et Après Vente des engins de Travaux Publics et de Manutention)
                                </span>
                            </h3>
                        </li>
                        <li className="elementListDiplome">
                            <p className="timeDiplome">
                                <time dateTime="2009">2009</time> - <time dateTime="2012">2012</time> || Lycée Saint Louis, Armentières 
                            </p>
                            <h3 className="nameDiplome">
                                <a href="https://drive.google.com/file/d/17sSZ1mQ5kmRGSrf1p8ms5w9YXH1wvC7S/view?usp=sharing" target="_black" rel="noreferrer">
                                    <i className="bi bi-file-earmark-medical-fill"></i>
                                </a>
                                Bac Pro MVA 
                                <span> 
                                    (Maintenance des Véhicules option voitures particulières) 
                                </span>
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}