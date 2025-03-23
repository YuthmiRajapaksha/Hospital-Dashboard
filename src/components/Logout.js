import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
  localStorage.removeItem("role");
  localStorage.removeItem("isAuthenticated");
    navigate('/login'); // Redirect to the login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
