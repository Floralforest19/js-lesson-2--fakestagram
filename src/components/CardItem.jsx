import React from 'react'
//import cardButton from "./cardButton";
import {useState} from 'react'

export default function CardItem({title, description, imageURL}){
    
    let [isLiked, setIsLiked] = useState(false)

    function handleClick(){
        //isLiked = true
        setIsLiked(true)
    }
    
    
    return(
        <div className="col-md-4">
        <div class="card">
        <img className="card-img-top" src={ imageURL} alt="card image cap"/>
        <div className="card-body">
            <h5 > {title} </h5>
            <p> {description} </p>
            <a href={imageURL} className="btn btn-primary">Ladda ner bild 
            </a>
           <button onClick={handleClick} className="btn btn-primary btn-block">
               {isLiked ? "Du har gillat": "Gilla"}
               </button>
        </div>
        </div>
        </div>
    )
}