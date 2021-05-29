import projectStyle from '../styles/Projects.module.css'

export default function Card({ children, project }){
  return (
    <div className={projectStyle.card}>
      <div className={projectStyle.projectImg}>
        <img src={project.image}/>
      </div>
      <section className={projectStyle.text}>
        <h3>{ project.name }</h3>
        { children }
      </section>
    </div>
  )
}