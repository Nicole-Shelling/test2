
const {Router, response}= require('express')
const Todo=require('C:/test2/models/Todo')
const Group=require('C:/test2/models/Group')
const Table=require('C:/test2/models/Table')
const router=Router()
var Name
router.get('/index',async(req,res)=>{
    const todos=await Todo.find({}).lean()
    const keysOld=await Table.find({}).lean()
    const key=keysOld[0].Users
    res.render('index',{
        title: "main list",
        isIndex: true,
        todos,
        key
    })
})
router.get('/create',async(req,res)=>{
    const groups=await Group.find({}).lean()
    res.render('create',{
        title: "create samth",
        isCreate: true,
        groups
    })
})

router.get('/',async(req,res)=>{
    const groups=await Group.find({}).lean()
    res.render('first',{
        title: "start page",
        groups
    })
})

router.get('/group',async(req,res)=>{
    const group2 = await Group.findOne({Name: Name}).lean();
    const group=group2.Users

    res.render('group',{
        title: "add new",
        group,
    })
})

router.get('/newGroup',async(req,res)=>{
    const group2 = await Group.findOne({Name: Name}).lean();
    const group=group2.Users

    res.render('newGroup',{
        title: "find new",
        group,
    })
})

router.get('/result',async(req,res)=>{
    res.render('result',{
        title: "result",
    })
})

router.post('/result', async(req,res)=>{
    const groupName=req.body.group1;
    const roleX2=req.body.roleX;
    const keyX2=req.body.keyX;
    var NumberX=req.body.numberX; 
    const group = await Group.findOne({Name: groupName}); 
    NumberX=group.Users.length-NumberX-1;
    group.Users[NumberX].role=roleX2;
    group.Users[NumberX].keys=keyX2;
    await group.save()
    res.redirect('/')
})

router.post('/create', async(req,res)=>{
    if(req.body.id123==0){
    const group =new Group({
        Name:req.body.newName

    })
    await group.save()
    res.redirect('/create')
    }
    else{
    Name=req.body.id123
     res.redirect('/group')   
    }
})

router.post('/group', async(req,res)=>{
    if(req.body.id123==0){
    const group = await Group.findById(req.body.id);
    const men={userName:req.body.newName, role:"https://cdn-icons-png.flaticon.com/128/43/43869.png", work:req.body.groupX, keys:"Null Null"};
      group.Users.push(men)
     await group.save()
    res.redirect('/group')}
    else{
        res.redirect('/newGroup')    
    }
})

router.post('/', (req,res)=>{
    res.redirect('/index')  
})

module.exports=router