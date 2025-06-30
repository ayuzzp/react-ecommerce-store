import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Change '/dashboard' to your actual dashboard route
  };

  return (
    <div className="text-center mt-5">
      <h2>🎉 Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Button variant="primary" onClick={handleBack} className="mt-3">
        🔙 Back to Dashboard
      </Button>
    </div>
  );
};

export default Success;
