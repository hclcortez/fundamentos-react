import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/hclcortez.png" />
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
        </article>
    )
}