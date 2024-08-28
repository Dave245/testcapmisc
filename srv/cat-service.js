const cds = require('@sap/cds')
//const { loggers } = require('@sap/cds/lib/log/cds-log')
const logger = cds.log('Davidslog')

module.exports = cds.service.impl (async function() {

//    this.on("READ","Books", (req,...somestuff) => {
/*    this.on("READ","Books", req => {
        const { tenant, user } = req
        const { res } = req.http
    /*        console.log("tenant:", tenant)
            console.log("user:", user)
            console.log("res:", res)
    */        
//        console.log("somestuff:", somestuff)
//    })
    

    this.after("READ","Books", (data) => {
        logger("data: ", data)
        return [{ID: 1 }]
    })

    this.after ('READ',`Books`, (books)=>{
        logger("after handler: ", books)
    })

})