import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './component/Navigation'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
      <Container>
        <header>
        <Navigation/>
        </header>
        <Outlet/>
        <footer>
        </footer>
      </Container>
    </>
  )
}
