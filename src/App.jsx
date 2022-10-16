import React from "react"
import { ListOFCategories } from "./components/ListOFCategories.jsx"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards.jsx"
import { PhotoCard } from "./components/PhotoCard.jsx"
import { GlobalStyle } from "./GlobalStyles.js"

export const App = () => (
    <>
        <GlobalStyle />
        <ListOFCategories />
        <ListOfPhotoCards />
    </>
)
