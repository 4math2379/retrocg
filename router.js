exports.index = function index(req,res) {
  // chope le rendu !
  res.render('/deck/index');
};

exports.create = function create(req,res) {
  res.setHeader("content-type", "text-html");
  res.send("<html><head><title>Retro Card Gaming</title><head><body></body>");
};

exports.home = function home(req,res) {
  res.render("/deck/user");
};
