import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/hclcortez.png" />
                    <div className={styles.authorInfo}>
                        <strong>Hover Cortez</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="13 de Março às 11:20" dateTime="2022-05-11 08:30:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non dolor nesciunt eveniet provident modi architecto, quo cupiditate in, voluptas repudiandae.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius excepturi fugit, saepe illum molestiae et dolore aut non.</p>

                <p>
                    <a href="">#novoprojeto</a> <a href="">#projetonovo</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}