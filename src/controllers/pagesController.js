
export function loginPage(req, res){

    res.render('login', {error: null})
}

export function homePage(req, res){

    
    const name = req.user.name;
    console.log(name);
    res.render('home', {name: name});
}