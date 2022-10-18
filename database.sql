create TABLE airplanemodel (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);
create TABLE tickets (
  id SERIAL PRIMARY KEY,
  price INT,
  amount INT
);
create TABLE airport (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  airplanemodelId INT,
  flightnumberId INT,
  passengersId INT,
  employeesId INT, 
  ticketsId INT,
  FOREIGN KEY (airplanemodelId) REFERENCES airplanemodel(id),
  FOREIGN KEY (flightnumberId) REFERENCES flightnumber(id),
  FOREIGN KEY (passengersId) REFERENCES passengers(id),
  FOREIGN KEY (employeesId) REFERENCES employees(id),
  FOREIGN KEY (ticketsId) REFERENCES tickets(id)
);
create TABLE flightnumber (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);
create TABLE passengers (
  id SERIAL PRIMARY KEY,
  fio VARCHAR(255)
);
create TABLE employees (
  id SERIAL PRIMARY KEY,
  fio VARCHAR(255)
);
