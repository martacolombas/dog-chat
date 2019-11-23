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
let messagesIndex = 0;
const datetime = currentDatetime();

console.log(datetime);

// const autoMessages = () =>{
//     (for let i = 0; i)
// }

function sendAutoMessage(username, messageText) {
  let newChatBubble = $("<div>").addClass("ChatBubble");

  $("<span>")
    .addClass("UserName")
    .text(username)
    .appendTo(newChatBubble);
  $("<span>")
    .addClass("TextMessage")
    .text(messageText)
    .appendTo(newChatBubble);
  $("<span>")
    .addClass("datetime")
    .text(datetime)
    .appendTo(newChatBubble);

  $(".ChatContent").append(newChatBubble);
}

sendAutoMessage(autoName, greetingMessage);

/*
I found the solution for getting a small datetime for the exercise here
https://gist.github.com/MythRen/c4921735812dd2c0217a 
it could have been easily resolved with Date.toString(); but it was too long
to be displayed inside the chat bubble
*/
function currentDatetime() {
  const date = new Date();
  const aaaa = date.getUTCFullYear();
  const gg = date.getUTCDate();
  const mm = date.getUTCMonth() + 1;

  if (gg < 10) gg = "0" + gg;

  if (mm < 10) mm = "0" + mm;

  const cur_day = aaaa + "-" + mm + "-" + gg;

  const hours = date.getUTCHours() + 1;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  if (hours < 10) hours = "0" + hours;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  return cur_day + " " + hours + ":" + minutes + ":" + seconds;
}
