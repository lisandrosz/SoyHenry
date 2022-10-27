const session = require("supertest-session");
const { request } = require("../index.js");
const app = require("../index.js"); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe("Test de APIS", () => {
  describe("GET /", () => {
    it("responds with 200", () => agent.get("/").expect(200));
    it("responds with and object with message `hola`", () =>
      agent.get("/").then((res) => {
        expect(res.body.message).toEqual("hola");
      }));
  });

  describe("GET /test", () => {
    it("responds with 200", () => agent.get("/test").expect(200));
    it("responds with and object with message `test`", () =>
      agent.get("/test").then((res) => {
        expect(res.body.message).toEqual("test");
      }));
  });

  describe("POST /sum", () => {
    it("responds with 200", () => agent.post("/sum").expect(200));
    it("responds with the sum of 2 and 3", () =>
      agent
        .post("/sum")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(5);
        }));
  });

  describe("POST /producto", () => {
    it("responds with 200", () => agent.post("/product").expect(200));
    it("responds with the product of 2 and 3", () =>
      agent
        .post("/product")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(6);
        }));
  });

  describe("POST /sumArray", () => {
    it("responds with 200", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 13 })
        .expect(200));

    it("responds with an response true", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 13 })
        .then((res) => {
          expect(res.body.result).toEqual(true);
        }));

    it("responds with an response false ", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 105 })
        .then((res) => {
          expect(res.body.result).toEqual(false);
        }));

    it("No suma dos numeros iguales", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 10 })
        .then((res) => {
          expect(res.body.result).toEqual(false);
        }));
  });

  describe("POST /numString", () => {
    it("responds with 200", () => {
      return agent.post("/numString").send({ string: "probando" }).expect(200);
    });

    it("renponde con el numero de caracteres del string enviado", () => {
      return agent
        .post("/numString")
        .send({ string: "hola" })
        .then((response) => {
          expect(response.body.res).toEqual(4);
        });
    });

    it("Responder con un status 400 (bad request) si el string es un número.", () => {
      return agent.post("/numString").send({ string: 5 }).expect(400);
    });

    it("Responder con un status 400 (bad request) si el string esta vacio", () => {
      return agent.post("/numString").send({ string: "" }).expect(400);
    });
  });

  describe("POST /pluck", () => {
    const arreglo = [
      {
        saludo: "Hola",
        despedida: "Chau",
        nombre: "Lisandro",
      },
      {
        saludo: "Hi",
        despedida: "Bye",
        nombre: "Juan",
      },
      {
        saludo: "Alo",
        despedida: "Adeus",
        nombre: "Pedrinho",
      },
    ];

    const propiedad = "nombre";

    it("Responder con status 200.", () => {
      return agent.post("/pluck").send({ arreglo, propiedad }).expect(200);
    });

    it("Responder con la funcionalidad de pluck", () => {
      return agent
        .post("/pluck")
        .send({ arreglo, propiedad })
        .then((response) => {
          expect(response.body.result).toEqual([
            "Lisandro",
            "Juan",
            "Pedrinho",
          ]);
        });
    });

    it("Responder con un status 400 (bad request) si array no es un arreglo.", () => {
      return agent
        .post("/pluck")
        .send({ arreglo: "string", propiedad })
        .expect(400);
    });

    it("Responder con un status 400 (bad request) si el string propiedad está vacio.", () => {
      return agent.post("/pluck").send({ arreglo, propiedad: "" }).expect(400);
    });
  });
});
