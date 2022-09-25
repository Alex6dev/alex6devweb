import imgMy from "../assets/myContact.png"
export const Contact=()=>{
    return(
        <section id="contact" className="sectionContact col-12 col-lg-11 col-xxl-6 mx-auto"> 
            <div className="bg-postIt">
                <div className="post-it">
                    <h2 className="tittleSection">Contact</h2>
                    <div className="contactContainerImgText" >
                        <img src={imgMy} alt="photo de alexandre six"></img>
                        <div className="contactContainerText" itemScope itemType="https://schema.org/Organization">
                            <div className="contactText">
                                <i className="bi bi-telephone-fill"></i>
                                <p itemProp="telephone">06.31.61.43.68</p>
                            </div>
                            <div className="contactText" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p itemProp="streetAddress">
                                    <span itemProp="postalCode">
                                        59280 
                                    </span > 
                                    <span itemProp="addressLocality">
                                        Armentières
                                    </span>
                                </p>
                            </div>
                            <div className="contactText">
                                <i className="bi bi-envelope-fill"></i>
                                <a href="mailto:alexandresix2@gmail.com" itemProp="email">alexandresix2@gmail.com</a>
                            </div>
                            <div className="contactText">
                                <i className="bi bi-linkedin"></i>
                                <a href="https://www.linkedin.com/in/alexandre-six/" target="_blank" rel="noreferrer" >Alexandre Six</a>
                            </div>
                            <a href="https://drive.google.com/file/d/14wVs7pWrbx5Ogf1JcNjgiSKykCajaa3K/view?usp=sharing" target="_blank" rel="noreferrer" ><button type="button" className="lienCv" >Voir mon CV</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}