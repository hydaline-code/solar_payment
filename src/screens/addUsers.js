import React, { useState, useEffect } from 'react'; // Added useEffect import
import { useNavigate } from 'react-router-dom';
import '../styles/addUser.css'; 
import { Link } from 'react-router-dom';
import '../styles/MenuButton.css'; 
import MenuButton from '../components/MenuButton'; 


const AddUser = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    idNo: '',
    contact: '',
    community: '',
    meterNo: '',
  });

  const [communities, setCommunities] = useState([]); // State for communities

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate fetching communities from backend (replace with actual API call)
  useEffect(() => {
    // Simulating a backend fetch for community options
    const fetchCommunities = async () => {
      // Replace with your actual API call
      const fetchedCommunities = [
        { id: 'community1', name: 'Community 1' },
        { id: 'community2', name: 'Community 2' },
        { id: 'community3', name: 'Community 3' },
      ];
      setCommunities(fetchedCommunities);
      // Set the first community as default if available
      if (fetchedCommunities.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          community: fetchedCommunities[0].id,
        }));
      }
    };

    fetchCommunities();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your backend endpoint
      const response = await fetch('https://your-backend-endpoint/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to confirmation page on successful submission
        navigate('/addConfirm');
      } else {
        // Handle error response
        console.error('Failed to add user:', response.statusText);
        // Display error message to user if needed
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Display error message to user if needed
    }
  };

  return (
    <div className="add-user-container">
      
      <div className="user-header">
       <h3>Add a New User</h3>
       <MenuButton />
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
            onChange={handleInputChange} // Use handleInputChange here
          >
            <option value="">Select Community</option>
            {communities.map((community) => (
              <option key={community.id} value={community.id}>
                {community.name}
              </option>
            ))}
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
        <Link to ="/addConfirm">
        <button type="submit" className="login-button">Add</button>
        </Link>
      </form>
    </div>
  );
};

export default AddUser;
