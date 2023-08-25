const {User, Plan, Board, Comment, Notice} = require("../models")

// 로그인 유저 정보
exports.getUserInfo = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

// 유저 정보 수정
exports.updateUserInfo = async (req, res) => {
    console.log("들어옴?")
    try {
        const {front_id} = req.decoded;
        const {nickname} = req.body;
        const profileImg = req.files[0].filename;
        console.log(req.files)
        console.log(profileImg)
        await User.update({nickname : nickname, profile_img : profileImg}, {where : {user_id : front_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}

// 로그인 유저가 만든 일정
exports.getUserPlan = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})
        const planAll = await Plan.findAll({where : {user_id : user.id}})
        res.json(planAll);
    } catch (error) {
        console.log(error);
    }
}

// 로그인 유저가 쓴 게시글
exports.getUserReview = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})
        const reviewAll = await Board.findAll({where : {user_id : user.id}})
        res.json(reviewAll);
    } catch (error) {
        console.log(error);
    }
}

// 로그인 유저가 쓴 댓글
exports.getUserComment = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})

        const commentAll = await Comment.findAll({where : {user_id : user.id}})
        res.json(commentAll);
    } catch (error) {
        console.log(error);
    }
}

// 로그인 유저가 받은 알림
exports.getUserNotice = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})

        const noticeAll = await Notice.findAll({where : {
            receiver : user.id,
            is_confirm : false
        }})
        res.json(noticeAll);
    } catch (error) {
        console.log(error);
    }
}