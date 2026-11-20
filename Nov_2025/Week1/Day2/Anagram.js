function checkStringAnagram(str1, str2){
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    console.log(str1);
    console.log(str2);
    
    

   let s1= str1.split("").sort().join("");
   let s2 = str2.split("").sort().join("");

   console.log(s1);
   console.log(s2);
   
   

return s1===s2;

}

console.log(checkStringAnagram("Listen","Silent"));
console.log(checkStringAnagram("Tiger","Lion"));