import DisplayProcess from "../components/DisplayProcess";
import DisplayServices from "../components/DisplayServices";
import HomeHeader from "../components/HomeHeader";
import DisplayForm from "../components/DisplayForm"

export default function HomePage() {
  return <>
    <HomeHeader />
    <DisplayForm />
    <DisplayServices />
    <DisplayProcess />
  </>
}