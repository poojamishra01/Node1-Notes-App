const fs=require('fs')
const chalk=require('chalk')
const addNote=(title,body)=>
{
   const notes=loadNotes()
  //creating a new duplicatenotes array which is subset of notes array
  //if it returns true .filter() is going to keep that object into duplicate array
  //filter function will be called for each object in the notes array
   //const duplicateNotes=notes.filter((note)=> note.title===title)
   const duplicateNote=notes.find((note)=> note.title===title)//it beaks at first match//return undefined if no match found else return matched object
   debugger
   if(!duplicateNote)   //if(duplicateNote===undefined)
   {
    notes.push({
    title:title,
    body:body
        })
   saveNotes(notes)
   console.log(chalk.green('note added successfully!'))
    }
    else{
        console.log(chalk.red("Tiltle already taken!"))
    }
}
const saveNotes=(notes)=>
{
 const dataJSON=JSON.stringify(notes)
 fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>
{
    try{
    const databuffer= fs.readFileSync('notes.json')
    const  notesJSON=databuffer.toString()
    return JSON.parse(notesJSON)
    }
    catch(e)
    {
        return []
    }
}

const removeNote=(title)=>
{
    const notesArray=loadNotes()
    const toKeep_Array=notesArray.filter((note)=>note.title!=title)

    if(notesArray.length > toKeep_Array.length)
    {
        saveNotes(toKeep_Array)
        console.log(chalk.bold.green('Notes Removed!'))
    }
    else{
        console.log(chalk.bold.red('No Notes found to remove!'))
    }
}
const listNotes=()=>
{
    console.log(chalk.blue('Your notes : '))
    const notesArray=loadNotes()
    notesArray.forEach((note)=>console.log(note.title))
}
const readNote=(title)=>{
    const notesArray=loadNotes()
    const note=notesArray.find((note)=> note.title===title)
    if(note)
    {
        console.log(chalk.blue(note.title))
        console.log(chalk.blue(note.body))
    }
    else
    {
        console.log(chalk.red('No such note with provided title!'))
    }
}
module.exports={
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}