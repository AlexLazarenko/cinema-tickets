export class Ticket{
    constructor(public id:string, public buyingDate:Date, public numberOfRow:string,
    public numberOfPlace:string, public movieId:string, public ownerId:string,
    public hallId:string, public ticketStatus:string){}
}
