const router = require("express").Router();
const {isLogin} = require("../controllers/isLogin")
const multer = require("multer")
const {getUserInfo, updateUserInfo, getUserPlan, getUserReview, getUserComment, getUserNotice} = require("../controllers/mypageControllers")

// Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("..",'front', "public","imgs","profiles"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname)
      cb(null,  uniqueSuffix + fileExtension);
    },
});
  
const upload = multer({ storage: storage });


router.get("/getInfo", isLogin, getUserInfo)
router.post("/updateInfo", isLogin, upload.array("uploadedFiles", 5), updateUserInfo)

router.get("/getPlan", isLogin, getUserPlan);
router.get("/getReview", isLogin, getUserReview);
router.get("/getComment", isLogin, getUserComment);
router.get("/getNotice", isLogin, getUserNotice);

module.exports = router;