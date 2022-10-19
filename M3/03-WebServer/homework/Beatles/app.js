var http = require("http");
var url = require("url");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

const pathNames = {
  "/api/John%20Lennon": beatles[0],
  "/api/Paul%20McCartney": beatles[1],
  "/api/George%20Harrison": beatles[2],
  "/api/Richard%20Starkey": beatles[3],
};

const profileNames = {
  "/John%20Lennon": 0,
  "/Paul%20McCartney": 1,
  "/George%20Harrison": 2,
  "/Richard%20Starkey": 3,
};

http
  .createServer((req, res) => {
    const writeHead = (statusCode, contentType) => {
      return res.writeHead(statusCode, { "Content-Type": contentType });
    };

    const end = (response) => {
      return res.end(response);
    };

    if (req.url === "/") {
      writeHead(200, "text/html");
      let html = fs.readFileSync(__dirname + "/index.html", "utf-8");
      end(html);
    } else if (req.url === "/api") {
      writeHead(200, "application/json");
      end(JSON.stringify(beatles));
    } else if (profileNames.hasOwnProperty(req.url)) {
      let html = fs.readFileSync(__dirname + "/beatle.html", "utf-8");
      html = html.replace("{nombre}", beatles[profileNames[req.url]].name);
      html = html.replace(
        "{nacimiento}",
        beatles[profileNames[req.url]].birthdate
      );
      html = html.replace("{img}", beatles[profileNames[req.url]].profilePic);
      res.end(html);
    } else if (pathNames.hasOwnProperty(req.url)) {
      writeHead(200, "application/json");
      end(JSON.stringify(pathNames[req.url]));
    } else {
      writeHead(404, "text/plain");
      end("Error 404, url no valida");
    }
  })
  .listen(3001, "localhost");
