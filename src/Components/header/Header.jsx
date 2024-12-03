import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement } from '../slice/productSlice'
import "./header.css"
import { Container,Row,Col } from 'react-bootstrap'
import oil from "../../assets/oil.jpg"
import food from "../../assets/food.jpg"
import tv from "../../assets/tv.jpg"
import sop from "../../assets/soup.jpg"


const Header = () => {
    let data = useSelector((state)=>state.product.value)
    let dispatch = useDispatch()
    let handelincr =()=>{
        dispatch(increment())       
    }

    let handelminus =()=>{
        dispatch(decrement())
    }
    
  return (
    <>
    {/* <Container>
    <div className="">
    <div className="d-flex">
    <button className='inc' onClick={handelincr}>+</button>
    <div className="">{data}</div>
    <button className='dic'  onClick={handelminus}>-</button>  </div> 
    </div>
    </Container> */}
    <Container>
        <Row>
            <Col lg={3}>
            <div className="box">
                <div className="i-box">
                    <img src={oil} alt="" />
                </div>
                <div className="list">
              
    <div className="d-flex">
    <button className='inc' onClick={handelincr}>+</button>
    <div className="">{data}</div>
    <button className='dic'  onClick={handelminus}>-</button> 
     </div> 
                </div>
            </div>
            </Col>
            
        </Row>
    </Container>

    </>
  )
}

export default Header