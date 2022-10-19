import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from './Category.jsx'
import db from '../../api/db.json'

export const ListOFCategories = () => {
    const [categories, setCategories] = useState(db.categories)
   /*  useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]) */
    
    return (
        <UnorderedList>
            {categories.map(({ cover, path, emoji }, index) => (
                <li key={index}>
                    <Category cover={cover} path={path} emoji={emoji} />
                </li>))}
        </UnorderedList>
    )
}

const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    overflow: scroll;
    width: 100%;
`

const ListItem = styled.li`

`
