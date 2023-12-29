-- CREATE TABLE IF NOT EXISTS books (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   titulo VARCHAR(255) NOT NULL,
--   autor VARCHAR(255) NOT NULL,
--   isbn VARCHAR(13) NOT NULL,
--   publicacion_year INT,
--   editorial VARCHAR(255),
--   paginas INT,
--   CONSTRAINT unique_isbn UNIQUE (isbn),
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );