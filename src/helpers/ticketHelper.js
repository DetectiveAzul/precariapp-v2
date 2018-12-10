export const dateGrabber = () => {
    const date = new Date();

    let dd = date.getDate();
    if (dd<10) dd = '0' + dd;

    let mm = date.getMonth()+1;
    if (mm<10) mm = '0' + mm;

    let yyyy = date.getFullYear();
    //Adding 0's

    let hh = date.getHours();
    if (hh<10) hh = '0' + hh;

    let mins = date.getMinutes();
    if (mins<10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs<10) secs = '0' + secs;


    return `${yyyy}-${mm}-${dd}, ${hh}:${mins}:${secs}`;
};