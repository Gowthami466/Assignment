
// Declare a global constant
const browserVersion = "Chrome";

// Create a function
function getBrowserVersion(){

    // Check whether the browser is Chrome
    if (browserVersion === "Chrome") {

        // Declare a local variable using var
        var localBrowserVersion = "Edge";

        // Declare a local variable using let
        //let localBrowserVersion = "Edge";

        console.log("Inside if block:", localBrowserVersion);
    }

    // Access the var variable outside the if block
    console.log("Outside if block:", localBrowserVersion);
}

// Call the function
getBrowserVersion();
