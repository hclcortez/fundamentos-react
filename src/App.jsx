import { Header } from "./components/Header/Header"


import './App.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

