function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// ES  2015 Version:

const createInstructor = (firstName, lastName) => 
{
    return 
    {
        firstName, lastName
    }
}