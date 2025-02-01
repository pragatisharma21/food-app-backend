export const testusercontroller = (req, res)=>{
try {
    res.send("<h1> user data </h1>")
} catch (error) {
    console.log(error.message)
}
   

}