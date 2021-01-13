import React from "react";
import { useRecoilValue } from "recoil";
import { driverQuery } from "../state/selectors";
const Driver = (props) => {
  const driver = useRecoilValue(driverQuery(props.driverID));
  console.log("props", driver);

  return (
    <>
      <p>This is the page of {driver.givenName}</p>
      <p>He is from {driver.nationality}</p>
      <p>
        You can learn more about him <a href={driver.url}>HERE</a>{" "}
      </p>
    </>
  );
};

export default Driver;
