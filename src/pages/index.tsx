import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus consectetur aut repudiandae, iste perferendis omnis laboriosam. Dolor sapiente excepturi ratione, fugit et libero repudiandae soluta laborum, ullam facere non.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores officiis sed recusandae repellat, sapiente similique eum natus, quibusdam commodi, voluptatibus fugiat. Rem maxime iste eius atque at quod debitis? Repellat?</p>
        <Link href={"/heroes"}>See Heroes List</Link>
        <Link href={"/villains"}>See Villains List</Link>
      </div>
    </>
  )
}
