// the messages of the computer need to be pre-defined

const greetingMessage = "Hi Bruce 🐶, I'm happy to see you in the chat";
const messages = [
  "Q: What do you get when you cross a sheepdog with a rose? A: A collie-flower!",
  "I have no shame, I jumped out of the car window and got into the next car because the person was eating KFC chicken",
  "what are the cute things I could do for my human?",
  "I ate my human's homework",
  "I want to be a spokesdog"
];

let userName = "Bruce";
let autoName = "Cynthia";
let datetime = currentDatetime();
let colorBubbleAuto = "rgb(218, 218, 248)";

console.log(datetime);

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
    .text(datetime)
    .appendTo(newMessageBubble);

  $(".ChatContent").append(newMessageBubble);
  updateScroll();
}

sendMessage(autoName, greetingMessage, colorBubbleAuto);

$(".FormMessage").on("submit", function(event) {
  event.preventDefault();
  let messageBubble = $(".Message").val();
  sendMessage(userName, messageBubble);
  setTimeout(autoReply, 800);
});

let messagesIndex = 0;

//this functions returns the message in the messages array above, and it updates the array index every time the function is called
function autoReply() {
  if (messagesIndex === messages.length - 1) {
    sendMessage(autoName, messages[messagesIndex], colorBubbleAuto);
    messagesIndex = 0;
  } else {
    sendMessage(autoName, messages[messagesIndex], colorBubbleAuto);
    messagesIndex += 1;
  }
}

//I found help here https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up
function updateScroll() {
  const scrollPosition = $(".ChatContent")[0];
  scrollPosition.scrollTop = scrollPosition.scrollHeight;
}

/*
I found the solution for getting a small datetime for the exercise here
https://gist.github.com/MythRen/c4921735812dd2c0217a 
it could have been easily resolved with Date.toString(); but it was too long
to be displayed inside the chat bubble
*/
function currentDatetime() {
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
