import Head from 'next/head'
import Calendar from '../components/Calendar/Calendar'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import Objectives from '../components/Objectives/Objectives'
import styles from '../styles/Index.module.css'
import { CalendarProvider } from '../Context/CalendarContext'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Calendar</title>
        <meta name="description" content="Calendar made with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CalendarProvider>
          <Modal/>
          <Header/>
          <Objectives/>
          <Calendar/>
        </CalendarProvider>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
