const getAllAirports = "SELECT * FROM airport";
const getOneAirport = "SELECT * FROM airport where id = $1";

module.exports = {
getAllAirports,
getOneAirport,
};