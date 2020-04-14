DROP TABLE IF EXISTS bookstable;
-- DROP TABLE IF NOT EXISTS bookstable;
CREATE TABLE bookstable (
  id SERIAL PRIMARY KEY,
  authors VARCHAR(255),
  title VARCHAR(255),
  isbn VARCHAR(255),
  image_url VARCHAR(255),
  description TEXT,
  bookshelf VARCHAR(255)
)

-- INSERT INTO bookstable (author, title, isbn, image_url, description, bookshelf)
-- VALUES ('zzzzz' , 'ita' , 'testing' , 'Not Found' , 'nothing' , 'whatever');

-- INSERT INTO books
--     (title, authors, isbn, image_url, description, bookshelf)
-- VALUES
--     (
--         'Reinforced Concrete Structures',
--         'Omar Chaallal',
--         'what ever',
--         'http://books.google.com/books/content?id=qdsufl6tSV8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
--         'This book focuses on the analysis and design of reinforced concrete structures in conformity with CSA A23.3-04 Canadian standard. Such members are often encountered in engineering practice, particularly in buildings. Using an original approach, the authors present the subject matter as clearly and effectively as possible. Each aspect is carefully illustrated and is the subject of a thorough theoretical development. This is followed by a step-by-step procedure for both design and verification, along with many fully developped numerical applications.',
--         'civil engineering'
-- );

