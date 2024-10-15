import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Appointment.css'

export const Appointment = () => {
  return (
    <div>
        <Navbar/>
       
        <div className='top-container'>
          <div className='first-container'>
            <img className='profile-img' src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te4rzfVBU6NKDUMalOb6fQnfR6OGlg8azfl8Cl7C36xiXi-I7OMlC05CAuuwsTp-YBVDHb5SZTIs3XCrD1WYD4VjDVp3wLXSI1ep-ukzMCWm~vygWD3fiVoUoc04wuP9G87cflZIQmYx50ns0vr-hPW6AXK~VjJjk5d5c1w5g97OTs5gWAzph4eOerSLsL64S2OhQIqbhvnOoqnTrKhaPY4IFsJiHXP36NJyb2wnHIckkdTOxiQObIym-Sa1vG0ErCyo9KXxC9Ktm2Dqo4k8iDv09Z33cZC2qiXZCh8QpTkCygjNgu6pBVaxcV-PafHTnYC35fIoVKC8Gt~ybkarLA__" alt="profile"/>
            <div>
              <h1 className='doctor-name'>Dr.Bruce Willis <span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728896466/Frame_1000006301_l2zwwc.png" alt="tick"/> 
              </span></h1>
              <p className='doctor-job'>Gynecologist</p>
              <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728896598/Frame_1000006278_gwhidw.png" alt="rating" className='rating-image'/>
            </div>
            <p className='para'>Follwers <span className='span-para'>850</span></p>
            <p className='para'>Following <span className='span-para'>18K</span></p>
            <p className='para'>Posts <span className='span-para'>250</span></p>
            <button className='book-btn'>Book an Appointment</button>
          </div>
        </div>
        <div className='main-container'>
        <div>
        <div className='about-container'>
          <div className='about-top-container'>
            <h2>A Little About me</h2>
            <button className='follow-btn'>Follow +</button>
          </div>
          <p>Hello I am Dr.Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work all my hospital staff and senior doctors.
            Completed my graduation in Gynaecologist Medicine from the
          </p>
          <hr/>
          <h3>Read More</h3>
          <div className='language-container'>
            <h4>Language Known</h4>
            <p>English</p>
            <p>Hindi</p>
            <p>Telugu</p>
          </div>
          <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728898666/Frame_1000006284_jcvqef.png" alt="social-media"/>
        </div>
        <div className='spaecialize-container'>
          <div className='spaecialize-container1'>
          <h2>I Specialize In</h2>
          </div>
         <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728900582/Frame_1000006276_rnnmsv.png" alt="specialization"/>
        </div>
        <div className='spaecialize-container'>
          <div className='spaecialize-container1'>
          <h2>My Work Experience</h2>
          </div>
          <h3 className='exp-heading'>I HAVE BEEN IN PRACTICE FOR : 7+ Years</h3>
          <div>
            <div className='work-exp-container'>
              <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728957221/Frame_1000006314_czqwvk.png" alt="home"/>
              <div>
                <h3 className='heading1'>Midtown Medical Clinic</h3>
                <p className='doctor-position'>Senior doctor</p>
              </div>
              <p>2016-PRESENT</p>
            </div>
            <div className='work-exp-container'>
              <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728957221/Frame_1000006314_czqwvk.png" alt="home"/>
              <div>
                <h3 className='heading1'>Midtown Medical Clinic</h3>
                <p className='doctor-position'>Senior doctor</p>
              </div>
              <p>2010-2015</p>
            </div>
          </div>
        </div>
        <div className='review-container'>
        <div className='spaecialize-container1'>
          <h2>Featured Reviews (102)</h2>
          </div>
          <div className='review-person-container'>
            <div className='person-container'>
              <img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__" alt="review-profile"/>
              <div className='person-details'>
                <h2>Alicent Hightower</h2>
                <p>Consulted for Skin Care</p>
              </div>
              <p>20 January 2023</p>
            </div>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728960447/stars_xic9fb.png" alt="stars"/>
            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            <p></p>
          </div>
          <div className='review-person-container'>
            <div className='person-container'>
              <img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__" alt="review-profile"/>
              <div className='person-details'>
                <h2>Alicent Hightower</h2>
                <p>Consulted for Pregnancy</p>
              </div>
              <p>20 January 2023</p>
            </div>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728960447/stars_xic9fb.png" alt="stars"/>
            <p>Might be bit early to confirm but yes I can see noticeable difference . will write again after using it for longer periods</p>
            <p></p>
          </div>
        </div>        
        </div>
        <div>
        <div className='appointment-details-container'>
          <div className='fee-details'>
            <h2>Appointment Fee</h2>
            <p>$699.00</p>
          </div>
          <h4>Select your mode of session</h4>
          <div className="session-container">
            <div className="session-mode">
              <h3>In Clinc <span>45 mins</span></h3>
            </div>
            <div className="video-mode">
              <h3> Video  <span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728963360/Frame_1000006155_zf5koh.png" alt="tick-image"/> 45 mins</span></h3>
            </div>
            <div className="chat-mode">
              <h3> Chat <span>10 mins</span></h3>
            </div>
          </div>
          <div className='time-slot'>
          <h4>Pick a time slot</h4>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728964965/calendar_ezffaf.png" alt="calender"/>
           
          </div>
             <div className="time-slot-container">
              <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728964049/DA_bdhmq5.png" alt="left-arrow"/>
              <div className='time1'>
                <h4>Mon,10 Oct</h4>
                <p>10 Slots</p>
              </div>
              <div className='time2'>
                <h4>Tue,11 Oct</h4>
                <p>02 Slots</p>
              </div>
              <div className='time3'>
                <h4>Wed,12 Oct</h4>
                <p>05 Slots</p>
              </div>
              <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728964760/DA_1_pbhvg5.png" alt="right-arrow"/>
            </div>
            <div className='morning-container'>
              <h4>Morning</h4>
              <div className='time-period-container'>
                <div className='time-period'>
                  <h3>09:00 AM</h3>
                </div>
                <div className='time-period'>
                  <h3>09:30 AM</h3>
                </div>
                <div className='time-period'>
                  <h3>10:00 AM</h3>
                </div>
                <div className='time-period'>
                  <h3>10:15 AM</h3>
                </div>
                <div className='time-period'>
                  <h3>10:45 AM</h3>
                </div>
              </div>
            </div>
            <div className='morning-container'>
              <h4>Evening</h4>
              <div className='time-period-container'>
                <div className='time-period'>
                  <h3>04:00 PM</h3>
                </div>
                <div className='time-period'>
                  <h3>04:15 PM</h3>
                </div>
                <div className='time-period'>
                  <h3>04:30 PM</h3>
                </div>
                <div className='time-period'>
                  <h3>04:45 PM</h3>
                </div>
                <div className='time-period'>
                  <h3>05:15 PM</h3>
                </div>
              </div>
            </div>
            <button className='make-btn'>Make An Appointment</button>
        </div>
        </div>
        </div>
    </div>
  )
}
