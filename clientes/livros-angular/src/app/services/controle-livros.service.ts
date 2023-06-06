import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../model/livro';
import { map } from 'rxjs/operators';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  baseURL = "http://localhost:3030/livros";

  constructor(private http: HttpClient) { }

  obterLivros() {
    return this.http.get<LivroMongo[]>(this.baseURL)
      .pipe(map(data => data.map((livroMongo: LivroMongo) => {
          return new Livro(
            livroMongo._id,
            livroMongo.codEditora,
            livroMongo.titulo,
            livroMongo.resumo,
            livroMongo.autores
          );
        })
      ));
  }

  incluir(livro: Livro) {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
    return this.http.post(this.baseURL, livroMongo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  excluir(codigo: string) {
    return this.http.delete(`${this.baseURL}/${codigo}`);
  }
}


