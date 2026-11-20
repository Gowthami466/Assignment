//Conditional Statements for switch

function browserName(s1)
{
if (s1=="chrome"){
    console.log("chrome browser")
}else{
    console.log("not a chrome browser")
}
}
//swithch statement
function testType(s2){
    switch(s2)
    {
        case "smoke":
            console.log("smoke testing");
            break
        case "sanity":
            console.log("sanity testing");
                break
        case "regression":
            console.log("regression testing");
                    break
                    default:
            console.log("default smoke");

    }
}

browserName("chrome")
testType("default")


//swithch statement


