import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus consectetur aut repudiandae, iste perferendis omnis laboriosam. Dolor sapiente excepturi ratione, fugit et libero repudiandae soluta laborum, ullam facere non.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores officiis sed recusandae repellat, sapiente similique eum natus, quibusdam commodi, voluptatibus fugiat. Rem maxime iste eius atque at quod debitis? Repellat?</p>
        <div className={styles.btnContainer}>
          <Link className={styles.btn} href={"/heroes"}>See Heroes List</Link>
          <Link className={styles.btn} href={"/villains"}>See Villains List</Link>
        </div>
      </div>
    </>
  )
}
