import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: `orange` }}>
            <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
            <Header headerText="It's very sweet!" />
            <p>Such wow. Very React.</p>
        </div>
    )
}