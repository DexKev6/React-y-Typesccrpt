
import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

function Nav() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //Cuando estra true lo cambia a false y biserversa
        setClicked(!clicked)
    }
    return (
        <>
            <Navbar className="navbar" >
                <h2>Veterinaria </h2>

                <div className={`links ${clicked ? 'active' : ''}`}  >

                    <ul  >
                        <li >
                            <a aria-current="page" href="./index.html">Mascotas</a>
                        </li>
                        <li >
                            <a href="./veterinarios.html">Veterinarios</a>
                        </li>
                        <li >
                            <a href="./consultas.html">Consultas</a>
                        </li>
                        <li >
                            <a href="./duenos.html">Dueños</a>
                        </li>


                    </ul>

                </div>
                <div className='burguer'>
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
            </Navbar>
        </>
    );
}

export default Nav;

const Navbar = styled.nav`
h2{
    margin-left:20px;
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul,li,a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    ul,li,a{
      color: white;
      font-size: 2rem;
      display: block;
    
    }
    @media(min-width: 768px){
      position: initial;
      margin: auto;
      ul,li, a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    ul,li, a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #333;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    background-color: #333;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
  }
 

`