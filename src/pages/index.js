import React from "react";
import { useRecoilValue } from "recoil";
import { driverState } from "../state/atoms";
import HeadingOne from "../components/HeadingOne";
const Index = () => {
  const drivers = useRecoilValue(driverState);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
      {drivers.map((driver, index) => (
        <div key={index}>{driver}</div>
      ))}
    </>
  );
};

export default Index;
