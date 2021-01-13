import React from "react";
import { useRecoilValue } from "recoil";
import { driverState } from "../state/atoms";
import HeadingOne from "../components/HeadingOne";
const Index = (props) => {
  const drivers = useRecoilValue(driverState);
  console.log(props);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
      {drivers.map((driver, index) => (
        <div
          key={index}
          onClick={() => props.navigate(`/driver/${driver.split(" ")[1]}`)}
        >
          {driver}
        </div>
      ))}
    </>
  );
};

export default Index;
