import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder } from "react-icons/md"

const DEFAULT_IMAGE = 'https://i.imgur.com/LXThhia.jpeg'

export const PhotoCard = ({ id = '', src = DEFAULT_IMAGE, likes = 0 }) => (
    <article>
        <a href={`/detail/${id}`}>
            <ImgWrapper>
                <Img src={src} alt="card image" />
            </ImgWrapper>
        </a>

        <Button>
            <MdFavoriteBorder /> {likes} likes!
        </Button>
    </article>
)

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`

const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
