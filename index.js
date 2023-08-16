// const data=require('./app.js')
const fs =require('fs')
const readline=require('readline')
const eventEmitter=require('events')

// ------------Watch and WatchFile Module-------------------

// fs.watch('DemoFile.txt',(eventType,filename)=>{
//     console.log(`the file ${filename} was modified `);
//     console.log(`the type of change was : ${eventType} `);
// })



// setTimeout(
//     ()=>{
//             fs.writeFileSync('DemoFile.txt','My name is Ahsan')
//     },1000
// )


// ---------------Sreams and buffer -------------------


// ----------------Readable Stream ----------------
// ******** Without Pause (Flowing Mode) **********


// const readableStream=fs.createReadStream('DemoFile.txt','utf8');

// readableStream.on('data',function(data){
//     console.log(data);
// });

// readableStream.on('end',()=>{
//     console.log("End of Function reached !!");
// })

// *********** With Pause (Paused Mode) *********

// const readableStream=fs.createReadStream('DemoFile.txt','utf-8')

// var data="";
// var chunk=""
// readableStream.on('readable',function(){
//     while ((chunk=readableStream.read())!=null) {
//         data+=chunk;
//     }
// })

// readableStream.on('end',()=>{
//     console.log(data);
// })


// ----------------Writable Stream ----------------

// const readableStream=fs.createReadStream('DemoFile.txt')
// const writeableStream=fs.createWriteStream('DemoFile1.txt')

// readableStream.setEncoding('utf-8')

// readableStream.on('data',(chunk)=>{
// writeableStream.write(chunk)
// })


// ------------ReadLine() Module-----------

const file=readline.createInterface({
    input: fs.createReadStream('DemoFile.txt'),output:process.stdout
})

file.on('line',(line)=>{
    console.log('reading line',line);
    file.close()
})

// ---------------- Buffer -----------------

// const buffer1=Buffer.alloc(100)
// buffer1.write('Happy Independence Day !!!')

// const output=buffer1.toString('utf-8')
// console.log(output);

// console.log(Buffer.isBuffer(buffer1));
// console.log(buffer1.length);
// console.log();



// ----------------Event Emitter-----------------

const emitter =new eventEmitter()

emitter.once('messageLogged',()=>{
console.log('User has logged a messageg ');
});

emitter.emit('messageLogged');
emitter.emit('messageLogged');