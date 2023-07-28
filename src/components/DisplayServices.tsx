import CardLayout from "../layouts/CardLayout"
import ServiceCard from "./ServiceCard"
import styled from "styled-components"
import { BsHeadset, BsPhone } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg'
import { SiHiveBlockchain } from 'react-icons/si'

export default function DisplayServices() {
  const data = [
    {
      id: 1,
      image: <Website />,
      title: "Custom Web Software",
      description: "From blueprint, to design, to coding...we’ve got your back! We can build your customer facing or internal use mobile app for iOS or Android (most people do both). Once you’ve approved your first version for launch we handle the Apple and Google submission process for you.",
    },
    {
      id: 2,
      image: <Phone />,
      title: "Mobile App Development",
      description: "From blueprint, to design, to coding...we’ve got your back! We can build your customer facing or internal use mobile app for iOS or Android (most people do both). Once you’ve approved your first version for launch we handle the Apple and Google submission process for you.",
    },
    {
      id: 3,
      image: <BlockChain />,
      title: "Blockchain Software",
      description: "Whether you're looking to build a consumer facing NFT platform of your own or creating an on-chain B2B focused software, we can get you to the finish line.",
    },
    {
      id: 4,
      image: <Headset />,
      title: "Long Term Support",
      description: "One of the biggest questions we get is “can you help maintain the app after it’s built?”. The answer is ABSOLUTELY. We can host, maintain, and continuously upgrade your app. In fact, we prefer to work with clients who have long term plans for their app. Consider us YOUR development partner.",
    }
  ]

  return (
    <Container id="services">
      <CardLayout title="Here's What We Do...">
        {data.map(item => {
          return (
            <ServiceCard key={item.id} image={item.image} title={item.title} description={item.description} />
          )
        })}
      </CardLayout>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Headset = styled(BsHeadset)`
  height: 40px;
  width: 40px;
  align-self: center;
`

const Website = styled(CgWebsite)`
  height: 40px;
  width: 40px;
  align-self: center;
`
const Phone = styled(BsPhone)`
  height: 40px;
  width: 40px;
  align-self: center;
`

const BlockChain = styled(SiHiveBlockchain)`
  height: 40px;
  width: 40px;
  align-self: center;
`
