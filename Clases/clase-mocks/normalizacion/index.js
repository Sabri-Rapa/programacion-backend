const { schema, normalize, denormalize } = require("normalizr");

// const blogpost = {
//   id: "1",
//   title: "My blog post",
//   description: "Short blogpost description",
//   content: "Hello world",
//   author: {
//     id: "1",
//     name: "John Doe",
//   },
//   comments: [
//     {
//       id: "1",
//       author: "Rob",
//       content: "Nice post!",
//     },
//     {
//       id: "2",
//       author: "Jane",
//       content: "I totally agree with you!",
//     },
//   ],
// };

// // Definimos un esquema de usuarios (autores y comentadores)
// const authorSchema = new schema.Entity("authors");

// // Definimos un esquema de comentadores
// const commentSchema = new schema.Entity("comments");

// // Definimos un esquema de artículos
// const postSchema = new schema.Entity("posts", {
//   author: authorSchema,
//   comments: [commentSchema],
// });

// const normalizedBlogpost = normalize(blogpost, postSchema);

// console.log(normalizedBlogpost);

// const denormalizedBlogpost = denormalize(
//   normalizedBlogpost.result,
//   postSchema,
//   normalizedBlogpost.entities
// );

// console.log(denormalizedBlogpost);

const originalData = {
  id: "999",
  posts: [
    {
      id: "123",
      author: {
        id: "1",
        nombre: "Pablo",
        apellido: "Perez",
        DNI: "20442654",
        direccion: "CABA 123",
        telefono: "1567876547",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543",
          },
        },
        {
          id: "325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542",
          },
        },
      ],
    },
    {
      id: "1123",
      author: {
        id: "2",
        nombre: "Nicole",
        apellido: "Gonzalez",
        DNI: "20442638",
        direccion: "CABA 456",
        telefono: "1567811543",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "1324",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547",
          },
        },
        {
          id: "1325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542",
          },
        },
      ],
    },
    {
      id: "2123",
      author: {
        id: "3",
        nombre: "Pedro",
        apellido: "Mei",
        DNI: "20446938",
        direccion: "CABA 789",
        telefono: "1567291542",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "2324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543",
          },
        },
        {
          id: "2325",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547",
          },
        },
      ],
    },
  ],
};

const user = new schema.Entity('users')

const comment = new schema.Entity('comments', {
    commenter: user
})


const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
})


const posts = new schema.Entity('posts', {
    posts: [article]
})

const dataUser = normalize(originalData, user)
console.log('dataUser', dataUser)

const dataComment = normalize(originalData, comment)
console.log('dataComment', dataComment)

const dataArticle = normalize(originalData, article)
console.log('dataArticle', dataArticle)

const dataPosts = normalize(originalData, posts)
console.log('dataPosts', dataPosts)


