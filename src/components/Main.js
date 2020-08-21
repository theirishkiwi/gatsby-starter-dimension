import PropTypes from 'prop-types'
import React from 'react'
import veg_club from '../images/veg_club.jpg'
import faqs from '../images/faqs.jpg'
import ourstory from '../images/ourstory.jpg'
      
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Veg Club</h2>
          <span className="image main">
            <img src={veg_club} alt="Large veg box" />
          </span>
          <p></p>
          <p>
We want to supply our lovely Veg Club members with fresh organic veggies all year round. This is reason we launched a subscription service is so we can cater for you regularly and plan ahead so we can supply you with fresh seasonal veg all year round. 
We have two sizes of seasonal veg boxes small and large. The picture shown is an example and will vary with the seasons and what has been freshly picked. A small box is £10 and a large box is currently £15.
When you subscribe you can choose to receive a box: weekly, fortnightly or monthly. Our subscription service is flexible so if you wish to pause, downscale or upscale your subscription get in touch via email and we'll be happy to help.
         </p>	

        <h3 className="major">Veg Club Subscription</h3>

      <form name="subscription" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  

        {/* You need to add the hidden input with the form name to your JSX form */}

            <p class="hidden">
              <label type="hidden">Don’t fill this out if you're human: <input type="hidden" name="bot-field" /></label>
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
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">FAQ's</h2>
          <span className="image main">
            <img src={faqs} alt="Cornflower in wild flower meadow" />
          </span>
          <p></p>

          <h3>Why are you using the ‘no dig method’?</h3>

          <p>
It is one of the quickest ways to prepare the soil to grow vegetables. It is an organic method of growing vegetables without the need to manually turn the soil between vegetable crops and has these added benefits:
<ul>
  <li>Saves time - as no digging is required.</li>
  <li>Fewer weeds - By adding a protective barrier before you place your compost, this stops the weeds coming through which over the long term saves time and helps to protect your vegetables.</li> 
  <li>More fertile soil - which removes the need for artificial fertilisers.</li>
  <li>Retaining helpful soil organisms as cultivation is reduced.</li> 
  <li>Grow more food with little effort.</li>
  <li>Intersowing and interplanting which reduces the overlap time between crops. This helps to protect crops against pests and allows the plant to thrive.</li>
</ul>
Overall, it is a simple method with many benefits.
       </p>

       <h3>Why support us?</h3>

       <p>
Supporting by buying local.
Reducing plastic waste.
Minimising carbon footprint by opting for seasonal vegetables.
Buy vegetables free from pesticides and chemicals.
Experience a taste sensation by buying vegetables that are picked when ripe and in season. 
We prefer to work with nature rather than against it.
         </p>

         <p>

         </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Story</h2>
          <span className="image main">
            <img src={ourstory} alt="Family helping at the farm" />
          </span>
<p>
</p>
<p>
Having grown up in Northern Ireland, in the country with lots of green space, it has always baffled me why we import 90% of our food! The amount of plastic used when buying vegetables at supermarkets, the amount of food that is wasted and buying tasteless vegetables, being a few of my frustrations. The best food can be grown locally so that within a matter of minutes you can have vegetables from the field to your fork! 

Having grown food for years in a small garden at home, I enjoyed having fresh produce always on hand. Following a few conversations in the cockpit, we discussed the possibility of growing vegetables on a larger scale using the ‘no-dig method’. An opportunity arose to grow vegetables on a plot of land, on a farm just outside Moneyreagh and Picked Organic was born!

With every new adventure, there was excitement and we had all these wonderful ideas of what we wanted to achieve. We knew things weren’t going to be plain sailing however, it didn’t take long to realise that we had drastically underestimated the amount of time and work involved to get things started.

Our first challenge was the land. The soil was full of rocks and clay and was prone to flooding. It took time to prepare the land and to address these challenges. Before long, we had our first veg beds made and plants starting to grow. 

We increased the number of veg beds and constructed a polytunnel to optimise our growing space and to increase the variety of vegetables we could grow. 

As an established market, we provide fresh vegetables to several local restaurants and greengrocers. Throughout lockdown, with the increased demand for locally produced vegetables, it was the right time for us to launch out veg boxes.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Enquiries</h2>

<form name="enquiries" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

  {/* You still need to add the hidden input with the form name to your JSX form */}

  <input type="hidden" name="bot-field" /> 
  <input type="hidden" name="form-name" value="enquiries" />

            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/Picked-Organic-110084570769157/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pickedorganic/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
