const db= require('../../../database/models')

const getAllUsers= async (req,res)=>{
    try {
        const {count, rows} = await db.users.findAndCountAll({
            include : [{
                association : 'role',
                attributes : ['name']
            },
            
             
            ],
            attributes: ['id','name','surname', 'email',]
        })

        const  users = rows.map(users => {
         
            return {
                ...users.dataValues ,
                detail : `${req.protocol}://${req.get('host')}/apis/users/${users.id}`,
               
            }
        })
     return  res.status(200).json({
    ok: true,
    count,
    users,

})

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'hubo un problemita, lo100to '
        })
    }
}
const getOneUsers= async (req,res) => {
    try {
        const users= await db.users.findByPk(req.params.id,{
            include : [{
                association : 'role',
                attributes : ['name']
            },
            
             
            ],
            attributes: ['id','name','surname', 'email',]
        })
       

        const usersCustom = {
            ...users.dataValues,
            role : users.role.name,
        }
        return res.status(200).json({
            ok:true ,
            users:usersCustom
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'hubo un problemita, lo100to '
        })
    }
}

const  changeRole = async (req,res)  => {
try {
    await db.users.update(
        {
        roleId:req.query.role
    },
    { 
        where: {id:req.params.id}
    }
    )
    return res.status(200).json({
        ok:true ,
        msg: 'Editado con exito'
    })
} catch (error) {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'hubo un problemita, lo100to '
    })
}
}







module.exports ={
    getAllUsers,
    getOneUsers,
    changeRole
}