import React from "react";
import { useRecoilValue } from "recoil";
import { driverQuery } from "../state/selectors";
const Driver = (props) => {
  const driver = useRecoilValue(driverQuery(props.driverId));

  return (
    <>
      <p>This is the page of [drivername]</p>
    </>
  );
};

export default Driver;
