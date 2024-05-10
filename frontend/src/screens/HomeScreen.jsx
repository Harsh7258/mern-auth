import Hero from "../components/Hero";
import { useSelector } from "react-redux";

const HomeScreen = () => {

  const { userInfo } = useSelector((state) => state.auth)
  // console.log(userInfo)
    const isLoggedInTrue = userInfo == null ? false : true; // Converts userInfo to a boolean value
    const isLoggedOutTrue = userInfo == null ? true : false;
  
    return <Hero isLoggedIn={isLoggedInTrue} isLoggedOut={isLoggedOutTrue} />;
  };

export default HomeScreen;