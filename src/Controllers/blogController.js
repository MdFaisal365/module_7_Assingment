exports.create = async (req, res) => {
    // res.status(200).end(json({status:"success", data: "Can contain any information"}));
    // res.end(json({status:"success", data: "Can contain any information"}));
    res.status(200).send('hello world');
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Can contain any information"});
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data: "Can contain any information"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:"success", data: "Can contain any information"});
};