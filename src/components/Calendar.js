import React from "react";
import './Calendar.css';
import DoWRow from "./DoWRow";
import UIStore from "../store/UIStore";
import Tonalpohualli from "./Tonalpohualli";
import TwentyEightMansions from "./TwentyEeightMansions";

const Calendar = () => {

    const date = UIStore(({ date }) => date);
    const firstDayOfWeek = 6; // 0 - Monday, 6 - Sunday

    function _startOfWeek(d) {
        const days = (6 + d.weekday - firstDayOfWeek) % 7;
        return d.minus({days: days});
    }

    function _endOfWeek(d) {
        const days = (7 - d.weekday + firstDayOfWeek) % 7;
        return d.plus({days: days});
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
                let styles = ['day'];
                styles.push('day' + d.weekday); // from day1 (Monday) to day7 (Sunday)
                if (d < firstDateOfMonth || d > lastDateOfMonth) {
                    styles.push('outside');
                    return <td className={styles.join(' ')} key={dStr}></td>
                }
                return <td className={styles.join(' ')} key={dStr}>
                    <strong>{d.day}</strong>
                    <TwentyEightMansions date={d} />
                    <Tonalpohualli date={d} />
                </td>
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