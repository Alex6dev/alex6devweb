import { useEffect, useState } from "react"
import imgCRA from '../assets/craLogo.png'
import imgReact from '../assets/reactLogo.png'
import imgRedux from '../assets/reduxLogo.png'
import imgJest from '../assets/jestLogo.png'
import imgFigma from '../assets/figmaLogo.png'
import imgGitHub from '../assets/gitHubLogo.png'


export const PortFolio = (props) =>{
    const [listData,setListData]=useState(props.data)
    const [index,setIndex]=useState(0)
    const [projet,setProjet]=useState(listData[index])

    
    const liTag=(tag)=>{
        switch(tag){
            case'html':
                return(
                    <li key={tag}>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#dd4b25"></rect>
                            <text x="5%" y="85%" className="titre-competence">HTML</text>
                            <text x="45%" y="80%" fill="#eeeeee" className="version-competence">5</text>
                        </svg>
                    </li>
                )

            case'css':
                return(
                    <li key={tag}>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#146fb1"></rect>
                            <text x="5%" y="85%" className="titre-competence">CSS</text>
                            <text x="45%" y="80%" fill="#eeeeee" className="version-competence">3</text>
                        </svg>
                    </li>
                )

            case'sass':
                return(
                    <li key={tag}>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#CF649A"></rect>
                            <text x="5%" y="85%" className="titre-competence">SASS</text>
                        </svg>
                    </li>
                ) 

            case'js':
                return(
                    <li key={tag}>
                        <svg className="svg-competence" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="15" ry="15" x="0" y="0" height="70" width="70" fill="#daa71d"></rect>
                            <text x="60%" y="85%" className="titre-competence">JS</text>
                        </svg>
                    </li>
                )

            case'cra':
                return(
                    <li key={tag}>
                        <figure>
                            <img src={imgCRA} alt="logo Create React App" className="logoHardSkills"></img>
                        </figure>
                    </li>
                )

            case'react':
                return(
                    <li key={tag}>
                        <figure>
                            <img alt="logo React" src={imgReact} className="logoHardSkills"></img>
                        </figure>
                    </li>
                )

            case'redux':
                return(
                    <li key={tag}>
                        <figure>
                            <img alt="logo Redux" src={imgRedux} className="logoHardSkills"></img>
                        </figure>
                    </li>
                )

            case'jest':
                return(
                    <li key={tag}>
                        <figure>
                            <img src={imgJest} alt="logo Jest" className="logoHardSkills"></img>
                        </figure>
                    </li>
                )

            case'figma':
                return(
                    <li key={tag}>
                        <figure>
                            <img src={imgFigma} alt="logo figma" className="logoHardSkills"></img>
                        </figure>
                    </li>
                )  

            case'git':
                return(
                    <li key={tag}>
                        <figure>
                            <img src={imgGitHub} alt="logo GtiHub " className="logoHardSkills"></img>
                        </figure>
                    </li>
                )
            default: console.log("pas de tag")
        }
    }
    useEffect(()=>{
        setProjet(listData[index])
    },[index])

    const previousProjet=()=>{
        if(index===0){
            setIndex(listData.length-1)
        }else{
            setIndex(index-1)
        }
    }

    const nextProjet=()=>{
        if(index===listData.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }

    return(
        <section id="portfolio" className="sectionPortFolio" >
            <div className="post-it portfolioContainer pair">
                <h2 className="tittleSection">PortFolio</h2>
                <div className="portfolioContainerNameImgDescrip">
                    <div className="portfolioContainerName">
                        <p className="portfolioProjetName">{projet.name}</p>
                        <p className="portfolioProjetTittle"> {projet.tittle}</p>
                        <ul className="portfolioListCompetences">
                            {projet.competences.map((competence)=>{
                                return(
                                    <li key={competence}>
                                        {competence}
                                    </li>
                                )
                            })}    
                        </ul>  
                    </div>
                    <div className="portfolioContainerImg"> 
                        <img src={projet.imgScreen} alt="un screenshot du site web" className="portfolioImg"></img>
                        <button type="button" onClick={()=>previousProjet()} className="arrow arrow-left"> <i className="fa-solid fa-arrow-left "></i></button>
                        <button type="button" onClick={()=>nextProjet()} className="arrow arrow-right"> <i className="fa-solid fa-arrow-right "></i></button>
                    </div>
                </div>
                <div className="portfolioContainerDescrip">
                    <div className="portfolioContainerListTags">
                        <p>Tags</p>
                        <ul className="portfolioListTags">        
                            {projet.tags.map((tag)=>liTag(tag))}
                        </ul>                        
                    </div>

                    <div className="portfolioContainerListLien">
                        {projet.url==="none"?(
                            <ul className="portfolioListLien">
                                <li>
                                    <a href={projet.urlGit}  target="_blank" rel='noreferrer' >
                                        <button type="button">
                                            <img src={imgGitHub} className="imgLienGit logoHardSkills" alt="logo gitHub" ></img>
                                        </button>
                                    </a>    
                                </li>
                            </ul>
                        ):(
                            <ul className="portfolioListLien"> 
                                <li>
                                    <a href={projet.urlGit}  target="_blank" rel='noreferrer' >
                                        <button type="button" className=" logoHardSkills">
                                            <img src={imgGitHub} className="imgLienGitHub" alt="logo gitHub"></img>
                                        </button>
                                    </a>    
                                </li>
                                <li>
                                    <a href={projet.url}  target="_blank" rel='noreferrer'>
                                        <button type="button" className=" logoHardSkills">
                                            <i className="fa-solid fa-globe imgLienWeb"></i>
                                        </button>
                                    </a>    
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}