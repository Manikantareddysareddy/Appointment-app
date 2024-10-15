import { Component } from "react";
import { Navbar } from "../Navbar/Navbar";
import './Home.css'
import { Link } from "react-router-dom";

const Home=()=>{
        return (
            <div>
                <Navbar/>
                <div className="first-container">
                    <h1>Find expert Doctors for an In-clinic session here </h1>
                    <div className="void-container">
                    <div className="select-container">
                        <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728566001/location_hikaht.png" alt="location"/>
                        <select value="Selct Location" className="selctEl">
                            <option>Hyderabad</option>
                            <option>Vijayawada</option>
                            <option>Ongole</option>
                            <option>Kerala</option>
                            <option>Chennai</option>
                            <option>Mumbai</option>
                            <option>Gujarat</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <input placeholder="eg. Doctor, specialisation, clinic name"/>
                        <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728566705/arrow_forward_24px_kycahj.png" alt="arrow"/>
                    </div>
                    </div>
                    
                </div>
                <div className="second-container">
                    <div className="select-container1">
                        <select className="selctEl1">
                            <option>Expertise</option>                                                                                                                             
                        </select>
                    </div>
                    <div className="select-container1">
                        <select className="selctEl1">
                            <option>Gender</option>                                                                                                                             
                        </select>
                    </div>
                    <div className="select-container1">
                        <select className="selctEl1">
                            <option>Fees</option>                                                                                                                             
                        </select>
                    </div>
                    <div className="select-container1">
                        <select className="selctEl1">
                            <option>All Languages</option>                                                                                                                             
                        </select>
                    </div> <div className="select-container2">
                        <select className="selctEl2">
                            <option>All Filters</option>                                                                                                                             
                        </select>
                    </div>
                </div>
                <div className="filter-container">
                <div className="filters-container">
                    <p>Hair Care</p>
                    <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728569100/Group_39486_uxk3hp.png" alt="cross-x"/>
                </div>
                <div className="filters-container">
                    <p>Female</p>
                    <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728569100/Group_39486_uxk3hp.png" alt="cross-x"/>
                </div>
                <div className="filters-container">
                    <p>Rs.0-Rs.500</p>
                    <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728569100/Group_39486_uxk3hp.png" alt="cross-x"/>
                </div>
                <div className="filters-container">
                    <p>Hindi</p>
                    <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728569100/Group_39486_uxk3hp.png" alt="cross-x"/>
                </div>
                </div>
                <div className="doctors-list-container">
                <div className="card-container">
                    <div className="sub-card1">
                        <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNI~pzUVDgUbQe9k-LJDaG9pUdqbBkbkKOAHOsADzBM-annTUqakQHHXMnzM-pNT2b9m6Z39RG5yaf~0Pro28c7FnZoMmbeECIXt5oyZ8SPkdyEXjbgL3OX4cPLMgCz5uk9EUh3xCXjkD-hckbazkZhssPYR6~3yFo-kE8Ip~iknaaf35IoTDI2t1SaYM9~l6TvLJ8JeWF34Bi9reQoWGMlq3ar-S9Cxcdwv1Hxbuc0t3HNxxGfldomc7at2XcR-xPuHXlMahnKnkli49n3PpLCIFPJi-~0ApR2wcpo5rq07atW5J07ALCHzvKQkfl6rZkXqYdsGVdROwPYoDBHg0g__" alt="profile-photo" className="profile-img"/>
                        <div className="rating-container">
                            <h2>4.5</h2>
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728699164/material-symbols_star_qtfnyr.png" alt="star"/>
                        </div>
                    </div>
                    <div className="sub-card2">
                        <h1>Dr. Prerna Narang</h1>
                        
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728570975/Frame_dwkvxt.png" alt="fertile-logo"/>
                            <p>Male-Female Infertility</p>
                        </div>
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571047/Frame_1_vxijle.png" alt="fertile-logo"/>
                            <p>7 years of Experience</p>
                        </div>
                        <div className="fertile-container">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571071/comment_1_std9ej.png" alt="fertile-logo"/>
                            <p>Speaks English,Hindi,Telugu</p>
                        </div>
                       
                    </div>
                    <div className="consultation-container">
                        <div className="consultation">
                            <p>Video Consultation <span>$800</span></p>
                        </div>
                        <div className="consultation">
                            <p>Chat Consultation <span>Free</span></p>
                        </div>
                    </div>
                    <Link to="/appointment">
                    <button className="profile-btn">View Profile</button>
                    
                    </Link>
                    <button className="book-btn">Book Consultation</button>
                </div>     
                <div className="card-container">
                    <div className="sub-card1">
                        <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNI~pzUVDgUbQe9k-LJDaG9pUdqbBkbkKOAHOsADzBM-annTUqakQHHXMnzM-pNT2b9m6Z39RG5yaf~0Pro28c7FnZoMmbeECIXt5oyZ8SPkdyEXjbgL3OX4cPLMgCz5uk9EUh3xCXjkD-hckbazkZhssPYR6~3yFo-kE8Ip~iknaaf35IoTDI2t1SaYM9~l6TvLJ8JeWF34Bi9reQoWGMlq3ar-S9Cxcdwv1Hxbuc0t3HNxxGfldomc7at2XcR-xPuHXlMahnKnkli49n3PpLCIFPJi-~0ApR2wcpo5rq07atW5J07ALCHzvKQkfl6rZkXqYdsGVdROwPYoDBHg0g__" alt="profile-photo" className="profile-img"/>
                        <div className="rating-container">
                            <h2>4.5</h2>
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728699164/material-symbols_star_qtfnyr.png" alt="star"/>
                        </div>
                    </div>
                    <div className="sub-card2">
                        <h1>Dr. Prerna Narang</h1>
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728570975/Frame_dwkvxt.png" alt="fertile-logo"/>
                            <p>Male-Female Infertility</p>
                        </div>
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571047/Frame_1_vxijle.png" alt="fertile-logo"/>
                            <p>7 years of Experience</p>
                        </div>
                        <div className="fertile-container">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571071/comment_1_std9ej.png" alt="fertile-logo"/>
                            <p>Speaks English,Hindi,Telugu</p>
                        </div>
                    </div>
                    <div className="consultation-container">
                        <div className="consultation">
                            <p>Video Consultation <span>$800</span></p>
                        </div>
                        <div className="consultation">
                            <p>Chat Consultation <span>Free</span></p>
                        </div>
                    </div>
                    <Link to="/appointment">
                    <button className="profile-btn">View Profile</button>
                    </Link>
                    <button className="book-btn">Book Consultation</button>
                </div>  
                <div className="card-container">
                    <div className="sub-card1">
                        <img src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNI~pzUVDgUbQe9k-LJDaG9pUdqbBkbkKOAHOsADzBM-annTUqakQHHXMnzM-pNT2b9m6Z39RG5yaf~0Pro28c7FnZoMmbeECIXt5oyZ8SPkdyEXjbgL3OX4cPLMgCz5uk9EUh3xCXjkD-hckbazkZhssPYR6~3yFo-kE8Ip~iknaaf35IoTDI2t1SaYM9~l6TvLJ8JeWF34Bi9reQoWGMlq3ar-S9Cxcdwv1Hxbuc0t3HNxxGfldomc7at2XcR-xPuHXlMahnKnkli49n3PpLCIFPJi-~0ApR2wcpo5rq07atW5J07ALCHzvKQkfl6rZkXqYdsGVdROwPYoDBHg0g__" alt="profile-photo" className="profile-img"/>
                        <div className="rating-container">
                            <h2>4.5</h2>
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728699164/material-symbols_star_qtfnyr.png" alt="star"/>
                        </div>
                    </div>
                    <div className="sub-card2">
                        <h1>Dr. Prerna Narang</h1>
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728570975/Frame_dwkvxt.png" alt="fertile-logo"/>
                            <p>Male-Female Infertility</p>
                        </div>
                        <div className="fertile-container1">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571047/Frame_1_vxijle.png" alt="fertile-logo"/>
                            <p>7 years of Experience</p>
                        </div>
                        <div className="fertile-container">
                            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1728571071/comment_1_std9ej.png" alt="fertile-logo"/>
                            <p>Speaks English,Hindi,Telugu</p>
                        </div>
                    </div>
                    <div className="consultation-container">
                        <div className="consultation">
                            <p>Video Consultation <span>$800</span></p>
                        </div>
                        <div className="consultation">
                            <p>Chat Consultation <span>Free</span></p>
                        </div>
                    </div>
                    <Link to="/appointment">
                    <button className="profile-btn">View Profile</button>
                    </Link>
                    <button className="book-btn">Book Consultation</button>
                </div>  
                </div>
            </div>
        )
    
}
export default Home
