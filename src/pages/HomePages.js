import { useEffect, useState } from "react"
import { Competences } from "../components/competences"
import { Contact } from "../components/contact"
import { Diplome } from "../components/diplome"
import { Header } from "../components/header"
import { HomeComponent } from "../components/homePage"
import { Interets } from "../components/interets"
import { PortFolio } from "../components/portFolio"
import { SoftSkills } from "../components/softSkills"
import { Xp } from "../components/xp"
import dataLocale from "../assets/projet.json"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollToPlugin,ScrollTrigger)

export const HomePages=()=>{
    const [data,setData]=useState(dataLocale.projets)
/*
    const scroll= (elem,delay,duration)=>{
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                start:"-100px center",
                markers:false,
            },
            x:-200 ,
            duration:1,
        })

    }
    useEffect(()=>{
        let postIt=document.getElementsByClassName("post-it")
        
        for (let index = 0; index < postIt.length; index++) {
            scroll(postIt[index])
        }
    },[])
*/
   return(
        <>
            <Header/>
            <main>
                <HomeComponent />
                <Diplome />
                <Competences />
                <PortFolio data={data}/>
                <Xp/>
                <SoftSkills/>
                <Interets/>
                <Contact/>
            </main>
        </>
    )
}