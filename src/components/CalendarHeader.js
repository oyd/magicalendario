import React from "react";
import UIStore from "../store/UIStore";

const CalendarHeader = () => {
    const date = UIStore(({ date }) => date);
    const setDate = UIStore(({ setDate }) => setDate);

    function nextMonth() {
        setDate(date.plus({ months: 1 }));
    }

    return (
        <h1>{date.toFormat('MMMM yyyy')}</h1>
    );
};

export default CalendarHeader;