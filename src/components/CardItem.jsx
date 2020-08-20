import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'

export default function CardItem({id, key, title, description, imageURL}){
    
    let [showDescription, setShowDescription] = useState()

    function renderDescription() {
        if (showDescription) {
            return <p className="card-text">{description}</p>
        }else{
            return ""
        }
    }
    function renderShowMore() {
      if (showDescription == false) {
        return (
          <p>
            <button onClick={() => setShowDescription(true)}>Read more</button>
          </p>
        );
      } else {
        return "";
      }
    }
    
    return(
        <div className="col-md-4">
        <div class="card">
        <img className="card-img-top" src={ imageURL} alt="card image cap"/>
        <div className="card-body">
            <h5 > {title} </h5>
            {renderShowMore()}
            {renderDescription()}
            <p> {description} </p>
            <a href={imageURL} className="btn btn-primary">Ladda ner bild 
            </a>
           <Link to={`/image/${id}`}>Go to image</Link>
        </div>
        </div>
        </div>
    )
}