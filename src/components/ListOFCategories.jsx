import React from 'react'
import styled from 'styled-components'
import { Category } from './Category.jsx'
import db from '../../api/db.json'

export const ListOFCategories = () => (
    <UnorderedList>
        {db.categories.map(({cover, path, emoji}, index) => (
            <li key={index}>
                <Category cover={cover} path={path} emoji={emoji} />
            </li>))}
    </UnorderedList>
)

const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    overflow: scroll;
    width: 100%;
`

const ListItem = styled.li`

`
