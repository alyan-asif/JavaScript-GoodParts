async function ClassAlarm(){
    let AlarmPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Class is Over");
        },30 * 60 * 1000);
    });
    let message = await AlarmPromise;
    console.log(message)
}
ClassAlarm();