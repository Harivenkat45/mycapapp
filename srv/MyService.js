const cds = require('@sap/cds')

module.exports = class MyService extends cds.ApplicationService { init() {



  this.on ('harish', async (req) => {
    console.log('On harish', req.data)
    let name = req.data.name;
    return `Hi ${name} welcome to world of BTP CAPM.`
  })

  return super.init()
}}
