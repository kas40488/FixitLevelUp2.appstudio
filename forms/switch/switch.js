
// message and state abbreviation arrays
let messagesS = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat, but you won\'t need a hat, scarf or gloves.', 'wear a light jacket and smile!', 'wear a less heavy coat.', 'Oops, something happened. Please try again.']
let stateNameS = ['NE', 'FL']

// name prompt
let nameS = prompt('Please enter your name')
updatedNameS = (nameS[0].toUpperCase() + nameS.slice(1));
console.log(updatedNameS)

// state prompt
let stateS = prompt('Enter your state abbreviation')
console.log(stateS.toUpperCase());

// temperature prompt
let tempS = Number(prompt('Enter the temperature in Farenheit'));

// output based on the user input
switch(true) {
  case (stateS.toUpperCase() == stateNameS[0] && tempS < 32):
    NSB.MsgBox(`${updatedNameS}, you are from ${stateS.toUpperCase()} \and it \is currently ${tempS} degrees, ${messagesS[0]}`)
    break
  case (stateS.toUpperCase() == stateNameS[0] && 32 <= tempS && tempS <= 50):
   NSB.MsgBox(`${updatedNameS}, you are from ${stateS.toUpperCase()} \and it \is currently ${tempS} degrees, ${messagesS[1]}`)
    break
  case (stateS.toUpperCase() == stateNameS[1] && 50 <= tempS && tempS <= 70):
    NSB.MsgBox(`${updatedNameS}, you are from ${stateS.toUpperCase()} \and it \is currently ${tempS} degrees, ${messagesS[2]}`)
    break
  case (stateS.toUpperCase() == stateNameS[1] && 32 <= tempS && tempS < 50):
    NSB.MsgBox(`${updatedNameS}, you are from ${stateS.toUpperCase()} \and it \is currently ${tempS} degrees, ${messagesS[3]}`)
    break
  default:
    NSB.MsgBox(messagesS[4])
}
