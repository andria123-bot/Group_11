import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      alert('Verification successful');
      navigate('/login');
    }
  }, [token, navigate]);

  return <div>Verifying</div>
}

export default Verify