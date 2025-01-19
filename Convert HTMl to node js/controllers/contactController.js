const Contact = async(req,res)=>{
    const {name,email,password,message} = req.body
    try {
        await contactModel.create({name,email,password,message})
        res.redirect('/home')
    } catch (error) {
        res.send(error)
    }
}

module.exports = Contact