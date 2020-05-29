import React, {Fragment, useState} from 'react';

const initialState = {
  name: '',
  description: '',
  link_url: '',
  img_url: ''
}

const Form = (props) => {
  const [fields, setFields] = useState({initialState})

  const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    props.addPlanet(fields)
    e.preventDefault()
    setFields(initialState)
  }


  return(
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
          <br />

          <label htmlFor="description">Description: </label>
          <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange} />
          <br />

          <label htmlFor="link_url">Link: </label>
          <input id="link" type="text" name="link" value={fields.link_url} onChange={handleFieldsChange} />
          <br />

          <label htmlFor="img_url">Imagem: </label>
          <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
          <br />

          <input type="submit"/>
        </div>
      </form>
    </Fragment>
  )
}

export default Form
