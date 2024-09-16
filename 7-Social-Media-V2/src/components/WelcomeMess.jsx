const WelcomeMess = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className="welcome">THere are no posts</h1>
      <button type="button" class="btn btn-success" onClick={onGetPostClick}>
        Get Posts Form Server
      </button>
    </center>
  );
};
export default WelcomeMess;
