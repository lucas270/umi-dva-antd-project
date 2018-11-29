
const shoppingWZ={data:["天猫","京东","苏宁","唯品会"]};
const users={lucy:{age:28,car:"宝马",job:"律师"},jack:{age:28,car:"大众",job:"工人"},jonh:{age:38,car:"路虎",job:"老板"}}

 export default {
    'GET mock/shopping':shoppingWZ,
    'GET mock/users':(req,res)=>{
        res.status('200').send(users)
    },
    'POST mock/sex':(req,res)=>{
        res.status('200').send()
    },
}