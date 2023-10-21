document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const postsList = document.getElementById("posts-list");

  searchBtn.addEventListener("click", function() {
      const query = searchInput.value.trim().toLowerCase();
      fetchPosts(query);
  });

  function fetchPosts(query = "") {
      postsList.innerHTML = ""; // Limpiar la lista existente
      fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .then(posts => {
              const filteredPosts = query ?
                  posts.filter(post => post.title.toLowerCase().includes(query)) :
                  posts;

              filteredPosts.forEach(post => {
                  const listItem = document.createElement("li");
                  listItem.textContent = post.title;
                  postsList.appendChild(listItem);
              });
          })
          .catch(error => {
              console.error("Error fetching posts:", error);
          });
  }

  // Cargar posts al iniciar
  fetchPosts();
});