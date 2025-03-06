import React from 'react'
import {CardContainer,CardContent} from './cardStyles'
import Button from '../button/Button'

const Card = ({icon, title, description}) => {
  return (
    <CardContainer>
        <CardContent>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </CardContent>
            <Button/>
    </CardContainer>
  )
}

export default Card