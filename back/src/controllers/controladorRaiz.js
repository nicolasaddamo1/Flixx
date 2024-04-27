const getHome = (req, res) => {
    res
        .status(200)
        .send('Estas en el get de la ruta raiz');    
}
const postHome = (req, res) => {
    res
        .status(200)
        .send('Estas en el post de la ruta raiz');    
}
module.exports = {getHome, postHome};