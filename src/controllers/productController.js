
exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
}

exports.getById = (req, res) => {
    var id = req.params.id;
    res.status(200).send(id);
}

exports.post = (req, res) => {
    console.log(req.body);
    res.send('Requisição recebida com sucesso!');
}