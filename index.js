const newArray =[]
function writeCards(name, event){
    for (let i = [0]; i< name.length; i++){
        
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);

    }
    return newArray;
}
//writeCards(["Charlie", "Samip", "Ali"], "birthday");
//console.log(newArray);

function countDown(int){
    while (int >= 0){
        console.log(int--);
    }
}


