//Array de posts ( dá para adicionar mais posts)
const posts = [
    {
        title: "Meu primeiro post !",
        content: "Este é o conteúdo do meu primeiro post.",
        date: "11 de junho de 2023"
    },
    {
        title: "Esse é o meu segundo post !",
        content: "Esse é o conteúdo do meu segundo post.",
        date:"16 de junho de 2023"
    }
];

//Função para exibir os posts na página
function displayPosts() {
    const postsContainer = document.getElementById('posts');

    //Limpar o conteúdo anterior
    postsContainer.innerHTML = '';

    //Iterar sobre os posts e criar elementos HTML para cada post
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        postElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        dateElement.textContent = post.date;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(dateElement);

        postsContainer.appendChild(postElement);
    });
}

//Chamar a função para exibir os posts na página
displayPosts();