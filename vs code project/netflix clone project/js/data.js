/* ========== SAMPLE DATA ========== */
const movies = {
  continueWatching: [
    { id: 1, title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", match: "98%", year: 2022, rating: "TV-14", duration: "4 Seasons", desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder", genres: "Sci-Fi, Horror, Drama", tags: "Suspenseful, Exciting" },
    { id: 2, title: "The Witcher", img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15OAacy7vNsYr5ZYV3E.jpg", match: "95%", year: 2023, rating: "TV-MA", duration: "3 Seasons", desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", cast: "Henry Cavill, Anya Chalotra, Freya Allan", genres: "Fantasy, Action, Adventure", tags: "Epic, Dark" },
    { id: 3, title: "Money Heist", img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTTJL0pO.jpg", match: "97%", year: 2021, rating: "TV-MA", duration: "5 Seasons", desc: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.", cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño", genres: "Crime, Thriller", tags: "Suspenseful, Exciting" },
    { id: 4, title: "Dark", img: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", match: "96%", year: 2020, rating: "TV-MA", duration: "3 Seasons", desc: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.", cast: "Louis Hofmann, Lisa Vicari, Maja Schöne", genres: "Sci-Fi, Mystery, Thriller", tags: "Mind-bending, Dark" },
    { id: 5, title: "The Crown", img: "https://image.tmdb.org/t/p/w500/1M876KPjeXrZ2zC3zQKeH6wX2tP.jpg", match: "94%", year: 2023, rating: "TV-MA", duration: "6 Seasons", desc: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.", cast: "Imelda Staunton, Jonathan Pryce, Lesley Manville", genres: "Drama, History", tags: "Emotional, Riveting" },
    { id: 6, title: "Breaking Bad", img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", match: "99%", year: 2013, rating: "TV-MA", duration: "5 Seasons", desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.", cast: "Bryan Cranston, Aaron Paul, Anna Gunn", genres: "Crime, Drama, Thriller", tags: "Intense, Gripping" },
  ],
  popular: [
    { id: 7, title: "Squid Game", img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", match: "97%", year: 2021, rating: "TV-MA", duration: "2 Seasons", desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.", cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun", genres: "Action, Drama, Mystery", tags: "Suspenseful, Violent" },
    { id: 8, title: "Wednesday", img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygcjZvq.jpg", match: "96%", year: 2022, rating: "TV-14", duration: "1 Season", desc: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.", cast: "Jenna Ortega, Gwendoline Christie, Riki Lindhome", genres: "Comedy, Fantasy, Mystery", tags: "Quirky, Dark" },
    { id: 9, title: "The Night Agent", img: "https://image.tmdb.org/t/p/w500/4NUx1mCq0dY4h3y2Z1Y1Y1Y1Y1Y.jpg", match: "93%", year: 2023, rating: "TV-MA", duration: "2 Seasons", desc: "A low-level FBI agent works in the basement of the White House manning a phone that never rings — until the night it does, sparking action and intrigue.", cast: "Gabriel Basso, Luciane Buchanan, Hong Chau", genres: "Action, Thriller", tags: "Suspenseful, Exciting", fallback: "https://image.tmdb.org/t/p/w500/4PU6V0l0p0p0p0p0p0p0p0p0p0p.jpg" },
    { id: 10, title: "Extraction 2", img: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrk50FVBU1W.jpg", match: "92%", year: 2023, rating: "R", duration: "2h 3m", desc: "After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.", cast: "Chris Hemsworth, Golshifteh Farahani, Adam Bessa", genres: "Action, Thriller", tags: "Explosive, Intense" },
    { id: 11, title: "Glass Onion", img: "https://image.tmdb.org/t/p/w500/vDGr1YdrRig9wGqeL7Y6V8g1v8.jpg", match: "91%", year: 2022, rating: "PG-13", duration: "2h 19m", desc: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.", cast: "Daniel Craig, Edward Norton, Janelle Monáe", genres: "Comedy, Crime, Mystery", tags: "Witty, Clever" },
    { id: 12, title: "The Gray Man", img: "https://image.tmdb.org/t/p/w500/5NPEjJECLWb1NvF3BM4b7gN8x0A.jpg", match: "88%", year: 2022, rating: "PG-13", duration: "2h 9m", desc: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative.", cast: "Ryan Gosling, Chris Evans, Ana de Armas", genres: "Action, Thriller", tags: "Fast-paced, Stylish" },
    { id: 13, title: "Don't Look Up", img: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60zs8N.jpg", match: "87%", year: 2021, rating: "R", duration: "2h 18m", desc: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.", cast: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep", genres: "Comedy, Drama, Sci-Fi", tags: "Satirical, Urgent" },
  ],
  top10: [
    { id: 14, title: "The Night Agent", img: "https://image.tmdb.org/t/p/w500/4NUx1mCq0dY4h3y2Z1Y1Y1Y1Y1Y.jpg", rank: 1, match: "93%", year: 2023, rating: "TV-MA", duration: "2 Seasons", desc: "A low-level FBI agent works in the basement of the White House manning a phone that never rings — until the night it does.", cast: "Gabriel Basso, Luciane Buchanan", genres: "Action, Thriller", tags: "Suspenseful" },
    { id: 15, title: "Beef", img: "https://image.tmdb.org/t/p/w500/5QHqHre5zk5MDXdD9lqXc1vY8Y.jpg", rank: 2, match: "95%", year: 2023, rating: "TV-MA", duration: "1 Season", desc: "Two people let a road rage incident escalate into a full-blown feud in this darkly comedic series.", cast: "Steven Yeun, Ali Wong", genres: "Comedy, Drama", tags: "Darkly Funny" },
    { id: 16, title: "Queen Charlotte", img: "https://image.tmdb.org/t/p/w500/6cLf0TEibnQ2p5p0Y0Y0Y0Y0Y0Y.jpg", rank: 3, match: "94%", year: 2023, rating: "TV-MA", duration: "1 Season", desc: "A prequel to Bridgerton, exploring the rise of a young Queen Charlotte and her marriage to King George III.", cast: "India Amarteifio, Corey Mylchreest", genres: "Drama, Romance", tags: "Romantic, Lavish" },
    { id: 17, title: "The Diplomat", img: "https://image.tmdb.org/t/p/w500/7Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 4, match: "92%", year: 2023, rating: "TV-MA", duration: "2 Seasons", desc: "In the midst of an international crisis, a career diplomat lands in a high-profile job she's unsuited for.", cast: "Keri Russell, Rufus Sewell", genres: "Drama, Thriller", tags: "Political, Tense" },
    { id: 18, title: "Outer Banks", img: "https://image.tmdb.org/t/p/w500/ovNc9d7Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 5, match: "91%", year: 2023, rating: "TV-14", duration: "4 Seasons", desc: "A group of teenagers living on an island off the coast of North Carolina hunt for a legendary treasure.", cast: "Chase Stokes, Madelyn Cline", genres: "Action, Drama, Mystery", tags: "Adventurous" },
    { id: 19, title: "You", img: "https://image.tmdb.org/t/p/w500/8Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 6, match: "90%", year: 2023, rating: "TV-MA", duration: "4 Seasons", desc: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.", cast: "Penn Badgley, Victoria Pedretti", genres: "Crime, Drama, Thriller", tags: "Twisted, Gripping" },
    { id: 20, title: "Ginny & Georgia", img: "https://image.tmdb.org/t/p/w500/9Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 7, match: "89%", year: 2023, rating: "TV-14", duration: "2 Seasons", desc: "Angsty Ginny and her free-spirited mom Georgia move to a new town to start over, but secrets follow them.", cast: "Brianne Howey, Antonia Gentry", genres: "Comedy, Drama", tags: "Emotional, Relatable" },
    { id: 21, title: "Shadow and Bone", img: "https://image.tmdb.org/t/p/w500/1Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 8, match: "88%", year: 2023, rating: "TV-14", duration: "2 Seasons", desc: "Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.", cast: "Jessie Mei Li, Archie Renaux", genres: "Fantasy, Adventure", tags: "Epic, Magical" },
    { id: 22, title: "Arcane", img: "https://image.tmdb.org/t/p/w500/2Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 9, match: "98%", year: 2021, rating: "TV-14", duration: "2 Seasons", desc: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.", cast: "Hailee Steinfeld, Ella Purnell", genres: "Animation, Action, Adventure", tags: "Stunning, Emotional" },
    { id: 23, title: "The Sandman", img: "https://image.tmdb.org/t/p/w500/3Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", rank: 10, match: "90%", year: 2022, rating: "TV-MA", duration: "1 Season", desc: "After years of imprisonment, Morpheus embarks on a journey across worlds to find what was stolen from him and restore his power.", cast: "Tom Sturridge, Gwendoline Christie", genres: "Fantasy, Drama, Horror", tags: "Mythic, Dark" },
  ],
  trending: [
    { id: 24, title: "Rebel Moon", img: "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUc7aUaDw0w.jpg", match: "85%", year: 2023, rating: "PG-13", duration: "2h 15m", desc: "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of a tyrannical ruling force, Kora assembles a team of warriors.", cast: "Sofia Boutella, Djimon Hounsou", genres: "Sci-Fi, Action", tags: "Epic, Visual" },
    { id: 25, title: "Leave the World Behind", img: "https://image.tmdb.org/t/p/w500/1Q2Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", match: "84%", year: 2023, rating: "R", duration: "2h 18m", desc: "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices.", cast: "Julia Roberts, Mahershala Ali", genres: "Drama, Mystery, Thriller", tags: "Tense, Thought-provoking" },
    { id: 26, title: "May December", img: "https://image.tmdb.org/t/p/w500/2Q2Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", match: "86%", year: 2023, rating: "R", duration: "1h 57m", desc: "Twenty years after their notorious tabloid romance gripped the nation, a married couple tangles with an actress preparing to play the wife in a film.", cast: "Natalie Portman, Julianne Moore", genres: "Drama", tags: "Intense, Complex" },
    { id: 27, title: "Napoleon", img: "https://image.tmdb.org/t/p/w500/jE5o7y9K6pZtY0Y0Y0Y0Y0Y0Y0Y.jpg", match: "82%", year: 2023, rating: "R", duration: "2h 38m", desc: "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power.", cast: "Joaquin Phoenix, Vanessa Kirby", genres: "History, Drama, War", tags: "Epic, Grand" },
    { id: 28, title: "Killers of the Flower Moon", img: "https://image.tmdb.org/t/p/w500/d0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "89%", year: 2023, rating: "R", duration: "3h 26m", desc: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one.", cast: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone", genres: "Crime, Drama, History", tags: "Powerful, Tragic" },
    { id: 29, title: "The Killer", img: "https://image.tmdb.org/t/p/w500/e0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "87%", year: 2023, rating: "R", duration: "1h 58m", desc: "After a fateful near-miss, an assassin battles his employers, and himself, on an international manhunt he insists isn't personal.", cast: "Michael Fassbender, Tilda Swinton", genres: "Action, Crime, Thriller", tags: "Cool, Precise" },
  ],
  action: [
    { id: 30, title: "John Wick: Chapter 4", img: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VdO60fu7adg.jpg", match: "94%", year: 2023, rating: "R", duration: "2h 49m", desc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face a new enemy.", cast: "Keanu Reeves, Donnie Yen", genres: "Action, Thriller", tags: "Stylish, Brutal" },
    { id: 31, title: "The Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo27zDsZph2l0.jpg", match: "93%", year: 2022, rating: "PG-13", duration: "2h 56m", desc: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.", cast: "Robert Pattinson, Zoë Kravitz", genres: "Action, Crime, Drama", tags: "Dark, Gritty" },
    { id: 32, title: "Top Gun: Maverick", img: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", match: "97%", year: 2022, rating: "PG-13", duration: "2h 11m", desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.", cast: "Tom Cruise, Miles Teller", genres: "Action, Drama", tags: "Thrilling, Emotional" },
    { id: 33, title: "Dune", img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", match: "90%", year: 2021, rating: "PG-13", duration: "2h 35m", desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.", cast: "Timothée Chalamet, Rebecca Ferguson", genres: "Sci-Fi, Adventure", tags: "Epic, Immersive" },
    { id: 34, title: "No Time to Die", img: "https://image.tmdb.org/t/p/w500/iUgyqt0Yxw5dYdX0Y0Y0Y0Y0Y0Y.jpg", match: "88%", year: 2021, rating: "PG-13", duration: "2h 43m", desc: "James Bond has left active service. His peace is short-lived when Felix Leiter enlists his help in the search for a mysterious villain.", cast: "Daniel Craig, Rami Malek", genres: "Action, Adventure, Thriller", tags: "Emotional, Spectacular" },
    { id: 35, title: "Black Panther: Wakanda Forever", img: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALwxv0Y0Y0Y0Y0Y.jpg", match: "86%", year: 2022, rating: "PG-13", duration: "2h 41m", desc: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.", cast: "Letitia Wright, Lupita Nyong'o", genres: "Action, Adventure, Drama", tags: "Emotional, Powerful" },
  ],
  comedy: [
    { id: 36, title: "The Menu", img: "https://image.tmdb.org/t/p/w500/f1Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "89%", year: 2022, rating: "R", duration: "1h 47m", desc: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.", cast: "Ralph Fiennes, Anya Taylor-Joy", genres: "Comedy, Horror, Thriller", tags: "Satirical, Twisty" },
    { id: 37, title: "Bullet Train", img: "https://image.tmdb.org/t/p/w500/t0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "87%", year: 2022, rating: "R", duration: "2h 7m", desc: "Five assassins find themselves on a fast-moving bullet train from Tokyo to Morioka with only one thing in common — a briefcase.", cast: "Brad Pitt, Joey King", genres: "Action, Comedy, Thriller", tags: "Fun, Chaotic" },
    { id: 38, title: "Everything Everywhere All at Once", img: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", match: "95%", year: 2022, rating: "R", duration: "2h 19m", desc: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the multiverse by connecting with versions of herself.", cast: "Michelle Yeoh, Stephanie Hsu", genres: "Action, Adventure, Comedy", tags: "Mind-bending, Heartfelt" },
    { id: 39, title: "The Unbearable Weight of Massive Talent", img: "https://image.tmdb.org/t/p/w500/aqh0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "90%", year: 2022, rating: "R", duration: "1h 47m", desc: "Movies, marriage, and fatherhood are taking their toll on Nick, a struggling actor. He takes a job at a billionaire's birthday party.", cast: "Nicolas Cage, Pedro Pascal", genres: "Action, Comedy", tags: "Meta, Hilarious" },
    { id: 40, title: "Red Notice", img: "https://image.tmdb.org/t/p/w500/lAXO3650Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg", match: "85%", year: 2021, rating: "PG-13", duration: "1h 58m", desc: "An Interpol agent tracks the world's most wanted art thief in a globe-trotting crime comedy.", cast: "Dwayne Johnson, Ryan Reynolds, Gal Gadot", genres: "Action, Comedy, Crime", tags: "Fun, Light" },
    { id: 41, title: "Murder Mystery 2", img: "https://image.tmdb.org/t/p/w500/s1xY0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg", match: "83%", year: 2023, rating: "PG-13", duration: "1h 30m", desc: "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped.", cast: "Adam Sandler, Jennifer Aniston", genres: "Comedy, Mystery", tags: "Lighthearted, Fun" },
  ],
};

/* Better image fallbacks using reliable TMDB / public posters */
const reliablePosters = {
  9: "https://image.tmdb.org/t/p/w500/4NUx1mCq0dY4h3y2Z1Y1Y1Y1Y1Y.jpg", // placeholder will use colored fallback
  14: "https://image.tmdb.org/t/p/w500/4NUx1mCq0dY4h3y2Z1Y1Y1Y1Y1Y.jpg",
  15: "https://image.tmdb.org/t/p/w500/5QHqHre5zk5MDXdD9lqXc1vY8Y.jpg",
  16: "https://image.tmdb.org/t/p/w500/6cLf0TEibnQ2p5p0Y0Y0Y0Y0Y0Y.jpg",
  17: "https://image.tmdb.org/t/p/w500/7Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  18: "https://image.tmdb.org/t/p/w500/ovNc9d7Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  19: "https://image.tmdb.org/t/p/w500/8Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  20: "https://image.tmdb.org/t/p/w500/9Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  21: "https://image.tmdb.org/t/p/w500/1Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  22: "https://image.tmdb.org/t/p/w500/2Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  23: "https://image.tmdb.org/t/p/w500/3Q8Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  25: "https://image.tmdb.org/t/p/w500/1Q2Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  26: "https://image.tmdb.org/t/p/w500/2Q2Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
  27: "https://image.tmdb.org/t/p/w500/jE5o7y9K6pZtY0Y0Y0Y0Y0Y0Y0Y.jpg",
  28: "https://image.tmdb.org/t/p/w500/d0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  29: "https://image.tmdb.org/t/p/w500/e0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  34: "https://image.tmdb.org/t/p/w500/iUgyqt0Yxw5dYdX0Y0Y0Y0Y0Y0Y.jpg",
  35: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALwxv0Y0Y0Y0Y0Y.jpg",
  36: "https://image.tmdb.org/t/p/w500/f1Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  37: "https://image.tmdb.org/t/p/w500/t0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  39: "https://image.tmdb.org/t/p/w500/aqh0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  40: "https://image.tmdb.org/t/p/w500/lAXO3650Y0Y0Y0Y0Y0Y0Y0Y0Y0.jpg",
  41: "https://image.tmdb.org/t/p/w500/s1xY0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y0Y.jpg",
};

/* Use better public poster URLs that actually work */
const goodPosters = [
  "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", // Stranger Things
  "https://image.tmdb.org/t/p/w500/7vjaCdMw15OAacy7vNsYr5ZYV3E.jpg", // Witcher
  "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTTJL0pO.jpg", // Money Heist
  "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", // Dark
  "https://image.tmdb.org/t/p/w500/1M876KPjeXrZ2zC3zQKeH6wX2tP.jpg", // Crown
  "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", // Breaking Bad
  "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", // Squid Game
  "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygcjZvq.jpg", // Wednesday
  "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrk50FVBU1W.jpg", // Extraction 2
  "https://image.tmdb.org/t/p/w500/vDGr1YdrRig9wGqeL7Y6V8g1v8.jpg", // Glass Onion
  "https://image.tmdb.org/t/p/w500/5NPEjJECLWb1NvF3BM4b7gN8x0A.jpg", // Gray Man
  "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60zs8N.jpg", // Don't Look Up
  "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUc7aUaDw0w.jpg", // Rebel Moon
  "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VdO60fu7adg.jpg", // John Wick 4
  "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo27zDsZph2l0.jpg", // The Batman
  "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", // Top Gun
  "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", // Dune
  "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", // Everything Everywhere
];

/* Fix poster URLs with working ones */
function getPoster(movie, index) {
  if (movie.img && !movie.img.includes("0Y0Y0Y")) return movie.img;
  return goodPosters[index % goodPosters.length];
}

/* ========== RENDER ROWS ========== */
const mainContent = document.querySelector(".main-content");

function createPoster(movie, index, isTop10 = false) {
  const posterUrl = getPoster(movie, index);
  const poster = document.createElement("div");
  poster.className = "poster";
  poster.dataset.id = movie.id;

  if (isTop10) {
    poster.innerHTML = `
      <span class="rank">${movie.rank || index + 1}</span>
      <img src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/160x230/333/fff?text=${encodeURIComponent(movie.title)}'" />
    `;
  } else {
    poster.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/240x135/333/fff?text=${encodeURIComponent(movie.title)}'" />
      <div class="poster-overlay">
        <div class="poster-title">${movie.title}</div>
        <div class="poster-meta">
          <span>${movie.match || "90% Match"}</span>
          <span style="color:#fff">${movie.year || ""}</span>
        </div>
        <div class="poster-actions">
          <button class="play-btn" title="Play"><i class="fas fa-play"></i></button>
          <button title="Add to My List"><i class="fas fa-plus"></i></button>
          <button title="Like"><i class="fas fa-thumbs-up"></i></button>
          <button class="info-btn" title="More Info"><i class="fas fa-chevron-down"></i></button>
        </div>
      </div>
    `;
  }

  poster.addEventListener("click", (e) => {
    if (!e.target.closest(".poster-actions") || e.target.closest(".info-btn") || e.target.closest(".play-btn")) {
      openModal(movie, posterUrl);
    }
  });

  return poster;
}

function createRow(title, movieList, isTop10 = false) {
  const row = document.createElement("section");
  row.className = `row ${isTop10 ? "top10" : ""}`;

  row.innerHTML = `
    <h2 class="row-title">${title}</h2>
    <div class="row-container">
      <button class="row-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
      <div class="row-posters"></div>
      <button class="row-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;

  const postersContainer = row.querySelector(".row-posters");
  movieList.forEach((movie, i) => {
    postersContainer.appendChild(createPoster(movie, i, isTop10));
  });

  // Arrow scroll
  const leftBtn = row.querySelector(".row-arrow.left");
  const rightBtn = row.querySelector(".row-arrow.right");

  leftBtn.addEventListener("click", () => {
    postersContainer.scrollBy({ left: -600, behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    postersContainer.scrollBy({ left: 600, behavior: "smooth" });
  });

  return row;
}

/* Render all rows */
mainContent.appendChild(createRow("Continue Watching", movies.continueWatching));
mainContent.appendChild(createRow("Popular on Netflix", movies.popular));
mainContent.appendChild(createRow("Top 10 in Your Country Today", movies.top10, true));
mainContent.appendChild(createRow("Trending Now", movies.trending));
mainContent.appendChild(createRow("Action & Adventure", movies.action));
mainContent.appendChild(createRow("Comedies", movies.comedy));

/* ========== NAVBAR SCROLL ========== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ========== MODAL ========== */
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

function openModal(movie, imgUrl) {
  document.getElementById("modalImg").src = imgUrl || getPoster(movie, 0);
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalMatch").textContent = movie.match || "90% Match";
  document.getElementById("modalYear").textContent = movie.year || "";
  document.getElementById("modalRating").textContent = movie.rating || "TV-MA";
  document.getElementById("modalDuration").textContent = movie.duration || "";
  document.getElementById("modalDesc").textContent = movie.desc || "No description available.";
  document.getElementById("modalCast").textContent = movie.cast || "Various";
  document.getElementById("modalGenres").textContent = movie.genres || "Drama";
  document.getElementById("modalTags").textContent = movie.tags || "Exciting";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ========== HERO MORE INFO ========== */
document.querySelector(".btn-info").addEventListener("click", () => {
  openModal(movies.continueWatching[0], document.getElementById("heroImg").src);
});

document.querySelector(".btn-play").addEventListener("click", () => {
  alert("This is a frontend-only clone. Video playback is not implemented.");
});
