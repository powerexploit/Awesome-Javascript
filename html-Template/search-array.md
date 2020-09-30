# Search Array List:

This is simple program searches list of items from an array. It does search, item exist or not. If friend name exists in an array then when we start typing, javascript via **keyup** event displays their names. For example just type  _ankit_ or _Bob_ whatever matcehs with search term we see name list. Similarly, if we type _pumpkin_ there is no record of _pumpkin_ so naturally we not gonna see it.

My aim here to help beginners. I am tring to show the power of javasript, it is just 26 lines of code exculding _friendsList [...]_ variable lines. Wow! it does the job.

Open _search-array.html_ file in any browser that is located at root level of the project. _search-array.html_ file references _search-array.js_ file located at Basic-Scripts folder. 

How does this work? I love to explain process flow. If you are a seasoned programmer in any language reading following process flow would be waste of your time. Excuse me if I am overdoing it. Beginners need help that is my assumption. Just trying to give back to community whatever I know. **Hello, Beginners** if you find better way to improve this mini application feel free to ammend, add, remove, update whatever you like. There could be 101 ways of doing same thing. It is yours now. This is a learning process, please own it enjoy it & if you can contribute to those who are struggling. I struggle a lot in my life. 

### Search App Process Flow:

1. When user types any thing in search input box, it is picked up by javascript **keyup**    event, trims if there is any white spaces converts all to lowercase then assigned &       stored to variable name _searchTerm_ in js file line 41. 

2. Line 42 calls _searchFriend()_ function (declared defined line 27 to 36) that expects     a parameter. We pass our sanitized _searchTerm_ parameter for processing. 

3. We have created li variable assigned empty string at line 29.

4. Meat of application is just 5 lines of code my friends! It is between 30 and 35. It is    little bit compact. If you understand, then go away from beginner desk help others        at intermidiate or advance level. I think you could & you should. You might ask me why    the hell I am not gone then. I have been programming for a long time in microsoft dot     net world. I consider myself beginners at javascript world. That is the reason why I      am roaming around at the beginner's paltform. Believe me I am a newbee. You might see     me other area as well if I get a free time. 

5. At line 30 we have created variable name _doesFriendExist_. We have _friendsList[...]_    array that contains names of our good friends. In real life this kind of data either      comes from database or some kind of web api. But we are beginners right! so loading       statically in the same page to understand how it works. _friendsList_ array calls         javascript built in filter () method for each freind name in the list. Whatever           name, it changes to the lowercase (for example if it is 'Bob Williamstone' then           becomes 'bob williamstone') then calls chainded _includes()_ method that takes one        parameter called _term_. Remember, term is coming from what user types in textbox         converted to the lowercase at line 41 then passed in this function. My friends! now we    are comparing apple to apple right! Both are in lowercase. 

6. First of all, it looks search terms that exist in array name or not. Let me give a        example, if user types _'ank'_ it display two names. **Ankit Dobhal**, and **Frank        Zasirai**, why? because these two names includes ank 3 letters in both. That is all.      If we type _bob_ it displays one **Bob Williamstone** fair enough! That name get          populated into _doesFriendExist_ variable.

7. If search term greater than 3 letters then whatever loaded _doesFriendExist_ variable     passed to the list items to display at line 33. If there is none nothing will dispaly.

8. I added one button at the end **Clear All Search Again** just to clear all fields. So     user don't have to refresh the page. 

Here you go, my friends! 5 lines of code took this many lines to describe. What a heck! Not bad at all to understand how it works behind the secene. This is the power of javascript. Keep coding, keep learning. Good luck.