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
        Recoil Statemangement Demo
      </HeadingOne>
      {drivers.map((driver, index) => (
        <div
          className="cursor-pointer"
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
