const fs=require('fs')


const loadNotes=()=>{
    const buffer=fs.readFileSync('notes.json')
    const dataStr=buffer.toString()

    const obj=JSON.parse(dataStr)
    return obj 
}

const addNotes=(title,author)=>{
    const notes=loadNotes()

    const duplicateNotes=notes.filter(note=>note.title===title)
    if(duplicateNotes.length==0){
        notes.push({
            title: title,
            author: author
        })
    }else{
        console.log("Error :  title already exist !!!");
    }
    saveNotes(notes)
}

const saveNotes=(notes)=>{
   const dataStr= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataStr)
}

const getAllNotes=()=>{
   const notes=loadNotes()
   notes.forEach(note => {
    console.log(note.title);
   });
}

const readANote=(title)=>{
    const notes=loadNotes()
  var note=  notes.find(note=>note.title===title)
    if(note){
        console.log(`title : ${title}  Author : ${note.author}`);
    }else{
        console.log("Note not found ");
    }
}

const removeNote=(title)=>{
const notes=loadNotes()
var findIndex=notes.findIndex(note=>note.title===title)
if(findIndex!==-1){
    notes.splice(findIndex,1)
}else{
    console.log("note Not found !!!");
}

// var note=notes.find(note=>note.title===title)
// if(note){
//     notes.pop(note)
//     console.log("removed !");
// }else{
//     console.log("Note not found ");
// }
saveNotes(notes)
}
module.exports={addNotes,getAllNotes,readANote,removeNote}