let books=
[
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, copies: 5 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, copies: 7 },
  { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988, copies: 2 },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, copies: 4 },
  { title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", year: 1976, copies: 1 },
  { title: "The Origin of Species", author: "Charles Darwin", genre: "Science", year: 1859, copies: 3 }
];

function LibraryBookManagement(books){
  
  let popularGenre={}
  let sum=0
  let bag=[]
  
  for(let i=0;i<books.length;i++){
    
    //MostPopularGenre
    if(popularGenre[books[i].genre]==undefined){
      popularGenre[books[i].genre]=books[i].copies
    }
    else{
      popularGenre[books[i].genre]+=books[i].copies
    }
    
    //average
    sum+=books[i].year
    
    //books with copies less than 3
    if(books[i].copies<3)
    bag.push(books[i].title)
  
  }
  let avg=Math.floor(sum/books.length)

  
  let max=""
  for(let keys in popularGenre ){
    if (max==""){
      max=keys
    }
    else{
      if(popularGenre[keys]>popularGenre[max]){
      max= keys
      }
    }
    
  }
  console.log("Most popular genre: "+ max)
  console.log("Average publication year: "+avg)
  console.log("Books with low availability: [" + bag + "]")
}
LibraryBookManagement(books)


