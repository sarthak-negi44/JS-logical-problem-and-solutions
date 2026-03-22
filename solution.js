//Reverse a atring eithout using .reverse().
let str = "SARTHAK";
for(i= str.length-1; i>=0; i--)
    {
    console.log(`output of reverse string is ${str[i]}`)
}

//find the string is polindrome or not
let str = "racecar";
let b  = "";
for(i = str.length-1; i>=0;i--){
    b+=str[i];
}
if(b===str){
    console.log(`the value is polindrome`)
}
else{
    console.log(`the value is not polindrome`)
}
// find the largest number in array

let arr = [4,6,7,8,9,10,3,7];
let big = arr[0];
for(i= 1; i<arr.length; i++){
    if(big<arr[i]){
    big= arr[i]
    }
  
    }

  console.log(big)
//Count vowels in string

let vie = ["a",'e',"i","o","u"];
let str = "sarthak";
let coun = 0;
for ( let i=0; i<= str.length; i++){
    if(vie.includes(str[i])){
        coun += 1
    }
     
    
}
 console.log(coun);
