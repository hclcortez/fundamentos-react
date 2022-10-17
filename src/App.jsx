import { Header } from "./components/Header/Header"
import { Post } from "./Post"

import './App.css';

export function App() {

  return (
    <div>

      <Header />

      <Post 
        author="Hover" 
        content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ad in dolorem saepe? Ut et nobis pariatur id voluptatibus. Consectetur, iste ipsum maxime deserunt explicabo earum ab eum dignissimos non."
      />

<Post 
        author="Joana" 
        content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ad in dolorem saepe? Ut et nobis pariatur id voluptatibus. Consectetur, iste ipsum maxime deserunt explicabo earum ab eum dignissimos non."
      />
    </div>
  )
}

