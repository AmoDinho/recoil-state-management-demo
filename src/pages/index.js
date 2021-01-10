import React from "react";
import { useRecoilState } from "recoil";
import { driverState } from "../state/atoms";
import HeadingOne from "../components/HeadingOne";
const Index = () => {
  const [drivers, setDrivers] = useRecoilState(driverState);
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
