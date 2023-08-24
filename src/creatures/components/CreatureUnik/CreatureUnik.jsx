import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CreaturesService from "../services/CreaturesServices";
import Container from "react-bootstrap/Container";

const creatureService = new CreaturesService();

const CreatureUnik = () => {
  const params = useParams();

  console.log("params", params);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["creature"], // pour cache validation
    queryFn: () => creatureService.getCreatureById(params.id),
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Container>{data && <p>{data.name}</p>}</Container>
    </div>
  );
};

export default CreatureUnik;
