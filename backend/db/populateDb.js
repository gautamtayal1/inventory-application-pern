const {Client} = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS books(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  author VARCHAR(255),
  stock INT
);

INSERT INTO books (name, author, stock)
VALUES

('The Great Gatsby', 'F. Scott Fitzgerald', 10),
('To Kill a Mockingbird', 'Harper Lee', 15),
('1984', 'George Orwell', 12),
('Pride and Prejudice', 'Jane Austen', 20),
('The Catcher in the Rye', 'J.D. Salinger', 18),
('Moby-Dick', 'Herman Melville', 7),
('War and Peace', 'Leo Tolstoy', 5),
('The Hobbit', 'J.R.R. Tolkien', 25),
('The Book Thief', 'Markus Zusak', 14),
('Jane Eyre', 'Charlotte Brontë', 17),
('Brave New World', 'Aldous Huxley', 13),
('The Alchemist', 'Paulo Coelho', 22),
('Crime and Punishment', 'Fyodor Dostoevsky', 11),
('Wuthering Heights', 'Emily Brontë', 9),
('Frankenstein', 'Mary Shelley', 6),
('Dracula', 'Bram Stoker', 8),
('The Odyssey', 'Homer', 4),
('Les Misérables', 'Victor Hugo', 3),
('Fahrenheit 451', 'Ray Bradbury', 16),

('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 10),
('Educated', 'Tara Westover', 12),
('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 15),
('Unbroken', 'Laura Hillenbrand', 18),
('Into the Wild', 'Jon Krakauer', 10),
('The Wright Brothers', 'David McCullough', 8),
('Guns, Germs, and Steel', 'Jared Diamond', 7),
('The Diary of a Young Girl', 'Anne Frank', 20),
('The Power of Habit', 'Charles Duhigg', 13),
('Thinking, Fast and Slow', 'Daniel Kahneman', 11),
('Born a Crime', 'Trevor Noah', 14),
('Quiet: The Power of Introverts', 'Susan Cain', 12),
('A Brief History of Time', 'Stephen Hawking', 6),
('Outliers', 'Malcolm Gladwell', 9),
('The Tipping Point', 'Malcolm Gladwell', 7),
('Atomic Habits', 'James Clear', 19),
('Mans Search for Meaning', 'Viktor E. Frankl', 8),
('The 5 AM Club', 'Robin Sharma', 5),
('The Art of War', 'Sun Tzu', 10),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 15),


('Batman: Year One', 'Frank Miller', 20),
('Watchmen', 'Alan Moore', 25),
('The Sandman', 'Neil Gaiman', 18),
('Maus', 'Art Spiegelman', 10),
('The Killing Joke', 'Alan Moore', 22),
('V for Vendetta', 'Alan Moore', 17),
('Saga', 'Brian K. Vaughan', 14),
('Hellboy: Seed of Destruction', 'Mike Mignola', 12),
('Daredevil: Born Again', 'Frank Miller', 9),
('Black Panther: A Nation Under Our Feet', 'Ta-Nehisi Coates', 8),
('The Walking Dead', 'Robert Kirkman', 7),
('Superman: Red Son', 'Mark Millar', 10),
('Spider-Man: Blue', 'Jeph Loeb', 13),
('Infinity Gauntlet', 'Jim Starlin', 16),
('Thor: God of Thunder', 'Jason Aaron', 12),
('X-Men: Dark Phoenix Saga', 'Chris Claremont', 15),
('Green Lantern: Rebirth', 'Geoff Johns', 11),
('Wonder Woman: The Hiketeia', 'Greg Rucka', 9),
('Doctor Strange: The Oath', 'Brian K. Vaughan', 8),
('Captain America: Winter Soldier', 'Ed Brubaker', 14);
`;

async function main() {
  console.log("seeding");
  const client = new Client({
    connectionString: "postgresql://apple:Tayal@098@localhost:5432/books",
  });
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("Done")
}

main()