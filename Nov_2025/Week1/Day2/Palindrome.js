function checkPalindrome(str){
    let characters=str.split("");
     let reversedString = "";

    for(let i=characters.length-1;i>=0;i-- ){
        reversedString = reversedString + characters[i];
    }
if(str===reversedString){
    console.log(str + " is a palindrome")
}
else{
    console.log(str + " is not a palindrome");
    
}


}

checkPalindrome("malayalam");
