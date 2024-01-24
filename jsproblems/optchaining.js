const student={
    name:"Athira",
    age:23,
    address:{
        place:"Thrissur",
        location:{
            pin:3423,
            Area:"Amballur"
        },
        

    },
}
    const post = student.address?.location;
    console.log(post);