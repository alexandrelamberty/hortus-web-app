/**
 * Return a range of month numbers ie: 1 to 12
 * for an input in quarter of month ie: 1 to 48 
 */
export function monthQuarterToMonth(start,end) {
    let ratio = 4;
    return [Math.ceil(start/ratio), Math.ceil(end/ratio)];
}

export function isEqualOrBetween(value, start,end){
    console.log("isEqualOrBetween:",value, start,end)
    if(value>=start && value<=end)
        return true;
    else
        return false;
}