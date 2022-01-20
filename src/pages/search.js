import axios from "axios";
import { useEffect, useState } from "react";
import ImgMediaCard from "../components/search/imgMediaCard";
import CircularProgress from "@mui/material/CircularProgress";
const Search = () => {
  const [myData, setMyData] = useState();

  useEffect(() => {
    async function handleData() {
      const { data } = await axios.get(
        "https://qtet2.sse.codesandbox.io/get-data"
      );
      setMyData(data.characters);
    }
    handleData();
  }, []);
  //setMyData([{name:"itay",image:"dsds"}])

  return (
    <div>
      <h1>Breaking Bad Cast</h1>
      {!myData && <CircularProgress disableShrink />}

      {myData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {myData.map((x, index) => (
            <ImgMediaCard name={x.name} image={x.image} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;
