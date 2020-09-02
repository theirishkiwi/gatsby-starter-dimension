import React from 'react'

      <form name="subscription" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  

        You need to add the hidden input with the form name to your JSX form

            <p class="hidden">
              <input type="hidden" name="bot-field" />
            </p> 
            <input type="hidden" name="form-name" value="subscription" />

            <div className="field half first">
                   <label>Choose Your Veg Box: *</label>
            </div>
            <div className="field half">
                   <select name="size" aria-label="size required" required>
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="smallbox" value="Small Veg Box - £10">Small Veg Box - £10</option>
                     <option name="largebox" value="Large Veg Box - £15">Large Veg Box - £15</option>
                   </select>
            </div>

            <div className="field half first">
                   <label>Method: *</label>
            </div>
            <div className="field half">
                   <select name="method" aria-label="method required" required>
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="delivery" value="Delivered - £2">Delivery - £2</option>
                     <option name="collect" value="Collected - Free">Collection - Free</option>
                   </select>
            </div>

           <div className="field half first">
                   <label>Frequency: *</label>
            </div>
            <div className="field half">
                   <select name="frequency" aria-label="frequency required" required>
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="weekly" value="Weekly Veg Membership">Weekly Veg Membership</option>
                     <option name="fortnightly" value="Fortnightly Veg Membership">Fortnightly Veg Membership</option>

<option name="Monthly" value="Monthly Veg Membership">Monthly Veg Membership</option>
                   </select>
            </div>

            <div className="field">
              <label htmlFor="name">Name: *</label>
              <input type="text" name="name" id="name" aria-label="name required" required/>
            </div>
            <div className="field">
              <label htmlFor="email">Email: *</label>
              <input type="email" name="email" id="email" aria-label="email required" required/>
            </div>
            <div className="field">
              <label htmlFor="tel">Contact Number: *</label>
              <input type="tel" name="tel" id="tel" aria-label="required" required/>
            </div>
            <div className="field">
              <label htmlFor="address">Address for Delivery:</label>
              <textarea name="address" id="address" rows="4"></textarea>
            </div>
            <div className="field">
              <label htmlFor="comment">Comments/ Special Requests</label>
              <textarea name="comment" id="comment" rows="4"></textarea>
            </div>
            <ul className="actions">
              
            <div>

            <div className="field half first">
                   <label>I'd like to subscribe: *</label>
            </div>
            <div className="field half">
                   <select name="GDPR" aria-label="Must agree to submit" required>
                     <option value="" disabled="" selected="">- Select from list -</option>
                     <option name="gdpr" value="Yes">Yes</option>
                   </select>
            </div>
            </div>

              <li>
                <input type="submit" value="Subscribe" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

export default OldContactForm