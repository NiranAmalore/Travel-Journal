import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "../data/data"

export default function App(){

    const entries = data.map( entry => {
        return (
            <Main 
                key = {entry.id}
                {...entry}/>
        )    
    })

    return (
        <div>
            <Navbar />
            <main className="entry-list">
                {entries}
            </main>
        </div>
    )
}