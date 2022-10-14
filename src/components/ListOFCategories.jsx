import React from 'react'
import styled from 'styled-components'
import { Category } from './Category.jsx'

const auxCategoriesArray = [
    {
        cover: 'https://i.imgur.com/dJa0Hpl.jpg',
        path: '/',
        emoji: 'A'
    },
    {
        cover: 'https://i.imgur.com/LXThhia.jpeg',
        path: '/',
        emoji: 'B'
    },
]

export const ListOFCategories = () => (
    <UnorderedList>
        {auxCategoriesArray.map(({cover, path, emoji}, index) => (
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
