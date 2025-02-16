import { getTicketsPerUserControler, getTicketController} from "./ticketControler.js";
export function loginPage(req, res){

    res.render('login', {error: null})
}

export function homePage(req, res){

    
    const name = req.user.name;
    
    res.render('home', {name: name});
}

export async function boughtPage(req, res){

    const result = await getTicketsPerUserControler(req, res);
  
    res.render('bought', {tickets: result});
}

export async function ticketPage(req, res){

    const result = await getTicketController(req, res);
    console.log(result);
    res.render('ticket', result);
}

