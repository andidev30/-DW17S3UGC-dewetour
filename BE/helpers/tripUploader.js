const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const filters = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }else {
        cb(null, false)
    }
}

const upload = multer({
    storage,
    fileFilter: filters
})

exports.tripUploader = upload.array('image', 3)
// exports.tripUploader = upload.single('image')