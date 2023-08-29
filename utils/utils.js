function getDate(){
let date = new Date()
let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
}
return date.toLocaleDateString("en-us",options)
}

exports.getDate = getDate