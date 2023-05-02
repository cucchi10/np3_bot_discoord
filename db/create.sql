CREATE TABLE images(
  id serial primary key not null,
  nombre varchar not null,
  link varchar,
  deleted bool not null default false
);
-- Inserta filas en la tabla entidad
INSERT INTO images (nombre,link) VALUES
 ('durazno','https://tenor.com/view/satisfying-peach-peeling-gif-20782623')
 ('durazno1',' https://tenor.com/view/testpr-gif-22872410')
 ('berenjena','https://tenor.com/view/eggplant-hard-happy-gif-20121355')
