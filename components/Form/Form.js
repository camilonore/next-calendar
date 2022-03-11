import React from 'react'
import styles from './Form.module.css'

const Form = ({ onSubmit, fields = {} }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {fields.map(field => {
        return <>
          <label htmlFor={field.name}>{field.name}</label>
          <input id={field.name} type="text" name={field.name} placeholder={field.placeholder}/>
        </>
      })}
      <button type='submit'>Submit</button>
    </form>
  )
}

export { Form }
