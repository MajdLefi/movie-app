import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout'
import MovieList from '@/components/movies/movieList'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
     <MovieList />
    </Layout>
  )
}
