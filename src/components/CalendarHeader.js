import React from "react";
import UIStore from "../store/UIStore";

const CalendarHeader = () => {
    const date = UIStore(({ date }) => date);
    const setDate = UIStore(({ setDate }) => setDate);

    function prevMonth() {
        setDate(date.minus({ month: 1 }));
    }

    function nextMonth() {
        setDate(date.plus({ months: 1 }));
    }

    return (
        <h1>
            <button onClick={prevMonth}>Prev</button>
            <button onClick={nextMonth}>Next</button>
            {date.toFormat('MMMM yyyy')}
        </h1>
    );
};

export default CalendarHeader;