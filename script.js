function beforesubmit(){
    let outputdate = document.querySelector("outputdate");
    let inputdate = document.querySelector("inputdate");
    console.log("inputdate.value", inputdate.value); //This is on a string form and it has to be converted to (date) form...(en_NG)
    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-NG");
    outputdate.value = formatedDate;
}
