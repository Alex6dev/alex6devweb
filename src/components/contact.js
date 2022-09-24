import imgMy from "../assets/myContact.png"
export const Contact=()=>{
    return(
        <section id="contact" className="sectionContact"> 
            <div className="post-it  pair">
                <h2 className="tittleSection">Contact</h2>
                <div className="contactContainerImgText">
                    <img src={imgMy} alt="photo de alexandre six" className="imgContact"></img>
                    <div className="contactContainerText">
                        <div className="contactText">
                            <i className="fa-solid fa-phone"></i>
                            <p>06.31.61.43.68</p>
                        </div>
                        <div className="contactText">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>59280 Armentières</p>
                        </div>
                        <div className="contactText">
                            <i className="fa-solid fa-envelope"></i>
                            <a href="mailto:alexandresix2@gmail.com">alexandresix2@gmail.com</a>
                        </div>
                        <div className="contactText">
                            <i className="fa-brands fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/alexandre-six/">Alexandre Six</a>
                        </div>
                        <a href="https://drive.google.com/file/d/14wVs7pWrbx5Ogf1JcNjgiSKykCajaa3K/view?usp=sharing" target="_blank" rel="noreferrer" ><button type="button" className="lienCv" >Voir mon CV</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}