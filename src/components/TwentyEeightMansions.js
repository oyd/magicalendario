import React from "react";
import { DateTime, Interval } from "luxon";

const teAspects = '=--+-+++----++=++=+-===-=+-+';
const teStart = DateTime.local(1000, 1, 23);

const TwentyEightMansions = ({date}) => {
    const days = Math.floor(Interval.fromDateTimes(teStart, date).length('days'));
    const teCount = days % 28 + 1;
    const teAspect = teAspects[days % 28];
    return <div>ML {teCount} {teAspect}</div>
};

export default TwentyEightMansions;