import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Layout from '../components/Layout'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const [nameerror, setNameerror] = useState(false)
  const [emailerror, setEmailerror] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(false)
    
    // name and email error checking
    name.length < 3 ? 
      setNameerror(true) : setNameerror(false)
    email.length == 0 ?
      setEmailerror(true) : setEmailerror(false)

    // post request for email sending if no error
    if ( !nameerror && !emailerror && message.length > 150) {
      setSending(true)
      let data = { name, email, message }
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          setSending(false)
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        } else {
          setSending(false)
          setSubmitted(false)
        }
      })
    } else {
      console.log("Something went wrong")
    }
  }

  // clear form message
  const handleClear = (e) => {
    e.preventDefault()
    setMessage("")
  }

  return (
    <Layout title="Contact">
      <form className={styles.form} onSubmit={handleSubmit}>

        <h2>Write Me</h2>
        { submitted ? <p className={styles.msg}>Thanks for messaging.</p> : null }
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name" />
          <p className={styles.helperText}>
            { nameerror ? "Name should be at least 3 charecters." : null }
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email" />
          <p className={styles.helperText}>
            { emailerror ? "Email is required" : null }
          </p>

          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Word" />
          <p className={styles.helperText}>
            {message.length < 150 ? "At least 150 charecters are required" : <span>Perfect!</span>}
          </p>

        <div className={styles.btnGroup}>
          <button className={styles.btn} type="submit" disabled={message.length < 150}>
            { sending ? "Sending...    " : "Send Message"}
          </button>
          <button onClick={handleClear}>Clear Message</button>
        </div>

      </form>
    </Layout>
  )
}