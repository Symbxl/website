import CardLayout from "../layouts/CardLayout"
import ProcessCard from "./ProcessCard"
import styled from "styled-components"
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold, PiNumberFourBold, PiNumberFiveBold, PiNumberSixBold, PiNumberSevenBold, PiNumberEightBold } from 'react-icons/pi'

export default function DisplayProcess() {
  const data = [
    {
      id: 1,
      number: <One />,
      title: "Discovery",
      description: "During the discovery stage, we map out your software and decide together what features should be included in your version 1 launch.",
    },
    {
      id: 2,
      number: <Two />,
      title: "UI/UX Design",
      description: "This is where your app starts to come to life! First, we create flow charts for every user type, then start designing all pages of the app.",
    },
    {
      id: 3,
      number: <Three />,
      title: "Back-end Coding",
      description: "Now it's time to bring each feature to life! As we code each feature we will send you the updated app for review.",
    },
    {
      id: 4,
      number: <Four />,
      title: "Front-end Coding",
      description: "The primary deliverable in front-end coding is essentially turning your design into code. We will set up meetings for you to view and test your mobile or web app accordingly.",
    },
    {
      id: 5,
      number: <Five />,
      title: "Testing and Debugging",
      description: "At this point the primary coding is done, the data-base is integrated and it's time to fully test the app. We will work together with you to ensure the app is ready for a public release ",
    },
    {
      id: 6,
      number: <Six />,
      title: "Version 1 Launch",
      description: "If it's a mobile app, then we will submit it to Apple and Google for review. Usually there's some back and forth with them before they approve it (don't worry, we handle that for you). Once they approve the app, it's available worldwide for download.",
    },
    {
      id: 7,
      number: <Seven />,
      title: "Maintenance and Upgrades",
      description: "Now that your app is live we will host and maintain everything you need. You can count on us to handle any bugs, develop Version 2 features and ensure your users have exactly what they need."
    },
    {
      id: 8,
      number: <Eight />,
      title: "Long Term Support",
      description: "We provide 24/7 support whenever you need. One of the biggest questions we get is “can you help maintain the app after it’s built?”. The answer is ABSOLUTELY. We can host, maintain, and continuously upgrade your app. In fact, we prefer to work with clients who have long term plans for their app. Consider us YOUR development partner.",
    }

  ]

  return (
    <Container id="process">
      <CardLayout title="Development Process">
        {data.map(item => {
          return (
            <ProcessCard key={item.id} number={item.number} title={item.title} description={item.description} />
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

const One = styled(PiNumberOneBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`

const Two = styled(PiNumberTwoBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`

const Three = styled(PiNumberThreeBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`


const Four = styled(PiNumberFourBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`


const Five = styled(PiNumberFiveBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`


const Six = styled(PiNumberSixBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`


const Seven = styled(PiNumberSevenBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`

const Eight = styled(PiNumberEightBold)`
  height: 30px;
  width: 30px;
  align-self: center;
`


