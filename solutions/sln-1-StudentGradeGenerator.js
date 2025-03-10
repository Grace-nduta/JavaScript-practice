function studentGradeGenerator(){   
    const marks=parseFloat(prompt("Enter the student marks"))
    if (marks>79){
        console.log("Grade: A")
    }else if(marks>=60 && marks<=79){
        console.log("Grade: B")
    }else if(marks>=59 && marks <=49){
        console.log("Grade: C")
    }else if (marks>=40 && marks<=49){
        console.log("Grade D")
    }else {
        console.log("Grade: E")
     }
        
    }