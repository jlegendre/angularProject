export class Movie {
  id: number;
  Annee: Date;

  constructor(public Titre: string, public Genre: string) {
    this.Annee =  new Date();
  }



}
