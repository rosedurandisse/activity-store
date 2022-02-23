import Adventures from "../Components/Adventures";

function Index(props) {
  return (
    <div>
      <h2>All Possible Adventures</h2>
      {<Adventures props={props} />}{" "}
    </div>
  );
}

export default Index;
