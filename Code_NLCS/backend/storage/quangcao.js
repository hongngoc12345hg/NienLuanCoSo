const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'hinhanh/quangcao');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const uploadQC = multer({storage: storage});
module.exports = uploadQC