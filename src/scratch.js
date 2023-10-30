function firstResponse() {
    console.log("Who is there?")
}
function secondResponse(name) {
    console.log(`${name} who?`)
} 
function badJoke(firstResponseHandler, secondResponseHandler) {
    console.log("Knock, knock.");
    firstResponseHandler();
    console.log("Nobel.");
    secondResponseHandler("Nobel");
    console.log("Nobel...that's why I knocked.");
}

console.log(badJoke(firstResponse, secondResponse))