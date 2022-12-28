function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
  // Your name is Alejandro and you like purple - no output
  getUserData({firstName: "Melissa"}) 
  // Your name is Melissa and you like green - no output
  getUserData({}) 
  // Your name is undefined and you like green - no output