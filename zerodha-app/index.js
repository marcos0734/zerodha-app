var arr = [];
var noi = prompt("enter the number of item you wanna input")
    for (var i = 0; i < noi; i++) {          
        arr.push(prompt('Enter your name')); 
    }
    console.log(arr);

    var even =[];
    var odd = [];

    arr.forEach(arr=> {
        if (arr %2 == 0){
            console.log(even.push(arr))
        }

        else{
            console.log(odd.push(arr))
        }
    }
    
    )