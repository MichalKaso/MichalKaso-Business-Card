import React from "react";
import Photo from "./Photo";
import Name from "./content/Name";
import Button from "./content/Button";
import MainContent from "./content/MainContent";
import Footer from "./content/Footer";

export default function App() {
    return(
        <div>

             <Photo />
             <Name />
             <Button />
             <MainContent />
             <Footer />

        </div>
     )
}
