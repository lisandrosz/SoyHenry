const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { code, name, age, race, hp, mana, date_added } = req.body;
    if (!code || !name || !hp || !mana) {
      return res.status(404).send("Falta enviar datos obligatorios");
    }
    const nuevoPersonaje = await Character.create({
      code,
      name,
      age,
      race,
      hp,
      mana,
      date_added,
    });
    res.status(201).send(nuevoPersonaje);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.get("/", async (req, res) => {
  try {
    if (req.query.race) {
      const race = req.query.race;
      const personaje = await Character.findAll({
        where: {
          race,
        },
      });
      res.status(200).send(personaje);
    } else if (req.query.name || req.query.hp) {
      const personaje = await Character.findAll({
        attributes: ["name", "hp"],
      });
      res.status(200).send(personaje);
    } else {
      const personajes = await Character.findAll();
      res.status(200).send(personajes);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:code", async (req, res) => {
  try {
    const codigo = req.params.code;
    const personaje = await Character.findByPk(codigo);
    if (personaje === null) {
      res
        .status(404)
        .send(`El código ${codigo} no corresponde a un personaje existente`);
    } else {
      res.status(200).send(personaje);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
