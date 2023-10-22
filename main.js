// Отримаємо дані про записи (замініть цей об'єкт на реальні дані)
let postsData = [
  {
      "id": "1",
      "title": "Заголовок запису 1",
      "description": "Короткий опис запису 1",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "2",
      "title": "Заголовок запису 2",
      "description": "Короткий опис запису 2",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "3",
      "title": "Заголовок запису 3",
      "description": "Короткий опис запису 3",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "4",
      "title": "Заголовок запису 4",
      "description": "Короткий опис запису 4",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "5",
      "title": "Заголовок запису 5",
      "description": "Короткий опис запису 5",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "6",
      "title": "Заголовок запису 6",
      "description": "Короткий опис запису 6",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "7",
      "title": "Заголовок запису 7",
      "description": "Короткий опис запису 7",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "8",
      "title": "Заголовок запису 8",
      "description": "Короткий опис запису 8",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "9",
      "title": "Заголовок запису 9",
      "description": "Короткий опис запису 9",
      "icon": "./pen2.png",
      "link": "Виконати"
  },
  {
      "id": "10",
      "title": "Заголовок запису 10",
      "description": "Короткий опис запису 10",
      "icon": "./pen2.png",
      "link": "Виконати"
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
      postButton.textContent = post.link; // Кнопка "Виконати"
      postButton.addEventListener("click", () => {
        showDetails(post);
       
      }),

       postButton.classList.add("post-link");

      postCard.append(postIcon);
      postCard.append(postTitle);
      postCard.append(postDescription);
      postCard.append(postButton);

      postCardsContainer.append(postCard);
  });
});


  // Функція для відображення детальної інформації картки
function showDetails(post) {

  const newPage = window.open("", "_blank");
  newPage.document.write(`<h1>${post.title}</h1>`);
  newPage.document.write(`<p>${post.description}</p>`);
  
}
