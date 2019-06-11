import "jest";
import request from "supertest";
import { environmentTest } from "../src/server/environment";

const andressTest = `http://localhost:${environmentTest.serverTest.port}`;

test("POST /noticias", () => {
  return request(andressTest)
          .post("/noticias")
          .send({
              author: "Nome do autor",
              content: "Esta é uma notícia sobre saúde...",
              description: "Descrição da notícia",
              event: [
                "dengue",
                "chuva",
              ],
              publishedAt: "2019-06-07T17:32:28Z",
              score: 6.2,
              source: "Nome do site da noticia",
              title: "Titulo da noticia",
              country: "BR",
              region: "Centro-oeste",
              uf: "DF",
              url: "sitedanoticia.com/noticia1",
              urlToImage: "sitedanoticia.com/noticia1/image.jpg",
            })
            .then((response: request.Response) => {
              expect(response.status).toBe(200);
              expect(response.body.data.id).toBeDefined();
              expect(response.body.data.author).toBe("Nome do autor");
              expect(response.body.data.content).toBe("Esta é uma notícia sobre saúde...");
              expect(response.body.data.description).toBe("Descrição da notícia");
              expect(response.body.data.event).toEqual(["dengue", "chuva"]);
              expect(response.body.data.publishedAt).toBe("2019-06-07T17:32:28Z");
              expect(response.body.data.score).toBe(6.2);
              expect(response.body.data.source).toBe("Nome do site da noticia");
              expect(response.body.data.title).toBe("Titulo da noticia");
              expect(response.body.data.country).toBe("BR");
              expect(response.body.data.region).toBe("Centro-oeste");
              expect(response.body.data.uf).toBe("DF");
              expect(response.body.data.url).toBe("sitedanoticia.com/noticia1");
              expect(response.body.data.urlToImage).toBe("sitedanoticia.com/noticia1/image.jpg");
            }).catch(fail);
});
