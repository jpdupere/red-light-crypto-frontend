import React from "react"
import { useMoralis } from "react-moralis"
import LandingLayout from "../components/layouts/LandingLayout"
import HomeConnected from '../components/sections/HomeConnected'
import HomeDisconnected from '../components/sections/HomeDisconnected'

export default function Home(props) {
  const { isAuthenticated } = useMoralis();
  
  const section = isAuthenticated ? <HomeConnected /> : <HomeDisconnected />

  return (
    <LandingLayout {...props}>
      {section}
    </LandingLayout>
  )
}