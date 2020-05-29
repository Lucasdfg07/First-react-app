import React, {Fragment, useState} from 'react';

const initialState = {
  name: ''
}

const Form = (props) => {
  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    props.addSatellite(fields)
    e.preventDefault()
    setFields(initialState)
  }

  return(
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name: </label>
        <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default Form
