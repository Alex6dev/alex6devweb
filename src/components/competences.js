import imgCRA from '../assets/craLogo.png'
import imgReact from '../assets/reactLogo.png'
import imgRedux from '../assets/reduxLogo.png'
import imgJest from '../assets/jestLogo.png'
import imgFigma from '../assets/figmaLogo.png'
import imgGitHub from '../assets/gitHubLogo.png'
import imgSql from '../assets/SQL-logo.png'
import imgJava from '../assets/java.png'
import imgBootstrap from '../assets/bootstrap-social.png'
import imgJpa from '../assets/jpa200.png'
import imgSpring from '../assets/springBoot.png'
import imgDocker from '../assets/docker.png'
import imgNoSQL from '../assets/NoSQL.jpg'
import imgAngular from '../assets/angular-logo.png'

export const Competences=()=>{
    
    
    return(
        <section className="col-11 col-lg-6 mx-auto" id='competences'>
            <div className="post-it">
                <h2 className="tittleSection">Hard Skills</h2>
                <ul className='hardSkillsList'>
                    <li>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#dd4b25"></rect>
                            <text x="5%" y="85%" className="titre-competence">HTML</text>
                            <text x="45%" y="80%" fill="#eeeeee" className="version-competence">5</text>
                        </svg>
                    </li>
                    <li> 
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#146fb1"></rect>
                            <text x="5%" y="85%" className="titre-competence">CSS</text>
                            <text x="45%" y="80%" fill="#eeeeee" className="version-competence">3</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#CF649A"></rect>
                            <text x="5%" y="85%" className="titre-competence">SASS</text>
                        </svg>
                    </li>
                    <li>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#daa71d"></rect>
                            <text x="60%" y="85%" className="titre-competence">JS</text>
                        </svg>
                    </li>
                    <li>
                        <figure>
                            <img src={imgCRA} alt="logo Create React App" className="logoHardSkills"></img>
                            <figcaption> Create React App</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img alt="logo React" src={imgReact} className="logoHardSkills"></img>
                            <figcaption>React</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img alt="logo Redux" src={imgRedux} className="logoHardSkills"></img>
                            <figcaption>Redux</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={imgJest} alt="logo Jest" className="logoHardSkills"></img>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={imgFigma} alt="logo figma" className="logoHardSkills"></img>
                            <figcaption>Figma</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={imgGitHub} alt="logo GtiHub " className="logoHardSkills"></img>
                            <figcaption>Git/GitHub</figcaption>
                        </figure>
                    </li>
                </ul>
                <p className='competencePs'>Ps: retrouver le niveau de connaissance pour chacun des skills via les projets dans la rubrique suivant </p>
                
                <h3>Les stacks suivantes sont des technologies appris lors de ma formation chez M2I sur plusieurs petits projets </h3>
                <ul className='ulM2ICompetance'>
                    <li>
                        <figure>
                            <img src={imgSql} alt="logo SQL" className="logoHardSkills imgHid"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgJava} alt="logo Java" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={imgBootstrap} alt="logo bootstrap" className="logoHardSkills"></img>
                            <figcaption>Bootstrap</figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgJpa} alt="logo JPA" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgSpring} alt="logo Spring boot" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgDocker} alt="logo Docker" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgNoSQL} alt="logo NoSQL" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                    <li>
                        <figure>
                            <img src={imgAngular} alt="logo Angular" className="logoHardSkills"></img>
                            <figcaption></figcaption>
                        </figure>
                    </li>                    
                </ul>
                <p>Je vous invite à lire la fiche technique de la formation M2I que je suis <a href='https://drive.google.com/file/d/1gtnDqYZqLZfW_pZLaN8MPrXUgTF7dm4o/view?usp=sharing' target="_blank" rel="noreferrer">ici</a> .</p>
            </div>

        </section>
    )
}