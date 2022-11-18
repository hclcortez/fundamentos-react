import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({content,onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDelteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(state => state+1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/hclcortez.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Hover Cortez Leite</strong>
                            <time title="13 de Março às 11:20" dateTime="2022-05-11 08:30:00">Publicado há 1h</time>
                        </div>

                        <button onClick={handleDelteComment} title='Deletar comentário'>
                            <Trash size={24 } />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                         <ThumbsUp />
                         Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}