function addfavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName)
    }
}
function printFavoriteBooks() {
    console.log(
        `favorite Books: ${favoriteBooks.length}`
    );
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
    // this is a function that prints the arguments in the loops
}
var favoriteBooks = [];
addfavoriteBook("A song of Ice  and Fire");
addfavoriteBook("The Grear  Gatsby");
addfavoriteBook("Crime & Punishment");
addfavoriteBook("Great Expections");
addfavoriteBook("You Don't Know JS");
console.log(favoriteBooks);
printFavoriteBooks();
// TODO: print out favorite books;