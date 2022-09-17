const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
    try{
      const data = await promiseTheaterIXX()
      const data2 = await promiseTheaterVGC()
        let i = 0
    data.forEach(datas => {
        if(datas.hasil ==  hasil){
          i++
        }
      })
    data2.forEach(data2s => {
        if(data2s.hasil ==  hasil){
          i++
        }
      })
      return i
    }
    catch(err){
      console.log(err)
    }
  // })
};
module.exports = {
  promiseOutput,
};
