import React, { useEffect } from "react";
import FullDetails from '../../components/TravelInfoSection/TravelData';

function Travel() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <FullDetails />
    </>
  );
}

export default Travel;