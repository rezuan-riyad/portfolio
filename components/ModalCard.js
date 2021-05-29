import React, { useState } from 'react'
import Image from 'next/image'
import projectStyle from '../styles/Projects.module.css'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import Card from './Card'
import ModalContent from './ModalContent'

export default function ModalCard({ project }) {
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <div className={projectStyle.container}>
      <Card project={project}>
        <button onClick={onOpenModal} className={projectStyle.button}>
          Open
        </button>
      </Card>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <ModalContent project={project}/>
      </Modal>
    </div>
  )

}