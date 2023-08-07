const Sequelize = require("sequelize");
const config = require("./config");

const { User } = require("./Users");
const { Board } = require("./Board");
const { Comment } = require("./Comment");
const { LikeBoard } = require("./LikeBoard");
const { Attraction } = require("./Attraction");
const { LikeComment } = require("./LikeComment");
const { LikeRecomment } = require("./LikeRecomment");
const { Recomment } = require("./Recomment");
const { Plan } = require("./Plan");
const { Notice } = require("./Notice");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;

db.User = User;
db.Board = Board;
db.Comment = Comment;
db.LikeBoard = LikeBoard;
db.Attraction = Attraction;
db.LikeComment = LikeComment;
db.LikeRecomment = LikeRecomment;
db.Recomment = Recomment;
db.Plan = Plan;
db.Notice = Notice;
User.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);
LikeBoard.init(sequelize);
Attraction.init(sequelize);
LikeComment.init(sequelize);
LikeRecomment.init(sequelize);
Recomment.init(sequelize);
Plan.init(sequelize);
Notice.init(sequelize);

User.associate(db);
Board.associate(db);
Comment.associate(db);
LikeBoard.associate(db);
Attraction.associate(db);
LikeComment.associate(db);
LikeRecomment.associate(db);
Recomment.associate(db);
Plan.associate(db);

module.exports = db;