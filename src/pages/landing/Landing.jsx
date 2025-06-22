import { useNavigate } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section 
      className="landing"
      onClick={() => navigate("/shop")} 
    >
      <h1 className='landing-title'>Welcome - The Complete
        <span> R</span>
        esident
        <span> E</span>
        vil Universe Awaits</h1>
      <h2 className='landing-enter'>Dare to Enter</h2>
    </section>
  );
}