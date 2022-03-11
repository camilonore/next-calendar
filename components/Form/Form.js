import React from 'react'
import styles from './Form.module.css'

const Form = ({ onSubmit, fields = {} }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <datalist className={styles.input} id='days'>
        <option value="Monday"></option>
        <option value="Tuesday"></option>
        <option value="Wednesday"></option>
        <option value="Thursday"></option>
        <option value="Friday"></option>
      </datalist>
      {fields.map(field => {
        return <div key={field.name}>
          <label className={styles.label} htmlFor={field.name}>{field.name}</label>
          {
            field.name === 'day'
              ? <input list='days' className={styles.input} id={field.name} type="text" name={field.name} placeholder={field.placeholder} required={field.required}/>
              : <input className={styles.input} id={field.name} type="text" name={field.name} placeholder={field.placeholder} required={field.required}/>
            }
        </div>
      })}
      <button type='submit'>Submit</button>
    </form>
  )
}

export { Form }
