export interface Post {
  id : number;
  userId: number;
  title : string;
  body : string;
}

//DTO - Data Transfert Object
//oggetto/classe pernsato per straferire dei dati al server
export class PostDTO {
  constructor(
    public title : string = '',
    public userId : number = 0,
    public body : string = ''
  ){

  }
}