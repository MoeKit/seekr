var mongoose = require('mongoose');
var userSchema = mongoose.schema({
    uid:Number, // uid
    username: String, // 用户名
    created_at:Date, //注册时间
    last_login_at: Date, // 最新登录时间,
    email: String // 邮箱
});

// 创建用户
userSchema.static.createUser = function(){
    
};

// 查找重复



module.exports = mongoose.model('user',userSchema);