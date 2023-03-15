// code your solution here
let activity;
function saturdayFun(activity ) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`}
@@ -8,9 +9,10 @@ function saturdayFun(activity ) {

}
//
function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`
let mondayActivity;
function mondayWork(mondayActivity) {
    if (mondayActivity) {
        return `This Monday, I will work from home.`
    }
    else{
        return 'This Monday, I will go to the office.'
    }
}
//
function wrapAdjective(symbol='*'){
    return function(word = "special") {
        return `You are ${symbol}${word}${symbol}!`

    }