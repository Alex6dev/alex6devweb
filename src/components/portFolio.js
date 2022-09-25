
export const PortFolio = (props) =>{ 
    
    return(
        <section id="portfolio" className="col-12 col-lg-11 col-xxl-8 mx-auto" >
            <div className="bg-postIt">
                <div className="post-it">
                    <h2 className="tittleSection">Mon PortFolio</h2>

                    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div className="carousel-indicators">
                            {
                                props.data.map((element)=>{
                                    return element.id==0?(
                                        <button 
                                        key={element.id+element.name} 
                                        type="button" 
                                        data-bs-target="#carousel" 
                                        data-bs-slide-to={element.id} 
                                        aria-label={"Slide "+element.id} 
                                        className="active btn-carousel" >
                                        </button>
                                    ):(
                                        <button 
                                        key={element.id+element.name} 
                                        type="button" 
                                        data-bs-target="#carousel" 
                                        data-bs-slide-to={element.id} 
                                        aria-label={"Slide "+element.id}
                                        className="btn-carousel"
                                        >
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className="carousel-inner">
                            {
                                props.data.map((element)=>{
                                    return element.id==0?(
                                        <div className="carousel-item active" key={element.id*2}>
                                            <a href={element.urlGit} target="_blank" rel="noreferrer">
                                                <img src={element.imgScreen} className="d-block w-100" alt="le screen shot du site web"/>
                                            </a>
                                            <div className="carousel-caption d-md-block">
                                                <h3>{element.name}</h3>
                                                <h5>{element.tittle}</h5>
                                                <ul>
                                                   {element.competences.map((textLi)=>{
                                                        return <li key={textLi}>{textLi}</li>
                                                   })} 
                                                </ul>
                                            </div>
                                        </div>

                                    ):(
                                        <div className="carousel-item" key={element.id*2}>
                                        <a href={element.urlGit} target="_blank" rel="noreferrer">
                                            <img src={element.imgScreen} className="d-block w-100" alt="le screen shot du site web"/>
                                        </a>
                                        <div className="carousel-caption d-md-block">
                                            <h3>{element.name}</h3>
                                            <h5>{element.tittle}</h5>
                                            <ul>
                                               {element.competences.map((textLi)=>{
                                                    return <li key={textLi}>{textLi}</li>
                                               })} 
                                            </ul>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                           
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <i className="bi bi-arrow-left-circle-fill" aria-hidden="true"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <i className="bi bi-arrow-right-circle-fill" aria-hidden="true"></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}