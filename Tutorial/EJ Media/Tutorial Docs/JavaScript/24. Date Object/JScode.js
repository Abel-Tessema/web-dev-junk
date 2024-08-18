var todayDate = new Date ();

document.write (todayDate + "<br> <br>");
document.write (todayDate.toDateString () + "<br> <br>");


todayDate.setYear (6969);
todayDate.setMonth (3);
todayDate.setDate (20);
todayDate.setHours (0);
todayDate.setMinutes (69);
todayDate.setSeconds (0);
todayDate.setMilliseconds (0);

document.write (todayDate + "<br> <br>");
document.write (todayDate.toDateString () + "<br> <br>");