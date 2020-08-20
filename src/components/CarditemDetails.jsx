import React from 'react'

export default function CarditemDetails({
                 title,
                 description,
                 imageURL,
               }) {
                 return (
                   <div className="col-md-4">
                     <div class="card">
                       <img
                         className="card-img-top"
                         src={imageURL}
                         alt="card image cap"
                       />
                       <div className="card-body">
                         <h5> {title} </h5>
                         <p> {description} </p>
                         <a href={imageURL} className="btn btn-primary">
                           Ladda ner bild
                         </a>
                         <Linkbutton />
                         <Link to={`/image/${id}`}>Go to image</Link>
                       </div>
                     </div>
                   </div>
                 );
               }
