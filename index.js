// search field
const searchField = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  //    error message showing
  if (searchText === '') {
    const noResult = document.getElementById('no-Result');
    noResult.textContent='';
    const h4 = document.createElement('h4');
    h4.innerHTML = `No Results Found`;
    noResult.appendChild(h4);
  }
   else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.docs));
  }
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => totalBook(data.numFound));   
};

// display search result
const displaySearchResult = (books) => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  //   searchResult.innerHTML='';
  // for (const book of books)
  books.forEach(book=> {
    const div = document.createElement('div');
    div.innerHTML = `<div class="card h-100 ">
            <img style="height: 300px;" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
               <p class="card-text">First published: ${book.first_publish_year}</p>
               <p class="card-text">Author Name: ${book.author_name}</p>
               <p class="card-text">Publisher Name: ${book.publisher}</p>
            </div>
          </div>
        </div>`;
    searchResult.appendChild(div);
  }
  )
};
//book number result
const totalBook = (booknum) => {
  const bookNum = document.getElementById('BookNum');
   bookNum.textContent='';
  const div = document.createElement('div');
  div.innerHTML = `Total Book found:  ${booknum}`;
  bookNum.appendChild(div);
};

