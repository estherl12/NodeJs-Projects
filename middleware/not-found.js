const notFound = (req , resp) =>{
resp.status(404).send("Route doesnot exist")
}
module.exports = notFound ;