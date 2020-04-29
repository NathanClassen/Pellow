# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create title: "First board"

list1 = List.create title: "first list", board: board1
list2 = List.create title: "second list", board: board1

card1 = Card.create title: "first card", description: "Research ffmpeg", due_date: "2017-10-06T23:08:28.375Z", list: list1, labels: ["red", "blue"]
card2 = Card.create title: "second card", description: "Spin up Lambdas", due_date: "2017-10-06T23:08:28.375Z", list: list1, labels: ["red", "green", "yellow"]
card3 = Card.create title: "third card", description: "Contact exCamera crew", due_date: "2017-10-06T23:08:28.375Z", list: list2, labels: ["red", "blue"]
card4 = Card.create title: "fourth card", description: "Look into mu framework", due_date: "2017-10-06T23:08:28.375Z", list: list2, labels: []
card5 = Card.create title: "fifth card", description: nil, due_date: "2017-10-06T23:08:28.375Z", list: list2, labels: ["purple"]

comment1 = Comment.create card: card1 , text: "A comment"
comment2 = Comment.create card: card2 , text: "Another comment"
comment3 = Comment.create card: card3 , text: "A new comment"
