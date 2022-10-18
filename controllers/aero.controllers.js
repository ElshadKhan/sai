const db = require("../db");
const queries = require("../queries/queries")
class AirportControllers {
  async getAllAirports(req, res) {
    const airports = await db.query(queries.getAllAirports);
    res.json(airports.rows);
  }
  async getOneAirport(req, res) {
    const id = req.params.id;
    const airport = await db.query(queries.getOneAirport, [id]);
    res.json(airport.rows);
  }
  async createAirplanemodel(req, res) {
    const {id, name} = req.body;
    const newAirplanemodel = await db.query(
      `INSERT INTO airplanemodel (name) values ($1)`, [name]
    );
    res.json(newAirplanemodel.rows[0]);
  }
  async createTickets(req, res) {
    const {price, amount} = req.body;
    const newTicket = await db.query(
      `INSERT INTO tickets (price, amount) values ($1, $2)`, [price, amount]
    );
    res.json(newTicket.rows[1]);
  }
  async createFlightnumber(req, res) {
    const {name} = req.body;
    const newFlightnumber = await db.query(
      `INSERT INTO flightnumber (name) values ($1)`, [name]
    );
    res.json(newFlightnumber.rows[1]);
  }
  async createPassengers(req, res) {
    const {fio} = req.body;
    const newPassengers = await db.query(
      `INSERT INTO passengers (fio) values ($1)`, [fio]
    );
    res.json(newPassengers.rows[1]);
  }
  async createEmployees(req, res) {
    const {fio} = req.body;
    const newEmployees = await db.query(
      `INSERT INTO employees (fio) values ($1)`, [fio]
    );
    res.json(newEmployees.rows[1]);
  }
  async createAirport(req, res) {
    const {id} = req.params;
    const {name} = req.body;
    const newAirport = await db.query(
      `INSERT INTO airport (name, airplanemodelId, flightnumberId, passengersId, employeesId, ticketsId) values ($1,$2,$3,$4,$5,$6)`, [name, id, id, id, id, id]
    );
    res.json(newAirport.rows[1]);
  }
}

module.exports = new AirportControllers();
