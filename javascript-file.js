// the messages of the computer need to be pre-defined

const greetingMessage = "Hi Bruce! I'm happy to see you in the chat";
const messages = [
  "Q: What do you get when you cross a sheepdog with a rose? A: A collie-flower!",
  "I have no shame, I jumped out of the car window and got into the next car because the person was eating KFC chicken",
  "what are the cute things I could do for my human?",
  "I ate my human's homework",
  "I want to be a spokesdog"
];

//these are the variables used in the global scope
let userName = "Bruce";
let autoName = "Cynthia";
let colorBubbleAuto = "rgb(218, 218, 248)";

/*
this function allows us to send the message in the bubble
1. it creates a new div that will be placed in the html document
2. adds the class to have the same look and feel as the automated messages, except color
3. it creates a 3 new spans, with classes and the params passed in the function
    and appends it to the div created in 1.
4. once everything is wrapped in the div, it's appended to  ChatContent 
5. updates scroll by calling the function
*/
function sendMessage(username, messageText, colorbubble) {
  let newMessageBubble = $("<div>")
    .addClass("ChatBubble")
    .css("background-color", colorbubble);

  $("<span>")
    .addClass("UserName")
    .text(username)
    .appendTo(newMessageBubble);
  $("<span>")
    .addClass("TextMessage")
    .text(messageText)
    .appendTo(newMessageBubble);
  $("<span>")
    .addClass("datetime")
    .text(datetime())
    .appendTo(newMessageBubble);

  $(".ChatContent").append(newMessageBubble);
  updateScroll();
}

/*
I found help here https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up
I understand thay it declares a new variable and equals it to the dom node needed (in our case Chat Content)
the scrollTop and scrollHeight properties are equaled in the next step
*/
function updateScroll() {
  const scrollPosition = $(".ChatContent")[0];
  scrollPosition.scrollTop = scrollPosition.scrollHeight;
}

//we send a welcoming message!
sendMessage(autoName, greetingMessage, colorBubbleAuto);

/*
this function will be calle in the two next steps.
1. we create a new variable called messageBubble that takes the value of the jQuery object
2. we call the function sendMessage explained above
3. we also want to delay autoReply (since it looked like Cynthia could read our minds!)
   found help here https://www.w3schools.com/jsref/met_win_settimeout.asp
4. we make the textarea clean again
Note for assignment: I didn't think about creating this function from the start
When I saw I needed to reuse this code in two other places, I decided to wrap it up here 
so it can be reused whenever we need */
function grabTextInArea() {
  let messageBubble = $(".Message").val();
  sendMessage(userName, messageBubble);
  setTimeout(autoReply, 800);
  $(".Message").val("");
}

/*
on click we want to send the message in the text area
we want to prevent the default behavior of the form (reload)
call aforementioned function */

$(".FormMessage").on("submit", function(event) {
  event.preventDefault();
  grabTextInArea();
});

/*
I thought it would be nice to press enter and send the message :)
I found some help here https://api.jquery.com/keydown/
also I found out that default behavior of a textArea is to "write" in it
so we call preventDefault inside the if(){} statement because we want to prevent 
the enter to be written down in the text area
*/
$(".Message").on("keydown", function(event) {
  if (event.which === 13) {
    event.preventDefault();
    grabTextInArea();
  }
});

/*this functions returns the message in the messages array above, 
and it updates the array index every time the function is called*/

let messagesIndex = 0;

function autoReply() {
  if (messagesIndex === messages.length - 1) {
    sendMessage(autoName, messages[messagesIndex], colorBubbleAuto);
    messagesIndex = 0;
  } else {
    sendMessage(autoName, messages[messagesIndex], colorBubbleAuto);
    messagesIndex += 1;
  }
}

/*
I found the solution for getting a small datetime for the exercise here
https://gist.github.com/MythRen/c4921735812dd2c0217a 
it could have been easily resolved with Date.toString(); but it was too long
to be displayed inside the chat bubble
*/
function datetime() {
  let date = new Date();
  let aaaa = date.getUTCFullYear();
  let gg = date.getUTCDate();
  let mm = date.getUTCMonth() + 1;

  if (gg < 10) gg = "0" + gg;

  if (mm < 10) mm = "0" + mm;

  let cur_day = aaaa + "-" + mm + "-" + gg;

  let hours = date.getUTCHours() + 1;
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();

  if (hours < 10) hours = "0" + hours;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  return cur_day + " " + hours + ":" + minutes + ":" + seconds;
}
