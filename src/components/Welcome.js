function Welcome(props) {
  const { firstName, lastName } = props;
  return (
    <div>
      <h1>
        Hello and Welcome, {firstName} {lastName}!
      </h1>
    </div>
  );
}

export default Welcome;
