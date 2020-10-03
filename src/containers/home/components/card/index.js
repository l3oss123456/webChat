import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Card } from "antd";
import { HomeContext } from "../../../../cores/hooks/index";
import FormName from "../formName/index";
import { StyledBackgroundLayout } from "../../css/index";

const CardComponent = () => {
  //   const [count, setCount] = useState(0);
  //   const { count, setCount } = props;

  // const { data, loading } = useFetchApi(
  //   "https://pokeapi.co/api/v2/pokemon/ditto"
  // );

  // console.log({ data, loading });

  // const { count, handleCount } = useCouter();
  // const { isSubmit, handleSubmit } = useHome();
  const { isSubmit } = useContext(HomeContext);
  return (
    <StyledBackgroundLayout>
      {isSubmit && <Redirect to="/chat" />}
      <Card
        title="Welcome to Online Chat"
        bordered={false}
        style={{ width: 300 }}
      >
        <FormName />
      </Card>
      {/* {loading ? <div>Loading...</div> : <div>Loading success!!</div>}
        <h1>{count}</h1>
        <button onClick={() => handleCount("pluse")}>Add</button>
        <button onClick={() => handleCount("minus")}>Subtract</button> */}
    </StyledBackgroundLayout>
  );
};
export default CardComponent;
