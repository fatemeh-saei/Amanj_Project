const students =[
    {
        name: "ali",
        score: 19
    },
    {
        name: "fatemeh",
        score: 20
    },
    {
        name: "abbas",
        score: 12
    },
];

for(let student of students){
    if(student.score >= 17){
        console.log(student.name, "passed by", student.score);
    }else{
        console.log(student.name, "failed by", student.score);
    }
}

