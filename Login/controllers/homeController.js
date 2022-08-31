
var users = [ //Var com o cadastro dos usuários
    {
        'name':'Lucas Guedes',
        'email':'lucasguedes@gmail.com',
        'password':'Lukinhas22'    
    }, 
    {
        'name':'Adriane Lira',
        'email': 'Adrianezinha@gmail.com',
        'password':'12456'    
    },
    {
        'name': 'Maria',
        'email': 'Mariaguedes@gmail.com',
        'password': '290803'
    }
];

class HomeController{
    
    index(req, res) {
        res.render('index', {logado: req.session.logado});
    }
    
    home(req, res){
        res.render('pages/home', {logado: req.session.logado, users: users});
    }

    users(req, res){
        res.render('pages/users', {logado: req.session.logado, users: users});
    }

    register(req, res){
        res.render('pages/register', {logado: req.session.logado});
    }

    update(req, res){
        var id = req.params.id
        res.render('pages/update', {logado: req.session.logado, user: users[id]});
    }

    delete(req, res){
        var id = req.params.id
        res.render('pages/delete', {logado: req.session.logado, user: users[id], id: id});
    }
}

module.exports = new HomeController();