let games = [
  { id: 1, title: "testing one", platform: ["PSS", "Xbox"] },
  { id: 2, title: "testing two", platform: ["PC"] },
  { id: 3, title: "testing three", platform: ["Switch"] },
];

let authors = [
  { id: 1, name: "usman", verified: true },
  { id: 2, name: "siraj", verified: true },
  { id: 3, name: "royal", verified: false },
];

let review = [
  { id: 1, rating: 4, content: "content one", authorId: 1, gameId: 3 },
  { id: 2, rating: 3, content: "content two", authorId: 3, gameId: 1 },
  { id: 3, rating: 2, content: "content three", authorId: 2, gameId: 2 },
];

export { games, authors, review };
