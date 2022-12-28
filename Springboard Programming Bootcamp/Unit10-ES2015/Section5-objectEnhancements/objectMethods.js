var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName " + "says bye!";
    }
  }

// ES 2015 Version:

const instructor = 
{
    firstName:"Colt",
    sayHi()
    {
        return "hi";
    },
    sayBye()
    {
        return this.firstName + "says bye!";
    }
}