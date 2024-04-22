import React from "react";
import DoWRow from "./DoWRow";
import UIStore from "../store/UIStore";

const Calendar = () => {

    const date = UIStore(({ date }) => date);
    const firstDayOfWeek = 6; // 0 - Monday, 6 - Sunday

    function _startOfWeek(d) {
        const days = (6 + d.weekday - firstDayOfWeek) % 7;
        return d.minus({ days: days });
    }

    function _endOfWeek(d) {
        const days = (7 - d.weekday + firstDayOfWeek) % 7;
        return d.plus({ days: days });
    }

    function renderMonth() {
        const firstDateOfMonth = date.startOf('month'),
            lastDateOfMonth = date.endOf('month'),
            firstDisplayDate = _startOfWeek(firstDateOfMonth),
            lastDisplayDate = _endOfWeek(lastDateOfMonth),
            weeksCount = Math.round(lastDisplayDate.diff(firstDisplayDate, 'weeks').weeks);
        const weeks = Array.from({length: weeksCount}, (_, i) => {
            const week = Array.from({length: 7}, (_, j) => {
                const d = firstDisplayDate.plus({days: i * 7 + j});
                const dStr = d.toISODate();
                if (d < firstDateOfMonth || d > lastDateOfMonth) {
                    return <td className="outside" key={dStr}></td>
                }
                return <td key={dStr}>{d.day}</td>
            });
            return <tr key={i}>{week}</tr>
        });
        return weeks;
    }

    return (
        <table>
            <thead>
            <DoWRow />
            </thead>
            <tbody>
                {renderMonth()}
            </tbody>
        </table>
    );
};

export default Calendar;