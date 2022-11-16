import { Header } from "./components/Header/Header"


import './App.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hclcortez.png',
      name: 'Hover Cortez Leite',
      role: 'Software Development'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non dolor nesciunt eveniet provident modi architecto, quo cupiditate in, voluptas repudiandae.' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non.' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#projetonovo' }
    ],
    publishAt: new Date('2022-10-24 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/distu.png',
      name: 'João da Silva',
      role: 'Software Development'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non dolor nesciunt eveniet provident modi architecto, quo cupiditate in, voluptas repudiandae.' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non.' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#projetonovo' }
    ],
    publishAt: new Date('2022-10-20 20:00:00')
  },
]

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

