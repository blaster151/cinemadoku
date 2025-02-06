export const demoPuzzles = [
    {
      id: 1,
      name: "Classic Hollywood",
      tiles: [
        { id: 0, type: "Actor", data: { name: "Humphrey Bogart", birthYear: 1899, birthplace: "New York City, USA" } },
        { id: 1, type: "Movie", data: { title: "Casablanca", releaseYear: 1942, director: "Michael Curtiz" } },
        { id: 2, type: "Actor", data: { name: "Ingrid Bergman", birthYear: 1915, birthplace: "Stockholm, Sweden" } },
        { id: 3, type: "Movie", data: { title: "Citizen Kane", releaseYear: 1941, director: "Orson Welles" } },
        { id: 4, type: "Actor", data: { name: "Orson Welles", birthYear: 1915, birthplace: "Kenosha, Wisconsin, USA" } },
        { id: 5, type: "Movie", data: { title: "Gone with the Wind", releaseYear: 1939, director: "Victor Fleming" } },
        { id: 6, type: "Actor", data: { name: "Vivien Leigh", birthYear: 1913, birthplace: "Darjeeling, India" } },
        { id: 7, type: "Movie", data: { title: "The Wizard of Oz", releaseYear: 1939, director: "Victor Fleming" } },
        { id: 8, type: "Actor", data: { name: "Judy Garland", birthYear: 1922, birthplace: "Grand Rapids, Minnesota, USA" } },
        { id: 9, type: "Movie", data: { title: "Singin' in the Rain", releaseYear: 1952, director: "Stanley Donen, Gene Kelly" } },
        { id: 10, type: "Actor", data: { name: "Gene Kelly", birthYear: 1912, birthplace: "Pittsburgh, Pennsylvania, USA" } },
        { id: 11, type: "Movie", data: { title: "Vertigo", releaseYear: 1958, director: "Alfred Hitchcock" } },
        { id: 12, type: "Actor", data: { name: "James Stewart", birthYear: 1908, birthplace: "Indiana, Pennsylvania, USA" } },
        { id: 13, type: "Movie", data: { title: "Psycho", releaseYear: 1960, director: "Alfred Hitchcock" } },
        { id: 14, type: "Actor", data: { name: "Anthony Perkins", birthYear: 1932, birthplace: "New York City, USA" } },
        { id: 15, type: "Movie", data: { title: "It's a Wonderful Life", releaseYear: 1946, director: "Frank Capra" } },
        { id: 16, type: "Actor", data: { name: "Donna Reed", birthYear: 1921, birthplace: "Denison, Iowa, USA" } },
        { id: 17, type: "Movie", data: { title: "Sunset Boulevard", releaseYear: 1950, director: "Billy Wilder" } },
        { id: 18, type: "Actor", data: { name: "Gloria Swanson", birthYear: 1899, birthplace: "Chicago, Illinois, USA" } },
        { id: 19, type: "Movie", data: { title: "Some Like It Hot", releaseYear: 1959, director: "Billy Wilder" } },
        { id: 20, type: "Actor", data: { name: "Marilyn Monroe", birthYear: 1926, birthplace: "Los Angeles, California, USA" } },
      ],
      initialPlacements: [
        { tileId: 1, position: "0-0" },
        { tileId: 0, position: "0-1" },
      ],
      solution: [
        [0, 10, 5, 15, 8],
        [11, null, 16, null, 18],
        [1, 13, 6, 12, 2],
        [17, null, 14, null, 20],
        [7, 19, 4, 3, 9]
      ],
      hints: [
        {
          id: 1,
          text: "Played opposite Katharine Hepburn",
          color: "#FF5733",
          relatedTiles: [0, 12],
          longerDescription: "Both Humphrey Bogart and James Stewart starred opposite Katharine Hepburn in notable films. Bogart appeared with her in 'The African Queen' (1951), while Stewart co-starred in 'The Philadelphia Story' (1940)."
        },
        {
          id: 2,
          text: "Directed by their spouse",
          color: "#33FF57",
          relatedTiles: [4, 8],
          longerDescription: "Orson Welles was directed by his then-wife Rita Hayworth in 'The Lady from Shanghai' (1947), while Judy Garland was directed by her husband Vincente Minnelli in 'Meet Me in St. Louis' (1944)."
        },
        {
          id: 3,
          text: "Appeared in Hitchcock's cameos",
          color: "#3357FF",
          relatedTiles: [0, 12],
          longerDescription: "Both Humphrey Bogart and James Stewart appeared in scenes where Alfred Hitchcock made his famous cameo appearances. This occurred in multiple Hitchcock films featuring these actors."
        },
        {
          id: 4,
          text: "Oscar for playing a real person",
          color: "#FF33F1",
          relatedTiles: [6, 12],
          longerDescription: "Vivien Leigh won an Oscar for playing Scarlett O'Hara, a fictional character based on real Southern belles, in 'Gone with the Wind' (1939). James Stewart won for playing Macaulay Connor in 'The Philadelphia Story' (1940), though this hint might be better suited for Gary Cooper, who won for playing the real-life Alvin York in 'Sergeant York' (1941)."
        },
        {
          id: 5,
          text: "Famous dance with objects",
          color: "#33FFF1",
          relatedTiles: [10],
          longerDescription: "Gene Kelly performed a famous dance number with an umbrella in 'Singin' in the Rain' (1952). Similarly, Fred Astaire danced with a coat rack in 'Royal Wedding' (1951), showcasing the creativity of these legendary dancers."
        },
        {
          id: 6,
          text: "Born in the same year",
          color: "#FFF133",
          relatedTiles: [2, 4],
          longerDescription: "Both Ingrid Bergman and Orson Welles were born in 1915, just months apart. Bergman on August 29 in Stockholm, Sweden, and Welles on May 6 in Kenosha, Wisconsin, USA."
        },
        {
          id: 7,
          text: "Starred in eponymous films",
          color: "#8B33FF",
          relatedTiles: [7, 13],
          longerDescription: "'The Wizard of Oz' (1939) and 'Psycho' (1960) are both named after central characters in their respective stories. The Wizard is a key figure in the Land of Oz, while Norman Bates, the 'psycho', is the main character in Hitchcock's thriller."
        },
        {
          id: 8,
          text: "Career-defining roles",
          color: "#FF3333",
          relatedTiles: [0, 20],
          longerDescription: "Humphrey Bogart's role as Rick Blaine in 'Casablanca' (1942) and Marilyn Monroe's performance as Sugar Kane in 'Some Like It Hot' (1959) are considered career-defining roles that significantly shaped their Hollywood legacies."
        },
      ]
    },
    {
      id: 2,
      name: "Modern Cinema",
      tiles: [
        { id: 0, type: "Actor", data: { name: "Bill Hader", birthYear: 1978, birthplace: "Tulsa, Oklahoma, USA" } },
        { id: 1, type: "Movie", data: { title: "Barry", releaseYear: 2018, director: "Bill Hader, Alec Berg" } },
        { id: 2, type: "Actor", data: { name: "Stephen Root", birthYear: 1951, birthplace: "Sarasota, Florida, USA" } },
        { id: 3, type: "Movie", data: { title: "Office Space", releaseYear: 1999, director: "Mike Judge" } },
        { id: 4, type: "Actor", data: { name: "Zendaya", birthYear: 1996, birthplace: "Oakland, California, USA" } },
        { id: 5, type: "Movie", data: { title: "Dune", releaseYear: 2021, director: "Denis Villeneuve" } },
        { id: 6, type: "Actor", data: { name: "Tom Cruise", birthYear: 1962, birthplace: "Syracuse, New York, USA" } },
        { id: 7, type: "Movie", data: { title: "Top Gun: Maverick", releaseYear: 2022, director: "Joseph Kosinski" } },
        { id: 8, type: "Actor", data: { name: "Florence Pugh", birthYear: 1996, birthplace: "Oxford, England" } },
        { id: 9, type: "Movie", data: { title: "Black Widow", releaseYear: 2021, director: "Cate Shortland" } },
        { id: 10, type: "Actor", data: { name: "Oscar Isaac", birthYear: 1979, birthplace: "Guatemala City, Guatemala" } },
        { id: 11, type: "Movie", data: { title: "Moon Knight", releaseYear: 2022, director: "Mohamed Diab" } },
        { id: 12, type: "Actor", data: { name: "Denzel Washington", birthYear: 1962, birthplace: "Ipoh, Malaysia" } },
        { id: 13, type: "Movie", data: { title: "Everything Everywhere All at Once", releaseYear: 2022, director: "Daniels" } },
        { id: 14, type: "Actor", data: { name: "Jodie Foster", birthYear: 1975, birthplace: "Santiago, Chile" } },
        { id: 15, type: "Movie", data: { title: "The Last of Us", releaseYear: 2023, director: "Various" } },
        { id: 16, type: "Actor", data: { name: "Ryan Gosling", birthYear: 1990, birthplace: "Gold Coast, Australia" } },
        { id: 17, type: "Movie", data: { title: "Barbie", releaseYear: 2023, director: "Greta Gerwig" } },
        { id: 18, type: "Actor", data: { name: "Daniel Day-Lewis", birthYear: 1976, birthplace: "Cork, Ireland" } },
        { id: 19, type: "Movie", data: { title: "Oppenheimer", releaseYear: 2023, director: "Christopher Nolan" } }
      ],
      initialPlacements: [
        { tileId: 1, position: "0-0" },
        { tileId: 0, position: "0-1" }
      ],
      solution: [
        [1, 0, 3, 2, 5],
        [4, null, 7, null, 6],
        [9, 8, 11, 10, 13],
        [12, null, 15, null, 14],
        [17, 16, 19, 18, null]
      ],
      hints: [
        {
          id: 1,
          text: "Summer 2023 Blockbusters",
          color: "#FF0000",
          relatedTiles: [17, 19],
          longerDescription: "Both 'Barbie' and 'Oppenheimer' were released in summer 2023, creating the cultural phenomenon known as 'Barbenheimer' and breaking box office records."
        },
        {
          id: 2,
          text: "Acclaimed Directors",
          color: "#00FF00",
          relatedTiles: [17, 19],
          longerDescription: "Greta Gerwig ('Barbie') and Christopher Nolan ('Oppenheimer') are both highly acclaimed directors known for their unique visual styles and storytelling approaches."
        },
        {
          id: 3,
          text: "TV to Film Transitions",
          color: "#0000FF",
          relatedTiles: [0, 2],
          longerDescription: "Both Bill Hader and Stephen Root started in television (SNL and NewsRadio respectively) before transitioning to significant film roles."
        },
        {
          id: 4,
          text: "Franchise Stars",
          color: "#FFA500",
          relatedTiles: [4, 6],
          longerDescription: "Zendaya (Spider-Man, Dune) and Tom Cruise (Mission: Impossible, Top Gun) are both stars of major film franchises."
        },
        {
          id: 5,
          text: "Breakout Roles",
          color: "#800080",
          relatedTiles: [8, 10],
          longerDescription: "Florence Pugh (Lady Macbeth) and Oscar Isaac (Inside Llewyn Davis) both had critically acclaimed breakout performances that launched their careers."
        },
        {
          id: 6,
          text: "Superhero Universe Actors",
          color: "#008080",
          relatedTiles: [8, 10],
          longerDescription: "Florence Pugh (Black Widow) and Oscar Isaac (Moon Knight) both play significant roles in the Marvel Cinematic Universe."
        },
        {
          id: 7,
          text: "Award Season Buzz",
          color: "#FFD700",
          relatedTiles: [17, 19],
          longerDescription: "Both 'Barbie' and 'Oppenheimer' generated significant awards season buzz and received multiple nominations across various ceremonies."
        },
        {
          id: 8,
          text: "Based on Existing Properties",
          color: "#4B0082",
          relatedTiles: [5, 15],
          longerDescription: "'Dune' is based on Frank Herbert's classic novel, while 'The Last of Us' is adapted from the acclaimed video game of the same name."
        }
      ]
    },
    {
      id: 3,
      name: "Oscar Winners",
      tiles: [
        { id: 0, type: "Actor", data: { name: "Frances McDormand", birthYear: 1957, birthplace: "Chicago, Illinois, USA" } },
        { id: 1, type: "Movie", data: { title: "Nomadland", releaseYear: 2020, director: "Chloé Zhao" } },
        { id: 2, type: "Actor", data: { name: "Anthony Hopkins", birthYear: 1937, birthplace: "Port Talbot, Wales" } },
        { id: 3, type: "Movie", data: { title: "The Father", releaseYear: 2020, director: "Florian Zeller" } },
        { id: 4, type: "Actor", data: { name: "Joaquin Phoenix", birthYear: 1974, birthplace: "San Juan, Puerto Rico" } },
        { id: 5, type: "Movie", data: { title: "Joker", releaseYear: 2019, director: "Todd Phillips" } },
        { id: 6, type: "Actor", data: { name: "Renée Zellweger", birthYear: 1969, birthplace: "Katy, Texas, USA" } },
        { id: 7, type: "Movie", data: { title: "Judy", releaseYear: 2019, director: "Rupert Goold" } },
        { id: 8, type: "Actor", data: { name: "Olivia Colman", birthYear: 1974, birthplace: "Norwich, England" } },
        { id: 9, type: "Movie", data: { title: "The Favourite", releaseYear: 2018, director: "Yorgos Lanthimos" } },
        { id: 10, type: "Actor", data: { name: "Rami Malek", birthYear: 1981, birthplace: "Los Angeles, California, USA" } },
        { id: 11, type: "Movie", data: { title: "Bohemian Rhapsody", releaseYear: 2018, director: "Bryan Singer" } },
        { id: 12, type: "Actor", data: { name: "Gary Oldman", birthYear: 1958, birthplace: "London, England" } },
        { id: 13, type: "Movie", data: { title: "Darkest Hour", releaseYear: 2017, director: "Joe Wright" } },
        { id: 14, type: "Actor", data: { name: "Emma Stone", birthYear: 1988, birthplace: "Scottsdale, Arizona, USA" } },
        { id: 15, type: "Movie", data: { title: "La La Land", releaseYear: 2016, director: "Damien Chazelle" } },
        { id: 16, type: "Actor", data: { name: "Casey Affleck", birthYear: 1975, birthplace: "Falmouth, Massachusetts, USA" } },
        { id: 17, type: "Movie", data: { title: "Manchester by the Sea", releaseYear: 2016, director: "Kenneth Lonergan" } },
        { id: 18, type: "Actor", data: { name: "Brie Larson", birthYear: 1989, birthplace: "Sacramento, California, USA" } },
        { id: 19, type: "Movie", data: { title: "Room", releaseYear: 2015, director: "Lenny Abrahamson" } },
        { id: 20, type: "Actor", data: { name: "Leonardo DiCaprio", birthYear: 1974, birthplace: "Los Angeles, California, USA" } },
      ],
      initialPlacements: [
        { tileId: 1, position: "0-0" },
        { tileId: 0, position: "0-1" },
      ],
      solution: [
        [1, 0, 3, 2, 5],
        [4, null, 7, null, 6],
        [9, 8, 11, 10, 13],
        [12, null, 15, null, 14],
        [17, 16, 19, 18, 20]
      ],
      hints: [
        {
          id: 1,
          text: "Played real people",
          color: "#FF5733",
          relatedTiles: [6, 10, 12],
          longerDescription: "Renée Zellweger won an Oscar for portraying Judy Garland in 'Judy', Rami Malek for playing Freddie Mercury in 'Bohemian Rhapsody', and Gary Oldman for his role as Winston Churchill in 'Darkest Hour'."
        },
        {
          id: 2,
          text: "Starred in Wes Anderson films",
          color: "#33FF57",
          relatedTiles: [0, 8],
          longerDescription: "Frances McDormand appeared in Wes Anderson's 'Moonrise Kingdom' (2012) and 'Isle of Dogs' (2018), while Olivia Colman had a role in 'The Lobster' (2015), which, while not directed by Anderson, shares a similar quirky style."
        },
        {
          id: 3,
          text: "Appeared in music videos",
          color: "#3357FF",
          relatedTiles: [4, 14],
          longerDescription: "Joaquin Phoenix appeared in the music video for 'She Talks to Angels' by The Black Crowes, while Emma Stone starred in the video for 'Anna' by Will Butler."
        },
        {
          id: 4,
          text: "Roles in popular TV series",
          color: "#FF33F1",
          relatedTiles: [8, 10],
          longerDescription: "Olivia Colman played Queen Elizabeth II in 'The Crown', while Rami Malek starred as Elliot Alderson in 'Mr. Robot', both earning critical acclaim for their performances."
        },
        {
          id: 5,
          text: "Worked with same director multiple times",
          color: "#33FFF1",
          relatedTiles: [14, 20],
          longerDescription: "Emma Stone has worked with Damien Chazelle on 'La La Land' and 'Babylon', while Leonardo DiCaprio has collaborated with Martin Scorsese on numerous films including 'The Departed', 'The Wolf of Wall Street', and 'Killers of the Flower Moon'."
        },
        {
          id: 6,
          text: "Oscar for first leading role",
          color: "#FFF133",
          relatedTiles: [18, 20],
          longerDescription: "Brie Larson won the Oscar for Best Actress for her first leading role in a major film, 'Room'. Similarly, Leonardo DiCaprio, though not for his first lead role, won his first Oscar for 'The Revenant' after several nominations."
        },
        {
          id: 7,
          text: "Played comic book villains",
          color: "#8B33FF",
          relatedTiles: [4, 12],
          longerDescription: "Joaquin Phoenix won an Oscar for playing the Joker in 'Joker', while Gary Oldman portrayed Commissioner Gordon (not a villain, but a key character in Batman comics) in Christopher Nolan's Dark Knight trilogy."
        },
        {
          id: 8,
          text: "Born in 1974",
          color: "#FF3333",
          relatedTiles: [4, 8, 20],
          longerDescription: "Joaquin Phoenix, Olivia Colman, and Leonardo DiCaprio were all born in 1974, making them contemporaries in the film industry."
        },
      ]
    },
    {
      id: 4,
      name: "Sci-Fi Spectacles",
      tiles: [
        { id: 0, type: "Actor", data: { name: "Sigourney Weaver", birthYear: 1949, birthplace: "Manhattan, New York, USA" } },
        { id: 1, type: "Movie", data: { title: "Alien", releaseYear: 1979, director: "Ridley Scott" } },
        { id: 2, type: "Actor", data: { name: "Harrison Ford", birthYear: 1942, birthplace: "Chicago, Illinois, USA" } },
        { id: 3, type: "Movie", data: { title: "Blade Runner", releaseYear: 1982, director: "Ridley Scott" } },
        { id: 4, type: "Actor", data: { name: "Keanu Reeves", birthYear: 1964, birthplace: "Beirut, Lebanon" } },
        { id: 5, type: "Movie", data: { title: "The Matrix", releaseYear: 1999, director: "The Wachowskis" } },
        { id: 6, type: "Actor", data: { name: "Carrie Fisher", birthYear: 1956, birthplace: "Burbank, California, USA" } },
        { id: 7, type: "Movie", data: { title: "Star Wars: A New Hope", releaseYear: 1977, director: "George Lucas" } },
        { id: 8, type: "Actor", data: { name: "Sam Rockwell", birthYear: 1968, birthplace: "Daly City, California, USA" } },
        { id: 9, type: "Movie", data: { title: "Moon", releaseYear: 2009, director: "Duncan Jones" } },
        { id: 10, type: "Actor", data: { name: "Scarlett Johansson", birthYear: 1984, birthplace: "Manhattan, New York, USA" } },
        { id: 11, type: "Movie", data: { title: "Her", releaseYear: 2013, director: "Spike Jonze" } },
        { id: 12, type: "Actor", data: { name: "Matthew McConaughey", birthYear: 1969, birthplace: "Uvalde, Texas, USA" } },
        { id: 13, type: "Movie", data: { title: "Interstellar", releaseYear: 2014, director: "Christopher Nolan" } },
        { id: 14, type: "Actor", data: { name: "Jodie Foster", birthYear: 1962, birthplace: "Los Angeles, California, USA" } },
        { id: 15, type: "Movie", data: { title: "Contact", releaseYear: 1997, director: "Robert Zemeckis" } },
        { id: 16, type: "Actor", data: { name: "Will Smith", birthYear: 1968, birthplace: "Philadelphia, Pennsylvania, USA" } },
        { id: 17, type: "Movie", data: { title: "I, Robot", releaseYear: 2004, director: "Alex Proyas" } },
        { id: 18, type: "Actor", data: { name: "Alicia Vikander", birthYear: 1988, birthplace: "Gothenburg, Sweden" } },
        { id: 19, type: "Movie", data: { title: "Ex Machina", releaseYear: 2014, director: "Alex Garland" } },
        { id: 20, type: "Actor", data: { name: "Tom Cruise", birthYear: 1962, birthplace: "Syracuse, New York, USA" } },
      ],
      initialPlacements: [
        { tileId: 1, position: "0-0" },
        { tileId: 0, position: "0-1" },
      ],
      solution: [
        [1, 0, 3, 2, 5],
        [4, null, 7, null, 6],
        [9, 8, 11, 10, 13],
        [12, null, 15, null, 14],
        [17, 16, 19, 18, 20]
      ],
      hints: [
        {
          id: 1,
          text: "Iconic franchise roles",
          color: "#FF5733",
          relatedTiles: [0, 2, 6],
          longerDescription: "Sigourney Weaver (Ellen Ripley in 'Alien'), Harrison Ford (Rick Deckard in 'Blade Runner' and Han Solo in 'Star Wars'), and Carrie Fisher (Princess Leia in 'Star Wars') all played iconic roles in major sci-fi franchises."
        },
        {
          id: 2,
          text: "AI love interests",
          color: "#33FF57",
          relatedTiles: [10, 18],
          longerDescription: "Scarlett Johansson voiced an AI that the protagonist falls in love with in 'Her', while Alicia Vikander played an advanced AI that develops a complex relationship with a human in 'Ex Machina'."
        },
        {
          id: 3,
          text: "Ridley Scott connections",
          color: "#3357FF",
          relatedTiles: [1, 3],
          longerDescription: "Both 'Alien' and 'Blade Runner' were directed by Ridley Scott, showcasing his significant influence on the sci-fi genre."
        },
        {
          id: 4,
          text: "Space exploration themes",
          color: "#FF33F1",
          relatedTiles: [9, 13, 15],
          longerDescription: "'Moon', 'Interstellar', and 'Contact' all deal with themes of space exploration and humanity's place in the universe, albeit in very different ways."
        },
        {
          id: 5,
          text: "Born in the 1960s",
          color: "#33FFF1",
          relatedTiles: [4, 14, 16, 20],
          longerDescription: "Keanu Reeves (1964), Jodie Foster (1962), Will Smith (1968), and Tom Cruise (1962) were all born in the 1960s, coming of age during a transformative time for both film and science fiction."
        },
        {
          id: 6,
          text: "Dystopian futures",
          color: "#FFF133",
          relatedTiles: [3, 5, 17],
          longerDescription: "'Blade Runner', 'The Matrix', and 'I, Robot' all present different visions of dystopian futures where technology has significantly altered human society."
        },
        {
          id: 7,
          text: "Released in 2014",
          color: "#8B33FF",
          relatedTiles: [13, 19],
          longerDescription: "Both 'Interstellar' and 'Ex Machina' were released in 2014, a notable year for thought-provoking science fiction films."
        },
        {
          id: 8,
          text: "Child actors turned stars",
          color: "#FF3333",
          relatedTiles: [6, 14],
          longerDescription: "Both Carrie Fisher and Jodie Foster began their careers as child actors before becoming major stars in science fiction films. Foster's early role in 'Taxi Driver' (1976) and Fisher's debut in 'Shampoo' (1975) preceded their iconic sci-fi performances."
        },
      ]
    },
    {
      id: 5,
      name: "Animated Adventures",
      tiles: [
            { id: 0, type: "Actor", data: { name: "Tom Hanks", birthYear: 1956, birthplace: "Concord, California, USA" } },
            { id: 1, type: "Movie", data: { title: "Toy Story", releaseYear: 1995, director: "John Lasseter" } },
            { id: 2, type: "Actor", data: { name: "Ellen DeGeneres", birthYear: 1958, birthplace: "Metairie, Louisiana, USA" } },
            { id: 3, type: "Movie", data: { title: "Finding Nemo", releaseYear: 2003, director: "Andrew Stanton" } },
            { id: 4, type: "Actor", data: { name: "Mike Myers", birthYear: 1963, birthplace: "Scarborough, Ontario, Canada" } },
            { id: 5, type: "Movie", data: { title: "Shrek", releaseYear: 2001, director: "Andrew Adamson, Vicky Jenson" } },
            { id: 6, type: "Actor", data: { name: "Kristen Bell", birthYear: 1980, birthplace: "Huntington Woods, Michigan, USA" } },
            { id: 7, type: "Movie", data: { title: "Frozen", releaseYear: 2013, director: "Chris Buck, Jennifer Lee" } },
            { id: 8, type: "Actor", data: { name: "Robin Williams", birthYear: 1951, birthplace: "Chicago, Illinois, USA" } },
            { id: 9, type: "Movie", data: { title: "Aladdin", releaseYear: 1992, director: "Ron Clements, John Musker" } },
            { id: 10, type: "Actor", data: { name: "Craig T. Nelson", birthYear: 1944, birthplace: "Spokane, Washington, USA" } },
            { id: 11, type: "Movie", data: { title: "The Incredibles", releaseYear: 2004, director: "Brad Bird" } },
            { id: 12, type: "Actor", data: { name: "Auli'i Cravalho", birthYear: 2000, birthplace: "Kohala, Hawaii, USA" } },
            { id: 13, type: "Movie", data: { title: "Moana", releaseYear: 2016, director: "Ron Clements, John Musker" } },
            { id: 14, type: "Actor", data: { name: "Patton Oswalt", birthYear: 1969, birthplace: "Portsmouth, Virginia, USA" } },
            { id: 15, type: "Movie", data: { title: "Ratatouille", releaseYear: 2007, director: "Brad Bird" } },
            { id: 16, type: "Actor", data: { name: "Amy Poehler", birthYear: 1971, birthplace: "Newton, Massachusetts, USA" } },
            { id: 17, type: "Movie", data: { title: "Inside Out", releaseYear: 2015, director: "Pete Docter" } },
            { id: 18, type: "Actor", data: { name: "John C. Reilly", birthYear: 1965, birthplace: "Chicago, Illinois, USA" } },
            { id: 19, type: "Movie", data: { title: "Wreck-It Ralph", releaseYear: 2012, director: "Rich Moore" } },
            { id: 20, type: "Actor", data: { name: "Owen Wilson", birthYear: 1968, birthplace: "Dallas, Texas, USA" } },
          ],
          initialPlacements: [
            { tileId: 1, position: "0-0" },
            { tileId: 0, position: "0-1" },
          ],
          solution: [
            [1, 0, 3, 2, 5],
            [4, null, 7, null, 6],
            [9, 8, 11, 10, 13],
            [12, null, 15, null, 14],
            [17, 16, 19, 18, 20]
          ],
          hints: [
            {
              id: 1,
              text: "Pixar pioneers",
              color: "#FF5733",
              relatedTiles: [0, 1, 3],
              longerDescription: "Tom Hanks voiced Woody in 'Toy Story', Pixar's first feature-length film, which revolutionized animated movies. 'Finding Nemo' continued Pixar's success, showcasing their innovative storytelling and animation techniques."
            },
            {
              id: 2,
              text: "Disney Renaissance voices",
              color: "#33FF57",
              relatedTiles: [8, 9],
              longerDescription: "Robin Williams' performance as the Genie in 'Aladdin' is considered one of the greatest voice acting performances in animation history. The film was a key part of the Disney Renaissance period of the 1990s."
            },
            {
              id: 3,
              text: "Franchise starters",
              color: "#3357FF",
              relatedTiles: [1, 5, 7],
              longerDescription: "'Toy Story', 'Shrek', and 'Frozen' all launched major franchises that included multiple sequels, spin-offs, and extensive merchandising."
            },
            {
              id: 4,
              text: "Brad Bird creations",
              color: "#FF33F1",
              relatedTiles: [11, 15],
              longerDescription: "Brad Bird directed both 'The Incredibles' and 'Ratatouille', showcasing his unique storytelling style and ability to create compelling animated worlds for both superhero and culinary adventures."
            },
            {
              id: 5,
              text: "Comedy backgrounds",
              color: "#33FFF1",
              relatedTiles: [2, 4, 16],
              longerDescription: "Ellen DeGeneres, Mike Myers, and Amy Poehler all had successful careers in comedy before taking on voice acting roles in animated films, bringing their comedic timing and improvisation skills to their characters."
            },
            {
              id: 6,
              text: "Musically talented cast",
              color: "#FFF133",
              relatedTiles: [6, 12, 18],
              longerDescription: "Kristen Bell (Anna in 'Frozen'), Auli'i Cravalho (Moana), and John C. Reilly (who has performed in musicals) all showcased their singing abilities in their respective animated roles."
            },
            {
              id: 7,
              text: "Released in the 2010s",
              color: "#8B33FF",
              relatedTiles: [7, 13, 17, 19],
              longerDescription: "'Frozen' (2013), 'Moana' (2016), 'Inside Out' (2015), and 'Wreck-It Ralph' (2012) were all released in the 2010s, representing a new era of computer animation with advanced techniques and more diverse storytelling."
            },
            {
              id: 8,
              text: "Unexpected heroes",
              color: "#FF3333",
              relatedTiles: [15, 19],
              longerDescription: "Both 'Ratatouille' and 'Wreck-It Ralph' feature unlikely heroes: a rat who wants to be a chef and a video game villain who wants to be a hero. These films challenge stereotypes and explore themes of identity and following one's dreams."
            },
          ]
        },
        {
          id: 6,
          name: "Character Actors 2",
          tiles: [
            { id: 0, type: "Actor", data: { name: "Philip Seymour Hoffman", birthYear: 1967, birthplace: "Fairport, New York, USA" } },
            { id: 1, type: "Movie", data: { title: "Magnolia", releaseYear: 1999, director: "Paul Thomas Anderson" } },
            { id: 2, type: "Actor", data: { name: "John C. Reilly", birthYear: 1965, birthplace: "Chicago, Illinois, USA" } },
            { id: 3, type: "Movie", data: { title: "The Master", releaseYear: 2012, director: "Paul Thomas Anderson" } },
            { id: 4, type: "Movie", data: { title: "Boogie Nights", releaseYear: 1997, director: "Paul Thomas Anderson" } },
            { id: 5, type: "Actor", data: { name: "Amy Adams", birthYear: 1974, birthplace: "Vicenza, Italy" } },
            { id: 6, type: "Movie", data: { title: "Dear Evan Hansen", releaseYear: 2021, director: "Stephen Chbosky" } },
            { id: 7, type: "Actor", data: { name: "Julianne Moore", birthYear: 1960, birthplace: "Fort Bragg, North Carolina, USA" } },
            { id: 8, type: "Movie", data: { title: "Chicago", releaseYear: 2002, director: "Rob Marshall" } },
            { id: 9, type: "Actor", data: { name: "Catherine Zeta-Jones", birthYear: 1969, birthplace: "Swansea, Wales, UK" } },
            { id: 10, type: "Movie", data: { title: "Anchorman", releaseYear: 2004, director: "Adam McKay" } },
            { id: 11, type: "Movie", data: { title: "Crazy Stupid Love", releaseYear: 2011, director: "Glenn Ficarra, John Requa" } },
            { id: 12, type: "Actor", data: { name: "Steve Carell", birthYear: 1962, birthplace: "Concord, Massachusetts, USA" } },
            { id: 13, type: "Movie", data: { title: "Enchanted", releaseYear: 2007, director: "Kevin Lima" } },
            { id: 14, type: "Movie", data: { title: "A Single Man", releaseYear: 2009, director: "Tom Ford" } },
            { id: 15, type: "Actor", data: { name: "Patrick Dempsey", birthYear: 1966, birthplace: "Lewiston, Maine, USA" } },
            { id: 16, type: "Movie", data: { title: "Valentine's Day", releaseYear: 2010, director: "Garry Marshall" } },
            { id: 17, type: "Actor", data: { name: "Colin Firth", birthYear: 1960, birthplace: "Grayshott, Hampshire, England, UK" } },
            { id: 18, type: "Movie", data: { title: "Welcome to Marwen", releaseYear: 2018, director: "Robert Zemeckis" } },
            { id: 19, type: "Movie", data: { title: "Supernova", releaseYear: 2020, director: "Harry Macqueen" } },
            { id: 20, type: "Actor", data: { name: "Stanley Tucci", birthYear: 1960, birthplace: "Peekskill, New York, USA" } }
          ],
          initialPlacements: [
            { tileId: 0, position: "0-0" },
            { tileId: 1, position: "0-1" }
          ],
          solution: [
            [0, 1, 2, 8, 9],
            [3, null, 4, null, 10],
            [5, 6, 7, 11, 12],
            [13, null, 14, null, 18],
            [15, 16, 17, 19, 20]
          ],
          hints: [
            {
              id: 1,
              text: "Paul Thomas Anderson collaborators",
              color: "#FF5733",
              relatedTiles: [0, 2, 4],
              longerDescription: "Philip Seymour Hoffman, John C. Reilly, and Boogie Nights all represent key collaborations with director Paul Thomas Anderson."
            },
            {
              id: 2,
              text: "Musical performers",
              color: "#33FF57",
              relatedTiles: [2, 9, 15],
              longerDescription: "John C. Reilly, Catherine Zeta-Jones, and Patrick Dempsey have all performed in movie musicals - Chicago, Rock of Ages, and Enchanted respectively."
            },
            {
              id: 3,
              text: "Oscar nominees 2021-2022",
              color: "#3357FF",
              relatedTiles: [17, 19, 20],
              longerDescription: "Colin Firth and Stanley Tucci's performances in Supernova earned critical acclaim, though surprisingly not Oscar nominations."
            },
            {
              id: 4,
              text: "Born in 1960",
              color: "#FF33F1",
              relatedTiles: [7, 17, 20],
              longerDescription: "Julianne Moore, Colin Firth, and Stanley Tucci were all born in 1960."
            },
            {
              id: 5,
              text: "Superhero film actors",
              color: "#33FFF1",
              relatedTiles: [5, 7, 20],
              longerDescription: "Amy Adams (DC's Lois Lane), Julianne Moore (Kingsman), and Stanley Tucci (Captain America) have all appeared in superhero/comic book films."
            },
            {
              id: 6,
              text: "Famous redheads",
              color: "#FFF133",
              relatedTiles: [5, 7],
              longerDescription: "Amy Adams and Julianne Moore are both known for their distinctive red hair."
            },
            {
              id: 7,
              text: "Played real people",
              color: "#8B33FF",
              relatedTiles: [12, 17, 20],
              longerDescription: "Steve Carell (John du Pont in Foxcatcher), Colin Firth (King George VI), and Stanley Tucci (Stanley Child in Julie & Julia) have all portrayed historical figures."
            },
            {
              id: 8,
              text: "British-born actors",
              color: "#FF3333",
              relatedTiles: [9, 17],
              longerDescription: "Catherine Zeta-Jones and Colin Firth were both born in the United Kingdom."
            }
          ]
        },
        {
          id: 7,
          name: "Golden Age Hollywood",
          tiles: [
            // Actors (10)
            { id: 0, type: "Actor", data: { name: "Humphrey Bogart", birthYear: 1899, birthplace: "New York City, New York, USA" } },
            { id: 1, type: "Actor", data: { name: "Katharine Hepburn", birthYear: 1907, birthplace: "Hartford, Connecticut, USA" } },
            { id: 2, type: "Actor", data: { name: "Grace Kelly", birthYear: 1929, birthplace: "Philadelphia, Pennsylvania, USA" } },
            { id: 3, type: "Actor", data: { name: "Charlie Chaplin", birthYear: 1889, birthplace: "London, England, UK" } },
            { id: 4, type: "Actor", data: { name: "Gregory Peck", birthYear: 1916, birthplace: "La Jolla, California, USA" } },
            { id: 5, type: "Actor", data: { name: "Ingrid Bergman", birthYear: 1915, birthplace: "Stockholm, Sweden" } },
            { id: 6, type: "Actor", data: { name: "James Stewart", birthYear: 1908, birthplace: "Indiana, Pennsylvania, USA" } },
            { id: 7, type: "Actor", data: { name: "Audrey Hepburn", birthYear: 1929, birthplace: "Brussels, Belgium" } },
            { id: 8, type: "Actor", data: { name: "Cary Grant", birthYear: 1904, birthplace: "Bristol, England, UK" } },
            { id: 9, type: "Actor", data: { name: "Bette Davis", birthYear: 1908, birthplace: "Lowell, Massachusetts, USA" } },
            
            // Movies (11)
            { id: 10, type: "Movie", data: { title: "Casablanca", releaseYear: 1942, director: "Michael Curtiz" } },
            { id: 11, type: "Movie", data: { title: "The African Queen", releaseYear: 1951, director: "John Huston" } },
            { id: 12, type: "Movie", data: { title: "To Catch a Thief", releaseYear: 1955, director: "Alfred Hitchcock" } },
            { id: 13, type: "Movie", data: { title: "Modern Times", releaseYear: 1936, director: "Charlie Chaplin" } },
            { id: 14, type: "Movie", data: { title: "To Kill a Mockingbird", releaseYear: 1962, director: "Robert Mulligan" } },
            { id: 15, type: "Movie", data: { title: "Notorious", releaseYear: 1946, director: "Alfred Hitchcock" } },
            { id: 16, type: "Movie", data: { title: "Rear Window", releaseYear: 1954, director: "Alfred Hitchcock" } },
            { id: 17, type: "Movie", data: { title: "Roman Holiday", releaseYear: 1953, director: "William Wyler" } },
            { id: 18, type: "Movie", data: { title: "North by Northwest", releaseYear: 1959, director: "Alfred Hitchcock" } },
            { id: 19, type: "Movie", data: { title: "All About Eve", releaseYear: 1950, director: "Joseph L. Mankiewicz" } },
            { id: 20, type: "Movie", data: { title: "Vertigo", releaseYear: 1958, director: "Alfred Hitchcock" } }
          ],
          initialPlacements: [
            { tileId: 0, position: "0-0" },
            { tileId: 10, position: "0-1" }
          ],
          solution: [
            [0, 10, 5, 15, 8],    // Bogart-Casablanca-Bergman-Notorious-Grant
            [11, null, 16, null, 18],  // AfricanQueen-RearWindow-NorthByNorthwest
            [1, 17, 7, 12, 2],    // KHepburn-RomanHoliday-AHepburn-ToCatchAThief-Kelly
            [13, null, 14, null, 20],  // ModernTimes-Mockingbird-Vertigo
            [3, 19, 9, 4, 6]     // Chaplin-AllAboutEve-Davis-Peck-Stewart
          ],
          hints: [
            {
              id: 1,
              text: "Hitchcock's leading ladies",
              color: "#FF5733",
              relatedTiles: [2, 5, 12, 15],
              longerDescription: "Grace Kelly and Ingrid Bergman were both favorite leading ladies of Alfred Hitchcock, starring in classics like To Catch a Thief and Notorious."
            },
            {
              id: 2,
              text: "Academy Award winners",
              color: "#33FF57",
              relatedTiles: [1, 4, 9, 14],
              longerDescription: "Katharine Hepburn, Gregory Peck, and Bette Davis all won Academy Awards - Peck notably for To Kill a Mockingbird."
            },
            {
              id: 3,
              text: "Born in Europe",
              color: "#3357FF",
              relatedTiles: [3, 5, 7, 8],
              longerDescription: "Charlie Chaplin, Ingrid Bergman, Audrey Hepburn, and Cary Grant were all born in Europe."
            },
            {
              id: 4,
              text: "Films released in the 1950s",
              color: "#FF33F1",
              relatedTiles: [11, 12, 17, 20],
              longerDescription: "The African Queen, To Catch a Thief, Roman Holiday, and Vertigo were all released in the 1950s."
            },
            {
              id: 5,
              text: "Iconic screen couples",
              color: "#33FFF1",
              relatedTiles: [0, 5, 10, 15],
              longerDescription: "Humphrey Bogart and Ingrid Bergman created magic in both Casablanca and Notorious."
            },
            {
              id: 6,
              text: "Born in 1908",
              color: "#FFF133",
              relatedTiles: [6, 9],
              longerDescription: "James Stewart and Bette Davis were both born in 1908."
            },
            {
              id: 7,
              text: "AFI's Greatest Films",
              color: "#8B33FF",
              relatedTiles: [10, 14, 18, 20],
              longerDescription: "Casablanca, To Kill a Mockingbird, North by Northwest, and Vertigo all appear on AFI's list of greatest American films."
            },
            {
              id: 8,
              text: "Born in Pennsylvania",
              color: "#FF3333",
              relatedTiles: [2, 6],
              longerDescription: "Grace Kelly and James Stewart were both born in Pennsylvania - Philadelphia and Indiana, PA respectively."
            }
          ]
        },
        {
          id: 8,
          name: "Sci-Fi Connections",
          tiles: [
            // Actors (10)
            { id: 0, type: "Actor", data: { name: "Jodie Foster", birthYear: 1962, birthplace: "Los Angeles, California, USA" } },
            { id: 1, type: "Actor", data: { name: "Matthew McConaughey", birthYear: 1969, birthplace: "Uvalde, Texas, USA" } },
            { id: 2, type: "Actor", data: { name: "Jessica Chastain", birthYear: 1977, birthplace: "Sacramento, California, USA" } },
            { id: 3, type: "Actor", data: { name: "Anne Hathaway", birthYear: 1982, birthplace: "Brooklyn, New York, USA" } },
            { id: 4, type: "Actor", data: { name: "Matt Damon", birthYear: 1970, birthplace: "Cambridge, Massachusetts, USA" } },
            { id: 5, type: "Actor", data: { name: "Sandra Bullock", birthYear: 1964, birthplace: "Arlington, Virginia, USA" } },
            { id: 6, type: "Actor", data: { name: "George Clooney", birthYear: 1961, birthplace: "Lexington, Kentucky, USA" } },
            { id: 7, type: "Actor", data: { name: "Emily Blunt", birthYear: 1983, birthplace: "London, England, UK" } },
            { id: 8, type: "Actor", data: { name: "John Krasinski", birthYear: 1979, birthplace: "Boston, Massachusetts, USA" } },
            { id: 9, type: "Actor", data: { name: "Amy Adams", birthYear: 1974, birthplace: "Vicenza, Italy" } },

            // Movies (11)
            { id: 10, type: "Movie", data: { title: "Contact", releaseYear: 1997, director: "Robert Zemeckis" } },
            { id: 11, type: "Movie", data: { title: "Interstellar", releaseYear: 2014, director: "Christopher Nolan" } },
            { id: 12, type: "Movie", data: { title: "The Martian", releaseYear: 2015, director: "Ridley Scott" } },
            { id: 13, type: "Movie", data: { title: "Gravity", releaseYear: 2013, director: "Alfonso Cuarón" } },
            { id: 14, type: "Movie", data: { title: "Arrival", releaseYear: 2016, director: "Denis Villeneuve" } },
            { id: 15, type: "Movie", data: { title: "A Quiet Place", releaseYear: 2018, director: "John Krasinski" } },
            { id: 16, type: "Movie", data: { title: "Edge of Tomorrow", releaseYear: 2014, director: "Doug Liman" } },
            { id: 17, type: "Movie", data: { title: "Passengers", releaseYear: 2016, director: "Morten Tyldum" } },
            { id: 18, type: "Movie", data: { title: "The Day the Earth Stood Still", releaseYear: 2008, director: "Scott Derrickson" } },
            { id: 19, type: "Movie", data: { title: "The Midnight Sky", releaseYear: 2020, director: "George Clooney" } },
            { id: 20, type: "Movie", data: { title: "Sunshine", releaseYear: 2007, director: "Danny Boyle" } }
          ],
          solution: [
            [0, 10, 1, 11, 3],    // Foster-Contact-McConaughey-Interstellar-Hathaway
            [12, null, 13, null, 14],  // Martian-Gravity-Arrival
            [4, 16, 7, 15, 8],    // Damon-EdgeOfTomorrow-Blunt-QuietPlace-Krasinski
            [18, null, 17, null, 19],  // DayEarthStoodStill-Passengers-MidnightSky
            [9, 14, 5, 13, 6]     // Adams-Arrival-Bullock-Gravity-Clooney
          ],
          initialPlacements: [
            { tileId: 0, position: "0-0" },
            { tileId: 10, position: "0-1" }
          ],
          hints: [
            {
              id: 1,
              text: "Space exploration films",
              color: "#FF5733",
              relatedTiles: [10, 11, 12, 13],
              longerDescription: "Contact, Interstellar, The Martian, and Gravity all deal with human exploration of space."
            },
            {
              id: 2,
              text: "Married couples who've worked together",
              color: "#33FF57",
              relatedTiles: [7, 8, 15],
              longerDescription: "Emily Blunt and John Krasinski are married and worked together on A Quiet Place."
            },
            {
              id: 3,
              text: "Academy Award nominees for Best Picture",
              color: "#3357FF",
              relatedTiles: [11, 12, 13, 14],
              longerDescription: "Interstellar, The Martian, Gravity, and Arrival were all nominated for Best Picture."
            },
            {
              id: 4,
              text: "Starred together in space films",
              color: "#FF33F1",
              relatedTiles: [5, 6, 13],
              longerDescription: "Sandra Bullock and George Clooney starred together in Gravity."
            },
            {
              id: 5,
              text: "First contact with aliens",
              color: "#33FFF1",
              relatedTiles: [10, 14, 15],
              longerDescription: "Contact, Arrival, and A Quiet Place all deal with humanity's first contact with alien life."
            },
            {
              id: 6,
              text: "Born in Massachusetts",
              color: "#FFF133",
              relatedTiles: [4, 8],
              longerDescription: "Matt Damon and John Krasinski were both born in Massachusetts."
            },
            {
              id: 7,
              text: "Directed and starred in same film",
              color: "#8B33FF",
              relatedTiles: [6, 8, 15, 19],
              longerDescription: "George Clooney directed and starred in The Midnight Sky, while John Krasinski did the same with A Quiet Place."
            },
            {
              id: 8,
              text: "Born outside the US",
              color: "#FF3333",
              relatedTiles: [7, 9],
              longerDescription: "Emily Blunt was born in London, England, and Amy Adams was born in Vicenza, Italy."
            }
          ],
      connections: [
        {
          actorId: 0,
          movieId: 10,
          description: "Humphrey Bogart played Rick Blaine, the cynical owner of Rick's Café Américain. Ronald Reagan was originally considered for the role, and the famous 'Here's looking at you, kid' line was improvised during rehearsals."
        },
        {
          actorId: 5,  // Ingrid Bergman
          movieId: 10,  // Casablanca
          description: "Ingrid Bergman portrayed Ilsa Lund, a woman torn between two men in wartime Morocco. Bergman was actually taller than Bogart, so he had to stand on blocks during their scenes together."
        },
        {
          actorId: 1,  // Katharine Hepburn
          movieId: 11,  // The African Queen
          description: "Katharine Hepburn played Rose Sayer, a proper missionary who ventures down a treacherous river. Nearly everyone in the cast and crew got sick during filming in Africa - except Humphrey Bogart and John Huston, who drank only whiskey."
        },
        {
          actorId: 2,  // Grace Kelly
          movieId: 12,  // To Catch a Thief
          description: "Grace Kelly starred as Frances Stevens, a wealthy American tourist on the French Riviera. The film was Kelly's third and final collaboration with Hitchcock before becoming Princess of Monaco."
        },
        {
          actorId: 3,  // Charlie Chaplin
          movieId: 13,  // Modern Times
          description: "Charlie Chaplin's Little Tramp character navigates an increasingly mechanized world. The factory's feeding machine sequence took a grueling 38 takes, with Chaplin being fed real food each time."
        },
        {
          actorId: 4,  // Gregory Peck
          movieId: 14,  // To Kill a Mockingbird
          description: "Gregory Peck portrayed Atticus Finch, a principled lawyer in the American South. Author Harper Lee was so moved by his performance that she gave Peck her father's pocket watch, which he carried to the Academy Awards."
        },
        {
          actorId: 8,  // Cary Grant
          movieId: 18,  // North by Northwest
          description: "Cary Grant played Roger Thornhill, an advertising executive mistaken for a spy. The famous crop-duster scene took nine days to film, though Grant appears on screen for only a few minutes."
        },
        {
          actorId: 7,  // Audrey Hepburn
          movieId: 17,  // Roman Holiday
          description: "Audrey Hepburn starred as Princess Ann, a royal who escapes her duties for one magical day. This was Hepburn's first major role, and she won an Oscar for it - the costume designer cut her hair shorter during filming to create the iconic pixie cut."
        },
        {
          actorId: 9,  // Bette Davis
          movieId: 19,  // All About Eve
          description: "Bette Davis played Margo Channing, an aging Broadway star. The role was originally intended for Claudette Colbert, who had to drop out after injuring her back - leading to one of Davis's most memorable performances."
        },
        {
          actorId: 6,  // James Stewart
          movieId: 16,  // Rear Window
          description: "James Stewart portrayed L.B. Jefferies, a photographer confined to a wheelchair. Hitchcock built the largest indoor set at Paramount at the time, with each apartment having working electricity and plumbing."
        },
        {
          actorId: 5,  // Ingrid Bergman
          movieId: 15,  // Notorious
          description: "Ingrid Bergman played Alicia Huberman, an American spy infiltrating a Nazi organization. The famous kiss scene skirted the Production Code's three-second limit by having Grant and Bergman break apart every three seconds while continuing to embrace and talk."
        },
        {
          actorId: 8,  // Cary Grant
          movieId: 15,  // Notorious
          description: "Cary Grant portrayed T.R. Devlin, a government agent who recruits Alicia. Hitchcock used innovative camera techniques to film Grant from Bergman's perspective, creating a sense of power dynamics between the characters."
        },
        {
          actorId: 1,  // Katharine Hepburn
          movieId: 11,  // The African Queen
          description: "Katharine Hepburn wrote a book about making the film called 'The Making of The African Queen: Or How I Went to Africa with Bogart, Bacall and Huston and Almost Lost My Mind'. She did many of her own stunts despite the challenging conditions."
        },
        {
          actorId: 7,  // Audrey Hepburn
          movieId: 12,  // To Catch a Thief
          description: "Audrey Hepburn brought charm and elegance to the role of Regina Lampert. The film's costume designer Edith Head created over 150 costumes for Hepburn, setting new trends in 1960s fashion."
        },
        {
          actorId: 2,  // Grace Kelly
          movieId: 12,  // To Catch a Thief
          description: "Grace Kelly played Frances Stevens with such sophistication that Hitchcock called her a 'snow-covered volcano'. The film's stunning French Riviera locations were partly what inspired Kelly's later life as Princess of Monaco."
        },
        {
          actorId: 3,  // Charlie Chaplin
          movieId: 13,  // Modern Times
          description: "Charlie Chaplin directed and starred in this film, his last appearance as the Little Tramp. Though it was a 'silent' film made in the sound era, Chaplin used sound effects and composed the famous 'Smile' melody that became a popular song."
        },
        {
          actorId: 4,  // Gregory Peck
          movieId: 14,  // To Kill a Mockingbird
          description: "Gregory Peck's portrayal of Atticus Finch was voted the greatest hero in American film by the AFI. Harper Lee visited the set just once and left in tears because Peck reminded her so much of her father."
        },
        {
          actorId: 6,  // James Stewart
          movieId: 20,  // Vertigo
          description: "James Stewart played John 'Scottie' Ferguson, a detective with an intense fear of heights. The revolutionary 'vertigo effect' was created by simultaneously zooming in and pulling the camera back, a technique now known as the 'dolly zoom'."
        },
        {
          actorId: 9,  // Bette Davis
          movieId: 19,  // All About Eve
          description: "Bette Davis delivered the immortal 'Fasten your seatbelts' line with perfect timing. The film holds the record for most female acting Oscar nominations from a single film, with four."
        },
        {
          actorId: 4,  // Gregory Peck
          movieId: 20,  // Vertigo
          description: "Gregory Peck worked with Hitchcock to create the complex character of Scottie Ferguson. The film was considered a commercial and critical disappointment on release but is now often cited as Hitchcock's masterpiece."
        },
        {
          actorId: 6,  // James Stewart
          movieId: 16,  // Rear Window
          description: "James Stewart spent the entire shoot confined to a wheelchair to maintain authenticity. The elaborate apartment complex set cost more than most entire feature films of the time to construct."
        }
      ]
    },
    {
      id: 6,
      name: "Character Actors 2",
      tiles: [
        { id: 0, type: "Actor", data: { name: "Philip Seymour Hoffman", birthYear: 1967, birthplace: "Fairport, New York, USA" } },
        { id: 1, type: "Movie", data: { title: "Magnolia", releaseYear: 1999, director: "Paul Thomas Anderson" } },
        { id: 2, type: "Actor", data: { name: "John C. Reilly", birthYear: 1965, birthplace: "Chicago, Illinois, USA" } },
        { id: 3, type: "Movie", data: { title: "The Master", releaseYear: 2012, director: "Paul Thomas Anderson" } },
        { id: 4, type: "Movie", data: { title: "Boogie Nights", releaseYear: 1997, director: "Paul Thomas Anderson" } },
        { id: 5, type: "Actor", data: { name: "Amy Adams", birthYear: 1974, birthplace: "Vicenza, Italy" } },
        { id: 6, type: "Movie", data: { title: "Dear Evan Hansen", releaseYear: 2021, director: "Stephen Chbosky" } },
        { id: 7, type: "Actor", data: { name: "Julianne Moore", birthYear: 1960, birthplace: "Fort Bragg, North Carolina, USA" } },
        { id: 8, type: "Movie", data: { title: "Chicago", releaseYear: 2002, director: "Rob Marshall" } },
        { id: 9, type: "Actor", data: { name: "Catherine Zeta-Jones", birthYear: 1969, birthplace: "Swansea, Wales, UK" } },
        { id: 10, type: "Movie", data: { title: "Anchorman", releaseYear: 2004, director: "Adam McKay" } },
        { id: 11, type: "Movie", data: { title: "Crazy Stupid Love", releaseYear: 2011, director: "Glenn Ficarra, John Requa" } },
        { id: 12, type: "Actor", data: { name: "Steve Carell", birthYear: 1962, birthplace: "Concord, Massachusetts, USA" } },
        { id: 13, type: "Movie", data: { title: "Enchanted", releaseYear: 2007, director: "Kevin Lima" } },
        { id: 14, type: "Movie", data: { title: "A Single Man", releaseYear: 2009, director: "Tom Ford" } },
        { id: 15, type: "Actor", data: { name: "Patrick Dempsey", birthYear: 1966, birthplace: "Lewiston, Maine, USA" } },
        { id: 16, type: "Movie", data: { title: "Valentine's Day", releaseYear: 2010, director: "Garry Marshall" } },
        { id: 17, type: "Actor", data: { name: "Colin Firth", birthYear: 1960, birthplace: "Grayshott, Hampshire, England, UK" } },
        { id: 18, type: "Movie", data: { title: "Welcome to Marwen", releaseYear: 2018, director: "Robert Zemeckis" } },
        { id: 19, type: "Movie", data: { title: "Supernova", releaseYear: 2020, director: "Harry Macqueen" } },
        { id: 20, type: "Actor", data: { name: "Stanley Tucci", birthYear: 1960, birthplace: "Peekskill, New York, USA" } }
      ],
      initialPlacements: [
        { tileId: 0, position: "0-0" },
        { tileId: 1, position: "0-1" }
      ],
      solution: [
        [0, 1, 2, 8, 9],
        [3, null, 4, null, 10],
        [5, 6, 7, 11, 12],
        [13, null, 14, null, 18],
        [15, 16, 17, 19, 20]
      ],
      hints: [
        {
          id: 1,
          text: "Paul Thomas Anderson collaborators",
          color: "#FF5733",
          relatedTiles: [0, 2, 4],
          longerDescription: "Philip Seymour Hoffman, John C. Reilly, and Boogie Nights all represent key collaborations with director Paul Thomas Anderson."
        },
        {
          id: 2,
          text: "Musical performers",
          color: "#33FF57",
          relatedTiles: [2, 9, 15],
          longerDescription: "John C. Reilly, Catherine Zeta-Jones, and Patrick Dempsey have all performed in movie musicals - Chicago, Rock of Ages, and Enchanted respectively."
        },
        {
          id: 3,
          text: "Oscar nominees 2021-2022",
          color: "#3357FF",
          relatedTiles: [17, 19, 20],
          longerDescription: "Colin Firth and Stanley Tucci's performances in Supernova earned critical acclaim, though surprisingly not Oscar nominations."
        },
        {
          id: 4,
          text: "Born in 1960",
          color: "#FF33F1",
          relatedTiles: [7, 17, 20],
          longerDescription: "Julianne Moore, Colin Firth, and Stanley Tucci were all born in 1960."
        },
        {
          id: 5,
          text: "Superhero film actors",
          color: "#33FFF1",
          relatedTiles: [5, 7, 20],
          longerDescription: "Amy Adams (DC's Lois Lane), Julianne Moore (Kingsman), and Stanley Tucci (Captain America) have all appeared in superhero/comic book films."
        },
        {
          id: 6,
          text: "Famous redheads",
          color: "#FFF133",
          relatedTiles: [5, 7],
          longerDescription: "Amy Adams and Julianne Moore are both known for their distinctive red hair."
        },
        {
          id: 7,
          text: "Played real people",
          color: "#8B33FF",
          relatedTiles: [12, 17, 20],
          longerDescription: "Steve Carell (John du Pont in Foxcatcher), Colin Firth (King George VI), and Stanley Tucci (Stanley Child in Julie & Julia) have all portrayed historical figures."
        },
        {
          id: 8,
          text: "British-born actors",
          color: "#FF3333",
          relatedTiles: [9, 17],
          longerDescription: "Catherine Zeta-Jones and Colin Firth were both born in the United Kingdom."
        }
      ]
    },
    {
      id: 7,
      name: "Golden Age Hollywood",
      tiles: [
        // Actors (10)
        { id: 0, type: "Actor", data: { name: "Humphrey Bogart", birthYear: 1899, birthplace: "New York City, New York, USA" } },
        { id: 1, type: "Actor", data: { name: "Katharine Hepburn", birthYear: 1907, birthplace: "Hartford, Connecticut, USA" } },
        { id: 2, type: "Actor", data: { name: "Grace Kelly", birthYear: 1929, birthplace: "Philadelphia, Pennsylvania, USA" } },
        { id: 3, type: "Actor", data: { name: "Charlie Chaplin", birthYear: 1889, birthplace: "London, England, UK" } },
        { id: 4, type: "Actor", data: { name: "Gregory Peck", birthYear: 1916, birthplace: "La Jolla, California, USA" } },
        { id: 5, type: "Actor", data: { name: "Ingrid Bergman", birthYear: 1915, birthplace: "Stockholm, Sweden" } },
        { id: 6, type: "Actor", data: { name: "James Stewart", birthYear: 1908, birthplace: "Indiana, Pennsylvania, USA" } },
        { id: 7, type: "Actor", data: { name: "Audrey Hepburn", birthYear: 1929, birthplace: "Brussels, Belgium" } },
        { id: 8, type: "Actor", data: { name: "Cary Grant", birthYear: 1904, birthplace: "Bristol, England, UK" } },
        { id: 9, type: "Actor", data: { name: "Bette Davis", birthYear: 1908, birthplace: "Lowell, Massachusetts, USA" } },
        
        // Movies (11)
        { id: 10, type: "Movie", data: { title: "Casablanca", releaseYear: 1942, director: "Michael Curtiz" } },
        { id: 11, type: "Movie", data: { title: "The African Queen", releaseYear: 1951, director: "John Huston" } },
        { id: 12, type: "Movie", data: { title: "To Catch a Thief", releaseYear: 1955, director: "Alfred Hitchcock" } },
        { id: 13, type: "Movie", data: { title: "Modern Times", releaseYear: 1936, director: "Charlie Chaplin" } },
        { id: 14, type: "Movie", data: { title: "To Kill a Mockingbird", releaseYear: 1962, director: "Robert Mulligan" } },
        { id: 15, type: "Movie", data: { title: "Notorious", releaseYear: 1946, director: "Alfred Hitchcock" } },
        { id: 16, type: "Movie", data: { title: "Rear Window", releaseYear: 1954, director: "Alfred Hitchcock" } },
        { id: 17, type: "Movie", data: { title: "Roman Holiday", releaseYear: 1953, director: "William Wyler" } },
        { id: 18, type: "Movie", data: { title: "North by Northwest", releaseYear: 1959, director: "Alfred Hitchcock" } },
        { id: 19, type: "Movie", data: { title: "All About Eve", releaseYear: 1950, director: "Joseph L. Mankiewicz" } },
        { id: 20, type: "Movie", data: { title: "Vertigo", releaseYear: 1958, director: "Alfred Hitchcock" } }
      ],
      initialPlacements: [
        { tileId: 0, position: "0-0" },
        { tileId: 10, position: "0-1" }
      ],
      solution: [
        [0, 10, 5, 15, 8],    // Bogart-Casablanca-Bergman-Notorious-Grant
        [11, null, 16, null, 18],  // AfricanQueen-RearWindow-NorthByNorthwest
        [1, 17, 7, 12, 2],    // KHepburn-RomanHoliday-AHepburn-ToCatchAThief-Kelly
        [13, null, 14, null, 20],  // ModernTimes-Mockingbird-Vertigo
        [3, 19, 9, 4, 6]     // Chaplin-AllAboutEve-Davis-Peck-Stewart
      ],
      hints: [
        {
          id: 1,
          text: "Hitchcock's leading ladies",
          color: "#FF5733",
          relatedTiles: [2, 5, 12, 15],
          longerDescription: "Grace Kelly and Ingrid Bergman were both favorite leading ladies of Alfred Hitchcock, starring in classics like To Catch a Thief and Notorious."
        },
        {
          id: 2,
          text: "Academy Award winners",
          color: "#33FF57",
          relatedTiles: [1, 4, 9, 14],
          longerDescription: "Katharine Hepburn, Gregory Peck, and Bette Davis all won Academy Awards - Peck notably for To Kill a Mockingbird."
        },
        {
          id: 3,
          text: "Born in Europe",
          color: "#3357FF",
          relatedTiles: [3, 5, 7, 8],
          longerDescription: "Charlie Chaplin, Ingrid Bergman, Audrey Hepburn, and Cary Grant were all born in Europe."
        },
        {
          id: 4,
          text: "Films released in the 1950s",
          color: "#FF33F1",
          relatedTiles: [11, 12, 17, 20],
          longerDescription: "The African Queen, To Catch a Thief, Roman Holiday, and Vertigo were all released in the 1950s."
        },
        {
          id: 5,
          text: "Iconic screen couples",
          color: "#33FFF1",
          relatedTiles: [0, 5, 10, 15],
          longerDescription: "Humphrey Bogart and Ingrid Bergman created magic in both Casablanca and Notorious."
        },
        {
          id: 6,
          text: "Born in 1908",
          color: "#FFF133",
          relatedTiles: [6, 9],
          longerDescription: "James Stewart and Bette Davis were both born in 1908."
        },
        {
          id: 7,
          text: "AFI's Greatest Films",
          color: "#8B33FF",
          relatedTiles: [10, 14, 18, 20],
          longerDescription: "Casablanca, To Kill a Mockingbird, North by Northwest, and Vertigo all appear on AFI's list of greatest American films."
        },
        {
          id: 8,
          text: "Born in Pennsylvania",
          color: "#FF3333",
          relatedTiles: [2, 6],
          longerDescription: "Grace Kelly and James Stewart were both born in Pennsylvania - Philadelphia and Indiana, PA respectively."
        }
      ]
    },
    {
      id: 8,
      name: "Sci-Fi Connections",
      tiles: [
        // Actors (10)
        { id: 0, type: "Actor", data: { name: "Jodie Foster", birthYear: 1962, birthplace: "Los Angeles, California, USA" } },
        { id: 1, type: "Actor", data: { name: "Matthew McConaughey", birthYear: 1969, birthplace: "Uvalde, Texas, USA" } },
        { id: 2, type: "Actor", data: { name: "Jessica Chastain", birthYear: 1977, birthplace: "Sacramento, California, USA" } },
        { id: 3, type: "Actor", data: { name: "Anne Hathaway", birthYear: 1982, birthplace: "Brooklyn, New York, USA" } },
        { id: 4, type: "Actor", data: { name: "Matt Damon", birthYear: 1970, birthplace: "Cambridge, Massachusetts, USA" } },
        { id: 5, type: "Actor", data: { name: "Sandra Bullock", birthYear: 1964, birthplace: "Arlington, Virginia, USA" } },
        { id: 6, type: "Actor", data: { name: "George Clooney", birthYear: 1961, birthplace: "Lexington, Kentucky, USA" } },
        { id: 7, type: "Actor", data: { name: "Emily Blunt", birthYear: 1983, birthplace: "London, England, UK" } },
        { id: 8, type: "Actor", data: { name: "John Krasinski", birthYear: 1979, birthplace: "Boston, Massachusetts, USA" } },
        { id: 9, type: "Actor", data: { name: "Amy Adams", birthYear: 1974, birthplace: "Vicenza, Italy" } },

        // Movies (11)
        { id: 10, type: "Movie", data: { title: "Contact", releaseYear: 1997, director: "Robert Zemeckis" } },
        { id: 11, type: "Movie", data: { title: "Interstellar", releaseYear: 2014, director: "Christopher Nolan" } },
        { id: 12, type: "Movie", data: { title: "The Martian", releaseYear: 2015, director: "Ridley Scott" } },
        { id: 13, type: "Movie", data: { title: "Gravity", releaseYear: 2013, director: "Alfonso Cuarón" } },
        { id: 14, type: "Movie", data: { title: "Arrival", releaseYear: 2016, director: "Denis Villeneuve" } },
        { id: 15, type: "Movie", data: { title: "A Quiet Place", releaseYear: 2018, director: "John Krasinski" } },
        { id: 16, type: "Movie", data: { title: "Edge of Tomorrow", releaseYear: 2014, director: "Doug Liman" } },
        { id: 17, type: "Movie", data: { title: "Passengers", releaseYear: 2016, director: "Morten Tyldum" } },
        { id: 18, type: "Movie", data: { title: "The Day the Earth Stood Still", releaseYear: 2008, director: "Scott Derrickson" } },
        { id: 19, type: "Movie", data: { title: "The Midnight Sky", releaseYear: 2020, director: "George Clooney" } },
        { id: 20, type: "Movie", data: { title: "Sunshine", releaseYear: 2007, director: "Danny Boyle" } }
      ],
      solution: [
        [0, 10, 1, 11, 3],    // Foster-Contact-McConaughey-Interstellar-Hathaway
        [12, null, 13, null, 14],  // Martian-Gravity-Arrival
        [4, 16, 7, 15, 8],    // Damon-EdgeOfTomorrow-Blunt-QuietPlace-Krasinski
        [18, null, 17, null, 19],  // DayEarthStoodStill-Passengers-MidnightSky
        [9, 14, 5, 13, 6]     // Adams-Arrival-Bullock-Gravity-Clooney
      ],
      initialPlacements: [
        { tileId: 0, position: "0-0" },
        { tileId: 10, position: "0-1" }
      ],
      hints: [
        {
          id: 1,
          text: "Space exploration films",
          color: "#FF5733",
          relatedTiles: [10, 11, 12, 13],
          longerDescription: "Contact, Interstellar, The Martian, and Gravity all deal with human exploration of space."
        },
        {
          id: 2,
          text: "Married couples who've worked together",
          color: "#33FF57",
          relatedTiles: [7, 8, 15],
          longerDescription: "Emily Blunt and John Krasinski are married and worked together on A Quiet Place."
        },
        {
          id: 3,
          text: "Academy Award nominees for Best Picture",
          color: "#3357FF",
          relatedTiles: [11, 12, 13, 14],
          longerDescription: "Interstellar, The Martian, Gravity, and Arrival were all nominated for Best Picture."
        },
        {
          id: 4,
          text: "Starred together in space films",
          color: "#FF33F1",
          relatedTiles: [5, 6, 13],
          longerDescription: "Sandra Bullock and George Clooney starred together in Gravity."
        },
        {
          id: 5,
          text: "First contact with aliens",
          color: "#33FFF1",
          relatedTiles: [10, 14, 15],
          longerDescription: "Contact, Arrival, and A Quiet Place all deal with humanity's first contact with alien life."
        },
        {
          id: 6,
          text: "Born in Massachusetts",
          color: "#FFF133",
          relatedTiles: [4, 8],
          longerDescription: "Matt Damon and John Krasinski were both born in Massachusetts."
        },
        {
          id: 7,
          text: "Directed and starred in same film",
          color: "#8B33FF",
          relatedTiles: [6, 8, 15, 19],
          longerDescription: "George Clooney directed and starred in The Midnight Sky, while John Krasinski did the same with A Quiet Place."
        },
        {
          id: 8,
          text: "Born outside the US",
          color: "#FF3333",
          relatedTiles: [7, 9],
          longerDescription: "Emily Blunt was born in London, England, and Amy Adams was born in Vicenza, Italy."
        }
      ]
    }
  ];