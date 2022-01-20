import { useEffect, useState } from "react";
import axios from "axios";
//import styled from "@emotion/styled";
const About = ({ color = "gren" }) => {
  const [contents, setContents] = useState();
  useEffect(() => {
    async function handleWiki() {
      const url =
        "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=Breaking_Bad";
      const {
        data: { query }
      } = await axios.get(url);
      setContents(Object.keys(query.pages).map((x) => query.pages[x].extract));
    }
    handleWiki();
  }, []);

  return (
    <div>
      {contents && (
        <div>
          {contents.map((content, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
