import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <>
    <Header></Header>
    <div className='contact-us-content-wrapper'>
      <h1>Connect With Us!</h1>


    <form className='contact-us-form'> 
      
        <div className='fname-lname-email-container'> 
            <div className='fname-container'>
                <label>First Name *</label>
                <input type='text'></input>
            </div>
            <div className='lname-container'>
                <label>Last Name *</label>
                <input type='text'></input>
            </div>

            <div className='email-container'> 
            <label>E-Mail *</label>
            <input type='email'></input>
            </div>

            
        </div>


        <div className='phone-container-date-time-container'>

            <div className='phone-container'>
            <label>Phone Number *</label>
            <input type='phone'></input>
            </div>


          <div className='event-date-container'> 
            <label>Event Date *</label> 
            <input type='text'></input>
          </div>

          <div className='event-time-container'> 
            <label>Event Time *</label>
            <input type='text'></input>
          </div>



        </div> 

        


        <div className='hours-venue-name-address-wrapper'>
        <div className='hours-needed-wrapper'>
          <div className='hours-needed-container'> 
          <label>Hours Needed *</label>
          <input type='text'></input>

          </div>
        </div>

        <div className='venue-name-wrapper'>
          <div className='venue-name-container'> 
          <label>Venue Name *</label>
          <input type='text'></input>
          </div>
        </div>


      
          <div className='venue-address-container'> 
            <label>Venue Address *</label>
            <input type='text'></input>
          </div>


        </div>


        <div className='city-state-zip-wrapper'>

          <div className='city-name-container'> 
            <label>City *</label>
            <input type='text'></input>
          </div>

          <div className='state-container'> 
        <label>State</label>
        <select>
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    </div>

    <div className='zip-container'>
        <label>Zip</label>
        <input type='text' pattern="\d{5}" title="Please enter a 5-digit zip code" maxlength="5"></input>
    </div>


        </div>

    <div className='event-type-service-container'>
      <div className='event-type-container'>
        <label>Event Type</label>
          <select>
            <option>Hello</option>
          </select>
        
      </div>

    <div className='service-container'>
    <label>Service</label>
    <select>
      <option>Photo booths</option>
    </select>
    </div>


    <div className='package-container'>
      <label>Package</label>
      <select>
        <option>Package #1</option>
      </select>
    </div>





    </div>


    </form>



    </div>
    <Footer></Footer>
    </>
  )
}
