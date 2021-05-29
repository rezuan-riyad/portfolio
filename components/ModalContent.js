import projectStyle from '../styles/Projects.module.css'
import Link from 'next/link'

export default function ModalContent({ project }) {

  return (
    <div className={projectStyle.modalDiv}>
      <section className="gifContainer"></section>
      {
        project.sourceCode ?
          <button className={projectStyle.buttonOutline}>
            <Link href={project.sourceCode}>Source Code</Link>
          </button> : null
      }
      {
        project.live ?
          <button className={projectStyle.button}>
            <Link href={project.live}>Live Demo</Link>
          </button> : null
      }
      <style jsx>
        {`
          .gifContainer{
            height: 400px;
            width: 100%;
            background-image: url(${project.filePath});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
          }
        `}
      </style>
    </div>
  )

}