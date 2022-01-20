import ReactPlayer from "react-player";

const Home = () => (
  <div>
    <ReactPlayer
      url="https://youtu.be/lrcqbavlbyQ"
      playing
      width="auto"
      style={{ maxWidth: "700px" }}
    />
  </div>
);
export default Home;
