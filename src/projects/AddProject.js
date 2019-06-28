import React from 'react'
import { Link, Prompt } from 'react-router-dom'
import Card from '../ui/Card'

const AddProject = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Card style={{ minHeight: '15em' }}>
      <form className="spacing" onSubmit={handleSubmit}>
        <Prompt when={isDirty} message="Are you sure you want to leave the form, it is unsaved?" />
        <input onChange={() => setIsDirty(true)} type="text" placeholder="Project Name" required />
        <footer className="horizontal-spacing">
          <button type="submit" className="button">
            Add Project
          </button>
          <Link to="/projects">Cancel</Link>
        </footer>
      </form>
    </Card>
  )
}

export default AddProject
