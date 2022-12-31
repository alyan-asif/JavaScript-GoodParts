function publishSubscribeExamResults(){
    const subscribers = [];
    return{
        subscribe: function(subscriber){
            subscribers.push(subscriber)
        },
        publish: function(message){
            subscribers.forEach(function(subscriber){
                subscriber(message)
            })
        }
    }
}
const examResult = publishSubscribeExamResults();

examResult.subscribe(function(message){
    console.log(`Muhammad Alyan Recieved a Message:  ${message}`)
});
examResult.subscribe(function(message){
    console.log(`Rohail Recieved a Message:  ${message}`)
});
examResult.subscribe(function(message){
    console.log(`Hussain Recieved a Message:  ${message}`)
});
examResult.publish("Exams Result Has Been Displayed!")
