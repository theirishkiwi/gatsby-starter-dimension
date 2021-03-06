import PropTypes from 'prop-types'
import React from 'react'
import veg_club from '../images/veg_club-min.jpg'
import faqs from '../images/faqs-min.jpg'
import ourstory from '../images/ourstory-min.jpg'
import ContactForm from "./ContactForm"
      
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
We want to supply our lovely Veg Club members with fresh organic veggies all year round. The reason we launched a subscription service is so we can cater for you regularly and plan ahead so we can supply you with fresh seasonal veg all year round. 
We have two sizes of seasonal veg boxes small and large. The picture shown is an example and will vary with the seasons and what has been freshly picked. A small box is £10 and a large box is currently £15.
When you subscribe you can choose to receive a box: weekly, fortnightly or monthly. Our subscription service is flexible so if you wish to pause, downscale or upscale your subscription get in touch via email and we'll be happy to help.
         </p>	

        <h3 className="major">Veg Club - Subscription</h3>

        <ContactForm />

      {/* 
       <div class="ph3 ph5 pb3">
          <button class="grow br2 mr3 mb3 dib snipcart-add-item"
              data-item-id="small-veg"
              data-item-price="10.00"
              data-item-custom1-name="Frequency"
              data-item-custom1-options="weekly|fortnightly|monthly"
              data-item-custom1-value="weekly"
              data-item-url="/paintings/starry-night"
              data-item-description="A Small Veg Box consists of 6 seasonal veg items and should be enough for 2-4 people."
              data-item-image={vegbox}
              data-item-name="Small Veg Box">
              Small Veg Box
          </button>
          <button class="grow br2 mr3 mb3 dib snipcart-add-item"
              data-item-id="large-veg"
              data-item-price="15.00"
              data-item-custom1-name="Frequency"
              data-item-custom1-options="weekly|fortnightly|monthly"
              data-item-custom1-value="weekly"
              data-item-url="/paintings/starry-night"
              data-item-description="A Large Veg Box consists of 10 seasonal veg items and should be enough for 4-6 people."
              data-item-image={vegbox}
              data-item-name="Large Veg Box">
              Large Veg Box
          </button>
        </div> 
       */}
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
