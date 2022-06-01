import React from "react";


export default function Photo() {
    return(
        <section className="img">
           <img src={require('./mike.JPG')} alt="mike-img" />
        </section>
    )
}