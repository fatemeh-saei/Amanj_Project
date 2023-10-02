const students =[
    {
        name : "fatemeh",
        score : 20
    },
    {
        name : "aidin",
        score : 10
    },
    {
        name : "pouria",
        score : 20
    },
    {
        name : "sara",
        score : 7
    }
];

for(let student of students){
    if(student.score > 10){
        console.log("Name:", student.name, "Score:", student.score, "Result", "pass");
    } else if(student.score ===10){
        console.log("Name:", student.name, "Score:", student.score, "Result", "oooh");
    } else{
        console.log("Name:", student.name, "Score:", student.score, "Result", "faild");
    }  
};