const yargs =require("yargs")

yargs.command(
    {

        command:'add',
        descibe:'Add new note',
        handler : function(){

            console.log('Adding new note')
        }
    }

)
