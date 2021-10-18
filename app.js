const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
//console.log(validator.isEmail('helo@gmail.com'));
// console.log(chalk.green.underline.bold.bgRed.inverse("success!"));
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {

        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'lists all notes',
    handler()
    {
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})
// console.log(yargs.argv)
yargs.parse()