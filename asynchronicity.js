async function getProgramResult(){
    let runProgramPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("AWAIT RESULT");
        },2000);
    });
    let result = await runProgramPromise;
    console.log(result)
}
getProgramResult();

