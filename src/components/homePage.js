import my from '../assets/my.jpg';
import imgCode from '../assets/imgCodeHome.jpg';

export const HomeComponent=()=>{   
  
  
    return(
        <section className="col-11 m-auto d-flex mt-5" >
            <div className="containerImgLeft">
                <img alt="photo de Alexandre Six" src={my} className="imgHome"/>
                <span className='elementDeco span1'></span>
                <span className='elementDeco span2'></span>
            </div>
            <div className="containerTextStart">
                <h1> Bonjour moi c'est Alexandre</h1>
                <h2> Développeur Front-End Junior pour vous servir !!</h2>
                <p> 
                    Je me présente Alexandre Six un diamant à l’état brut qui ne demande qu’à être polie par le travail et l'expérience de ces paires !
                    Anciennement gérant adjoint d’une exploitation agricole.
                    J’ai décidé de me reconvertir dans le domaine de la tech et plus précisément en tant que développeur web front end .
                    Et dans l’objectif de devenir développeur fullstack à moyen terme . 
                </p>
                <p>Actuellement en formation POE JAVA EE FullStack (+ Angular).</p>

            </div>
            <div className="containerImgRight">
                <img alt="photo d'un écran avec du code JS" src={imgCode} className="imgHome imgRight"  />
                <span className='elementDeco span3'></span>
                <span className='elementDeco span4'></span>
            </div>
        </section>
    )
}