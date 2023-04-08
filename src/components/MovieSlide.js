import "./MovieSlide.css"
import { useState, useEffect } from "react"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa"
import data from "../data"

const MovieSlide = () => {
    const[index, setIndex] = useState(0)

    //točenie dokola
    useEffect(()=>{
        if(index < 0){
            setIndex(data.length-1)
        }else if(index > data.length-1){
            setIndex(0)
        }
    }, [index])

    //automatické posúvanie 
    useEffect(()=>{
        let setIntervalId = setInterval(()=>{
            setIndex(index+1)
        }, 4000)
        return() => clearInterval(setIntervalId)
    }, [index])

  return (
    <section className="all-movies">
        <div className="all-movies-content">
            {
                data.map((movie, movieIndex)=>{
                    const{id, image, title, age, tags, description} = movie

                    let mainClass = "next-slide"
                    if(movieIndex === index){
                        mainClass = "active-slide"
                    }
                    
                    if(movieIndex === index - 1 || (index === 0 && movieIndex === data.length-1)){
                        mainClass = "last-slide"
                    }


                    return (
                        <article key={id} className={mainClass}>
                            <img src={image} alt={title} />
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{tags}</p>
                            <p>{age}</p>
                        </article>
                    )
                })
            }
        </div>
        
        <button onClick={() => setIndex(index-1)}>
            <FaArrowAltCircleLeft/>
        </button>

        <button onClick={() => setIndex(index+1)}>            
            <FaArrowAltCircleRight/>
        </button>

    </section>
  )
}

export default MovieSlide