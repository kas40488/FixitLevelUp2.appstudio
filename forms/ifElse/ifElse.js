
// message and state abbreviation arrays
let messages = ['Wear a warm coat, hat, scarf and gloves.', 'Wear a warm coat, but you won\'t need a hat, scarf or gloves.', 'Wear a light jacket and smile!', 'Wear a less heavy coat.', 'Oops, something happened. Please try again.']
let stateName = ['NE', 'FL']

// name prompt
let name = prompt('Please enter your name')
updatedName = (name[0].toUpperCase() + name.slice(1));
console.log(updatedName)

// state prompt
let state = prompt('Enter your state abbreviation')
console.log(state.toUpperCase());

// temperature prompt
let temp = Number(prompt('Enter the temperature in Farenheit'));

// output based on the user input
// output based on the user input
if (state.toUpperCase() == stateName[0] && temp < 32) {
    NSB.MsgBox(`${updatedName}, you are from ${state.toUpperCase()} \and it \is currently ${temp} degrees, ${messages[0]}`)
// Original: (updatedName + ', the state you entered is ' + state.toUpperCase() + ', and the temperature is: ' + temp + '. ' + messages[0])

} else if(state.toUpperCase() == stateName[0] && 32 <= temp && temp <= 50) {
    NSB.MsgBox(`${updatedName}, you are from ${state.toUpperCase()} \and it \is currently ${temp} degrees, ${messages[1]}`)
// Original: (updatedName + ', the state you entered is ' + state.toUpperCase() + ', and the temperature is: ' + temp + '. ' + messages[1])

} else if(state.toUpperCase() == stateName[1] && 50 <= temp && temp <= 70) {
    NSB.MsgBox(`${updatedName}, you are from ${state.toUpperCase()} \and it \is currently ${temp} degrees, ${messages[2]}`)
// Original: (updatedName + ', the state you entered is ' + state.toUpperCase() + ', and the temperature is: ' + temp + '. ' + messages[2])

} else if(state.toUpperCase() == stateName[1] && 32 <= temp && temp < 50) {
    NSB.MsgBox(`${updatedName}, you are from ${state.toUpperCase()} \and it \is currently ${temp} degrees, ${messages[3]}`)
// Original: (updatedName + ', the state you entered is ' + state.toUpperCase() + ', and the temperature is: ' + temp + '. ' + messages[3])

} else {
    NSB.MsgBox(messages[4])
}




