//Controller Function
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //validate input
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    let fizzBuzz = [];
    //second step of validation
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //generate array with replaced values
        let fizzBuzzArray = generateArray(fizzValue,buzzValue);
        fizzBuzz = fizzBuzzArray;
    }
    else{
        alert("You Must Enter Integers")
    }
    displayNumbers(fizzBuzz);
}

//Logic Function
//GENERATE ARRAY
function generateArray(fizzValue,buzzValue){
    let fizzBuzzArray = [];
    tempValue = 1;
    for (let index = 0; index < 100; index++) {
        if (tempValue % fizzValue == 0 && tempValue % buzzValue == 0) {
            fizzBuzzArray[index] = "FizzBuzz";
            tempValue++;
        }
        else if(tempValue % fizzValue == 0){
            fizzBuzzArray[index] = "Fizz";
            tempValue++;
        }
        else if(tempValue % buzzValue == 0){
            fizzBuzzArray[index] = "Buzz";
            tempValue++;
        }
        else{
            fizzBuzzArray[index] = tempValue;
            tempValue++;
        }
    }
    return fizzBuzzArray;
}

//Display Function
function displayNumbers(fizzBuzz){
   //document.write(fizzBuzz);
   let templateRows = "";
   let count = 0;
   let displayClasses =["Fizz", "Buzz", "FizzBuzz"];
   //setting boolean to false, if the indexed value is included in displayClasses
   //true value means alternate styling will be applied
   let inDisplayClasses = "";
   let className = "";
   for (let index = 0; index < fizzBuzz.length; index++) {
        let number = fizzBuzz[index];
        inDisplayClasses = displayClasses.includes(number);
        if (inDisplayClasses) {
            className = lowercaseFirstLetter(number);
            if (count == 0) {
                templateRows += `<tr><td class="${className}">${number}</td>`
                count++;
            }
            else if(count == 4){
                templateRows += `<td class="${className}">${number}</td></tr>`
                count = 0;
            }
            else{
                templateRows += `<td class="${className}">${number}</td>`
                count++;
            }   
        } 
        else {
            className = "general";
            if (count == 0) {
                templateRows += `<tr><td class="${className}">${number}</td>`
                count++;
            }
            else if(count == 4){
                templateRows += `<td class="${className}">${number}</td></tr>`
                count = 0;
            }
            else{
                templateRows += `<td class="${className}">${number}</td>`
                count++;
            } 
        }


   }

   document.getElementById("results").innerHTML = templateRows;
}

function lowercaseFirstLetter(word){
    return word.charAt(0).toLowerCase() + word.slice(1);
}