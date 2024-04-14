import React from "react";
import DayOfWeek from "./DayOfWeek";

const DoWRow = () => {
    const days = Array.from({length: 7}, (_, i) => <DayOfWeek day={i} key={i} />);
    return (
        <tr className="dowRow">{days}</tr>
    );
};

export default DoWRow;