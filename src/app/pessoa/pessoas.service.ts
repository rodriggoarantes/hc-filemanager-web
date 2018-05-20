import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Pessoa } from './../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private collection: AngularFirestoreCollection<Pessoa>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Pessoa>('pessoas');
  }

  public listar(): Observable<Pessoa[]> {
    return this.collection.valueChanges();
  }

  public inserir(pessoa: Pessoa) {
    this.collection.add(pessoa);
  }
}
