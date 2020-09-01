import React from 'react'
import { Field } from 'react-final-form'
import Wizard from './Wizard'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const MultiPageForm = () => (

  <Wizard
      initialValues={{ Weekly: true, Fortnightly: false, Monthly: false }}
      onSubmit={onSubmit}
    >
    <Wizard.Page>
    <div class="pa4">
        <div class="flex mb2">
          <Field class="mr2" id="small veg box" name="Small veg box" component="input" type="checkbox" />
          <label for="small veg box">Small veg box</label>
        </div>
        <div class="flex mb2">
          <Field class="mr2" id="large veg box" name="Large veg box" component="input" type="checkbox" />
          <label for="large veg box">Large veg box</label>
        </div>
      </div>
      </Wizard.Page>  
    <Wizard.Page>
      <div class="pa4">
        <div class="flex mb2">
          <Field class="mr2" id="weekly" name="Weekly" component="input" type="checkbox" />
          <label for="weekly">Weekly</label>
        </div>
        <div class="flex mb2">
          <Field class="mr2" id="fortnightly" name="Fortnightly" component="input" type="checkbox" />
          <label for="fortnightly">Fortnightly</label>
        </div>
        <div class="flex mb2">
          <Field class="mr2" id="monthly" name="Monthly" component="input" type="checkbox" />
          <label for="monthly">Monthly</label>
        </div>
      </div>
    </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.notes) {
            errors.notes = 'Required'
          }
          return errors
        }}
      >

        <div>
          <label htmlfor="notes">Comments/Requests</label>
          <Field name="notes" component="textarea" placeholder="Comments/Requests" />
          <Error name="notes" />
        </div>
    </Wizard.Page>
  </Wizard>
)

export default MultiPageForm
