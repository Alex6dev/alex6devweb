import imgCRA from '../assets/craLogo.png'
import imgReact from '../assets/reactLogo.png'
import imgRedux from '../assets/reduxLogo.png'
import imgJest from '../assets/jestLogo.png'
import imgFigma from '../assets/figmaLogo.png'
import imgGitHub from '../assets/gitHubLogo.png'

export const Competences=()=>{
    
    
    return(
        <section className="sectionHardSkills" id='competences'>
            <div className="hardSkillsContainer post-it impair">
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
            </div>
        </section>
    )
}