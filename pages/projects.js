import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import ModalCard from '../components/ModalCard'
import data from '../json/projectData.json'


export default function Projects(){

  const projectCards = data.projects.map( (project) => {
    return <ModalCard project={project} key={project.id}/>
  })

  return (
    <Layout title="Projects">
      <h1 className={styles.header}>Self Motivated Projects</h1>
      <div className={styles.projectCards}>
        {projectCards}
      </div>
    </Layout>
  )
}