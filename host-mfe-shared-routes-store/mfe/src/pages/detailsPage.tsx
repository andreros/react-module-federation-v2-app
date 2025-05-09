import { useNavigate } from "react-router-dom";

export const DetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='content'>
      <h2>Micro Frontend hbCjMfe - Details page</h2>

      <p>I'm the Details page</p>

      <p>
        <button onClick={() => navigate('..')}>Go back</button>
      </p>
    </div>
  );
};
