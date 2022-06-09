export const Diplome=()=>{

    return(
        <section>
            <div className="post-it pair">
                <h2 className="tittleSection">Diplôme - Formation </h2>
                <ul>
                    <li className="elementListDiplome">
                        <p className="timeDiplome">
                            <time dateTime="2021">2021</time> - <time dateTime="2022">2022</time> || Openclassrooms
                        </p>
                        <h3 className="nameDiplome">Titre RNCP Développeur web Frontend <span>(equivalant Bac+3/4)</span></h3>
                    </li>
                    <li className="elementListDiplome">
                        <p className="timeDiplome">
                            <time dateTime="2012">2012</time> - <time dateTime="2022">2014</time> || Lycée Saint Louis, Armentières
                        </p>
                        <h3 className="nameDiplome">BTS MAVTPM<span> (Maintenance et Après Vente des engins de Travaux Publics et de Manutention)</span></h3>
                    </li>
                    <li className="elementListDiplome">
                        <p className="timeDiplome">
                            <time dateTime="2009">2009</time> - <time dateTime="2012">2012</time> || Lycée Saint Louis, Armentières 
                        </p>
                        <h3 className="nameDiplome">Bac Pro MVA <span> (Maintenance des Véhicules option voitures particulières) </span></h3>
                    </li>
                </ul>
            </div>
        </section>
    )
}