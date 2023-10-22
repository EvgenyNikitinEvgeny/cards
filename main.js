// Отримайте дані про записи (замініть цей об'єкт на реальні дані)
let postsData = [
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису 1",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },
  {
      "title": "Заголовок запису",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "button": "Виконати"
  },

 
]


document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо контейнер для карток записів
 let postCardsContainer = document.getElementById("post-cards-container");

  

  // Додаємо кожну картку запису до контейнера
  postsData.forEach(function (post) {
      let postCard = document.createElement("div");
      postCard.classList.add("post-card");

      let postIcon = document.createElement("img");
      postIcon.src = post.icon; // Відтворення іконки
      postIcon.classList.add("post-icon");

      let postTitle = document.createElement("h2");
      postTitle.textContent = post.title; // Заголовок запису
      postTitle.classList.add("post-title")

      let postDescription = document.createElement("p");
      postDescription.textContent = post.description; // Короткий опис запису
      postDescription.classList.add("post-description")

      let postButton = document.createElement("a");
      postButton.textContent = post.button; // Кнопка "Виконати"
      postButton.classList.add("post-button")

      postCard.appendChild(postIcon);
      postCard.appendChild(postTitle);
      postCard.appendChild(postDescription);
      postCard.appendChild(postButton);

      postCardsContainer.appendChild(postCard);
  });
});
