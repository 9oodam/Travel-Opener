const {User} = require("../models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.loginClick = async (req, res)=>{
    try {
        // front에서 보내는 id와 pw value값
        if(req.body == undefined){
            console.log("널");
        }
        console.log(req.body);
        // const front_id = req.body.user_id;
        // const front_pw = req.body.user_pw;

        // console.log(front_id);
        // console.log(front_pw);
        
        // const useridExist = await User.findOne({where:{user_id : front_id}});
        // if(useridExist == null){
        //     res.json("id_non-existent");
        //     // 프론트쪽에서 받아서 alert 를 띄우거나 경고창을 따로 띄워주기
        // }
        // else{
        //     const same = bcrypt.compareSync(front_pw, useridExist.user_pw);
    
        //     if(same){
        //         let token = jwt.sign({
        //             front_id,
        //         },process.env.ACCESS_TOKEN_KEY,{
        //             expiresIn : "30m"
        //         });
        //         res.json("login_success");
        //         // 프론트쪽에서 받아서 화면 전환시킬것.
        //     }else{
        //         res.json("id_exist_but_pw_wrong");
        //         // 프론트쪽에서 받아서 alert를 띄워주거나 경고창 따로 띄워주기
        //     }
        // }
    } catch (error) {
        console.log(error);
    }
}
