import "./CardCreature.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CardCreature = ({ creature }) => {
  console.log("props(creature) name", creature);

  const style = {
    backgroundImage: `url(${creature.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  // TODO ?? Pourquoi mon link/navigate ne fonctionne pas, comment je dois passer l'url?

  const navigate = useNavigate();

  const onclick = () => {
    console.log("Miip");
    // navigate(`https://eldenring.fanapis.com/api/creatures/${creature.id}`);
    navigate(`/creatures/${creature.id}`);
  };

  return (
    <div className="card" style={style}>
      <h2 className="text-center text-white">{creature.name}</h2>
      <p className="text-center text-white">
        Description: {creature.description}
      </p>
      <p className="text-center text-white">Location: {creature.location}</p>
      <Link to={`/creatures/${creature.id}`}>Pour en savoir plus</Link>
      <Link to={`https://eldenring.fanapis.com/api/creatures/${creature.id}`}>
        Pour en savoir plus Prise 2
      </Link>
      <Button variant="warning" onClick={onclick}>
        Pour en savoir plus Prise 3
      </Button>
    </div>
  );
};

export default CardCreature;

// TODO ?? Pourquoi cette erreur sur creature et ...?
// https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
