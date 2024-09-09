import React, { useState } from 'react';
import { BiMenuAltRight,BiUserPlus,BiUser } from 'react-icons/bi';
import '../styles/userDetail.css'
import HomeCharts from '../components/HomeCharts';
import { UsersData } from '../data/userData';



const UserDetail = () => {

  return (
    <div className="userDetail-container">

      <div className="header">
      <h3>User Details<p>Community-A</p></h3>
      <Link to ="/">
        <BiMenuAltRight size={38}/>
        </Link>
      </div>
      <div className='newUser'>
      <BiUserPlus size={45}  />
      <h6 className='new'>New user</h6>
      </div>
      <div className="alldetails">
      <div className="userdetail-card">
        <div className="userdetail">
          <div className='user-icon'>
          <BiUser size={60}/>
          </div>
          <div className="infos-user">
          <p>Jean-Marc</p>
            <p>+237695451245</p>
            <p>ID: 1214745876</p>
            <p>Meter No: 12457869</p>
          </div>
        </div>
      </div>
      <div className="user-transaction">
        <HomeCharts  title="Jean Marc- Statistics" chartData={UsersData} />
        </div>
        
        <h3>See All</h3>
       
    </div>
    <button type="submit" className="contact-button">
        Contact
      </button>
    </div>
  );
};

export default UserDetail;
