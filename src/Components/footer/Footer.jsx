import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import "./footer.css"

const Footer = () => {
  let data = useSelector((state)=>state.product.value)
  return (
    <>
    <Container>
      <h6>Totall Products :{data}</h6>
    </Container>
    </>
  )
}

export default Footer