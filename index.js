const data = "https://jsonplaceholder.typicode.com/posts";

const getPosts = () => {
    fetch(data)
    .then((response) => response.json())
    .then((posts) => {
    console.log(`Знайдено ${posts.length} постів, перший: ${posts[0].title}`);
    })
    .catch((error) => {
        console.error("Сталася помилка при завантаженні:", error);
    })
};

getPosts();

const loadPosts = async() => {
    try {
        const response = await fetch(data);
        const posts = await response.json();
        console.log(`Знайдено ${posts.length} постів, перший: ${posts[0].title}`);
  } catch (error) {
    console.error("Спрацював try/catch! Помилка:", error.message);
  }
};

loadPosts();