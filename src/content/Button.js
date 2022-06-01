import React from "react";



export default function Button() {
    return(
        <section className="button-section" > 
            <form  method="GET" action="https://www.linkedin.com/in/michal-kaso-7981a0139/">
                <input className="button-linkedin" type="submit" value="LinkedIn"/>
            </form>
            <form  method="GET" action="mailto:michalkaso@yahoo.com?body=My custom mail body">
                <input className="button-email" type="submit" value="Email"/>
            </form>
        </section>     
    )
}


