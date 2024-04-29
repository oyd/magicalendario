import React from "react";
import { DateTime, Interval } from "luxon";

const tpSigns = ['crocodile','wind','house','lizard','snake','death','deer','rabbit','water','dog','monkey','grass','reed','jaguar','eagle','vulture','movement','flint','rain','flower'];
const tpStart = DateTime.local(1001, 4, 30);

const Tonalpohualli = ({date}) => {
    const days = Math.floor(Interval.fromDateTimes(tpStart, date).length('days'));
    const tpSign = tpSigns[days % 20];
    const tpCount = days % 13 + 1; 
    return <div>{tpCount} {tpSign}</div>
};

export default Tonalpohualli;