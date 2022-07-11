// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var x =0; x<contacts.length; x++){
    if (contacts[x].firstName === firstName){
        for (var keys in contacts[x]){
          if (keys === prop){
            return contacts[x][prop];
          } 
        } 
        return "No such property";
      }
    }  
return "No such contact";
}