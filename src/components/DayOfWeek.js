import React from "react";
import { Info } from "luxon";

const dowAstro = ['☉','☽︎','♂','☿','♃','♀','♄'];
const dowChinese = ['日','月','火','水','木','金','土'];

const DayOfWeek = ({ day }) => {
    return (
        <th className="dow">
            <span className="dowAstro">{dowAstro[day]}</span>
            <span className="dowTitle">{Info.weekdays("long")[(day + 6) % 7]}</span>
            <span className="dowChinese">{dowChinese[day]}</span>
        </th>
    );
};

export default DayOfWeek;