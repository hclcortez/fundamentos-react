import { format, formatDistanceToNow } from 'date-fns'
import  ptBr  from 'date-fns/locale/pt-BR'
import { useState } from 'react'


import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post(props) {


    const [comments, setComments]  = useState([
        1,2
    ])

    const puslishedDateFormatted = format(props.publishAt, "d 'de' LLLL 'às' HH:mm'h'",{locale:ptBr})

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishAt, {
        locale:ptBr,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, comments.length+1]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={puslishedDateFormatted} dateTime={props.publishAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>

                <p>
                    <a href=""></a> <a href="">#projetonovo</a>
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {props.content.map( item => item.type === 'paragraph' ? <p>{item.content}</p> : <p><a href='#'>{item.content }</a></p>)}
                {comments.map(item => <Comment />)}
            </div>
        </article>
    )
}