import { useEffect } from "react";
import { isEqualOrBetween } from "../utils/Utils";
import { Month } from "./Month";

export function MonthRange({start,end}){
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    return (
        <div className="flex flex-row m-2">
            {months.map((month) => (
                <Month id={month} name="" selected={isEqualOrBetween(month,start,end)} />
            ))}
        </div>
    );
}