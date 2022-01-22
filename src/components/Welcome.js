import Test from "./Test";
function Welcome(props) {
  const { firstName, lastName, test } = props;
  return (
    <div>
      <h1>
        Hello and Welcome, {firstName} {lastName}!
      </h1>
      <Test test={test} />
    </div>
  );
}

export default Welcome;
