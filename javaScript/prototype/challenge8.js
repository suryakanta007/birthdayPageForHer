function Library() {
    // Initialize books property
    this.books = []
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function (book){
    this.books.push(book)
}

// Define findBook method on Library's prototype
Library.prototype.findBook  = function (title){
  let result = this.books.find((item)=>item===title);
  console.log(result)
  if(result !== undefined){
    return "Book found"
  }else {
    return "Book not found"
  }
}


let obj = new Library();
obj.addBook("Harray porter");
obj.addBook("book2")

console.log(obj.findBook("Harray porter"));