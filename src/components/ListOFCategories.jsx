import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from './Category.jsx'

export const ListOFCategories = () => {
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function () {
        fetch('https://petgram-server-surimi-surimidiaz.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
            .catch(error => console.log(error))
    }, []);

    // es conveniente crear un useEffect para cada unidad lógica así pueden
    // discriminarse las dependencias (2° parámetro) y limpiar lo que haga
    // falta, así como separar competencias o responsabilidades
    useEffect(function () {
        // queremos que la lista aparezca o no según el scrolling
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        
        // para lograr lo anterior, debemos escuchar el evento scroll
        document.addEventListener('scroll', onScroll)

        // pero cuando este componente se dejara de renderizar, quedaría un
        // memory leak, porque el evento seguiría escuchándose, así que
        // debemos limpiar el efecto con la 'clean-up callback'
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])    

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            
            {categories.map((category, index) => (
                <Item key={index}>
                    <Category {...category} />
                </Item>
            ))}
            
            {/* Opción vintage pero coqueta:
            
            {categories.map(({ cover, path, emoji }, index) => (
                <Item key={index}>
                    <Category cover={cover} path={path} emoji={emoji} />
                </Item>
            ))}
        
            */}
           
        </List>
    )
    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
`

const Item = styled.li`
  padding: 0 8px;
`
