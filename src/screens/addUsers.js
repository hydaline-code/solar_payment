import React, { useState } from 'react';
import '../styles/addUser.css'; 
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const AddUser = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    idNo: '',
    contact: '',
    community: '',
    meterNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="add-user-container">
      <div className="welcome-message">
      <h3>Add a New User</h3>
        <BiMenuAltRight size={38}/>
      </div>
   
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="idNo">ID_No*</label>
          <input
            type="text"
            id="idNo"
            name="idNo"
            value={formData.idNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="community">Community</label>
          <select
            id="community"
            name="community"
            value={formData.community}
            onChange={handleInputChange}
          >
            <option value="">Select Community</option>
            <option value="Community A">Community A</option>
            <option value="Community B">Community B</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="meterNo">Meter_No</label>
          <input
            type="text"
            id="meterNo"
            name="meterNo"
            value={formData.meterNo}
            onChange={handleInputChange}
          />
        </div>
        <Link to="/addConfirm">
        <button type="submit" className="submit-button">Add</button>
        </Link>
      </form>
    </div>
  );
};

export default AddUser;
