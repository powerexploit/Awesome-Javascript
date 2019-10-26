# Digital Watch Process Flow

User can open *digital-watch.html* file in any browser that is located at root level of the project. *digital-watch.html* file references *digital-watch.js* file located at Basic-Scripts folder. When browser opens html file loads js file. 

Following basic process flow, we learn from this basic program.
- [x] At line 2 of js file creating a js built in *Date Object*. It does Nothig. only           shows how to create date object.
- [x] At line 3 js code references where clock should be displyed in html file via              querySelector() built in method.
- [x] At line 5 *tick = () => {...})* ES6 arrow function has declared & defined. There is       date object variable named *now* has has declared. There are other hour, minutes,         & seconds named variables are defined line 7 to 9. They hold current day/time hour,       minutes & seconds values from now date object.
- [x] On line 10 to 14 we are creating string literal to dispaly hour, minutes, seconds.
- [x] At line 13, remember we have container div that has class name '.digital-clock' in        html file which we assigned to *_clock* varialble and saying hey clock your inner         html is our assigned hour, minutes, seconds. Here you go and display please.
- [x] At line 17, javascript built in async function 'setInterval()' (don't worry about         at this time if async is foreign to you, there will be pleanty of time you gonna          know it) just think, it calls every seconds tick() function to create date object         to handover hour, minutes, & seconds to div class 'digital-clock' container. 

If you know all these steps I explained above, pat your back yourself, you are headed to become a **JavaScript GURU** congratulation. Sorry! If I made you to read this. This is meant for beginner. I was also beginner in past, nobody out there explained me like this. Hope, I helped little bit for beginner who will be a great JS programmer in future.

