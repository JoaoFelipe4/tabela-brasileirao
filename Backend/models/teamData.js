const mongoose = require('mongoose')

const teamScheama = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome:{type:String,required:true,unique:true},
    estadio:{type:Array,required:true}
},{timestamps:true})

module.exports = mongoose.model('team',teamScheama)