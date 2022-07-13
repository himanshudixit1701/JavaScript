                                //    MAP method in JavaScript

const users = [
    {
        fname: 'Jhon',
        lname: 'Doe'

    },
    {
        fname: 'Jane',
        lname: 'Doe'
    }
];

      const finalUsers = users.map((user) => {
        return{
            fullname: user.fname +' '+ user.lname
        };
      } );

      console.log(finalUsers);
