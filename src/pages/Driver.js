import React from "react";
import { useRecoilValue } from "recoil";
import { driverQuery } from "../state/selectors";
const Driver = (props) => {
  console.log("props", props);
  const driver = useRecoilValue(driverQuery(props.driverID));

  return (
    <>
      <p>This is the page of [drivername]</p>
    </>
  );
};

export default Driver;
