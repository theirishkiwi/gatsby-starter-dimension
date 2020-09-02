import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import vegbox from '../images/vegbox_flipped-min.jpg'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const ContactForm = () => (
    <Form
      onSubmit={onSubmit}
      initialValues={{ large: true, weekly: true, collect: true }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>

        <div class="pa4">
           <label>Size</label>
            <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="vegbox"
              id="small"
              value="small"
              component="input"
              />
              <label for="small">Small veg box</label>
            </div>
            <div class="flex mb2">
              <Field class="mr2"
              type="radio" 
              name="vegbox"
              id="large"
              value="large"
              component="input"
              />
              <label for="large">Large veg box</label>
            </div>
          </div>

          <div class="pa4">
            <br />
          <label>Frequency</label>
            <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="freq" 
              id="weekly" 
              value="weekly"
              component="input"  
              />
              <label for="weekly">Weekly</label>
            </div>
            <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="freq" 
              id="fortnightly" 
              value="fortnightly"
              component="input"
              />
              <label for="fortnightly">Fortnightly</label>
            </div>
            <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="freq" 
              id="monthly" 
              value="monthly"
              component="input" 
              />
              <label for="monthly">Monthly</label>
            </div>
          </div>

          <div class="pa4">
            <br />
          <label>Transport</label>
          <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="transport" 
              id="collect" 
              value="collect"
              component="input"
               />
              <label for="collect">Collect</label>
            </div>
            <div class="flex mb2">
              <Field class="mr2" 
              type="radio"
              name="transport" 
              id="delivery" 
              value="delivery"
              component="input" 
              />
              <label for="delivery">Delivery</label>
            </div>
          </div>

          <div>
            <br />
            <label>Comment/Requests</label>
            <Field name="notes" component="textarea" placeholder="Comment/Requests" />
          </div>
          <div className="buttons">
            <button class="grow br2 mr3 mb3 dib snipcart-add-item"
                type="submit" disabled={submitting || pristine}
                data-item-id="{ size }-veg"
                data-item-price="10.00"
                data-item-url="/paintings/starry-night"
                data-item-description="{vb_description}"
                data-item-image={vegbox}
                data-item-name="{size}"
                data-item-custom2-name="Add a note"
                >
                Subscribe
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
)

export default ContactForm