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
            <img src={veg_club} alt="" />
          </span>
          <p>
          </p>
          <p>
            We supply our Veg Club members with fresh organic fruit and vegetables all year round.


The reason we are launching our subscription service is so that we can cater for you on a regular basis and plan ahead so that we have fresh seasonal veg for you. 

We have two sizes of our seasonal veg boxes small and large. 

The pictures shown are only examples of seasonal veg as this will vary with each season and what has been freshly picked. 

Small box is currently $10 and large box is $15.

We have the following options for subscriptions: weekly, fortnighly and monthly. 

Our subscription service is very flexible e.g. you can pause as required. 

The reason we are launching our subscription service is so that we can cater for you on a regular basis and plan ahead so that we have fresh seasonal veg for you. 

We have two sizes of our seasonal veg boxes small and large. 

The pictures shown are only examples of seasonal veg as this will vary with each season and what has been freshly picked. 

Small box is currently $10 and large box is $15.

We have the following options for subscriptions: weekly, fortnighly and monthly. 

Our subscription service is very flexible e.g. you can pause as required.
          </p>

        <h3 className="major">Veg Club Subscription</h3>

      <form name="subscription" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  

        {/* You need to add the hidden input with the form name to your JSX form */}

            <input type="hidden" name="bot-field" />  
            <input type="hidden" name="form-name" value="subscription" />

            <div className="field half first">
                   <label>Choose Your Veg Box:</label>
            </div>
            <div className="field half">
                   <select name="size" required="">
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="smallbox" value="Small Veg Box - £10">Small Veg Box - £10</option>
                     <option name="largebox" value="Large Veg Box - £15">Large Veg Box - £15</option>
                   </select>
            </div>

            <div className="field half first">
                   <label>Method:</label>
            </div>
            <div className="field half">
                   <select name="method" required="">
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="delivery" value="Delivered - £2">Delivery - £2</option>
                     <option name="collect" value="Collected - Free">Collection - Free</option>
                   </select>
            </div>

           <div className="field half first">
                   <label>Frequency:</label>
            </div>
            <div className="field half">
                   <select name="frequency" required="">
                     <option value="" disabled="" selected="">- Select from List -</option>
                     <option name="weekly" value="Weekly Veg Membership">Weekly Veg Membership</option>
                     <option name="fortnightly" value="Fortnightly Veg Membership">Fortnightly Veg Membership</option>
                   </select>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="tel">Contact Number</label>
              <input type="tel" name="tel" id="tel" />
            </div>
            <div className="field">
              <label htmlFor="address">Address for Delivery</label>
              <textarea name="address" id="address" rows="4"></textarea>
            </div>
            <div className="field">
              <label htmlFor="comment">Comments/ Special Requests</label>
              <textarea name="comment" id="comment" rows="4"></textarea>
            </div>
            <ul className="actions">
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
            <img src={faqs} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
            <img src={ourstory} alt="" />
          </span>
          <p>
Having grown up in Northern Ireland, in the country with lots of green space, it has always baffled me why we import 90% of our food! The amount of plastic used when buying vegetables at supermarkets, the amount of food that is wasted and buying tasteless vegetables, being a few of my frustrations. The best food can be grown locally so that within a matter of minutes you can have vegetables from the field to your fork! 

Having grown food for years in a small garden at home, I enjoyed having fresh produce always on hand. Following a few conversations in the cockpit, we discussed the possibility of growing vegetables on a larger scale using the ‘no dig method’. An opportunity arose to grow vegetables on a plot of land, on a farm just outside Moneyreagh and Picked Organic was born!

With every new adventure there was excitement and we had all these wonderful ideas of what we wanted to achieve. We knew things weren’t going to be plain sailing however, it didn’t take long to realise that we had drastically underestimated the amount of time and work involved to get things started.

Our first challenge was the land. The soil was full of rocks and clay and was prone to flooding. It took time to prepare the land and to address these challenges. Beforelong, we had our first veg beds made and plants starting to grow. 

We increased the number of veg beds and constructed a pollytunnel to optimise our growing space and to increase the variety of vegetables we could grow. 

As an established market we provide fresh vegetables to a number of local restaurants and greengrocers. Throughout lockdown, with the increased demand for locally produced vegetables it was the right time for us to launch out veg boxes.

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
