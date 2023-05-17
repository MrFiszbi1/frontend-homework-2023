import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const url = "https://thronesapi.com/api/v2/Characters";

export default function Search() {
  const [characters, setCharacters] = React.useState([]);
  const [matchedCharacter, setMatchedCharacter] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setCharacters(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    console.log(inputValue);
    characters.forEach((character) => {
      const characterMatch = characters.find(
        (character) => character.firstName.toLowerCase() === inputValue
      );
      if (characterMatch) {
        console.log("yes there was a match");
        setMatchedCharacter(characterMatch);
      }
    });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex-box",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
          maxWidth: "100%",
          mx: "auto"
        }}
      >
        <h1>Welcome To the Search Page</h1>
        <h2>Enter a character to find</h2>

        <TextField
          fullWidth
          label="Enter The Character"
          id="fullWidth"
          onChange={handleInputChange}
        />
        {matchedCharacter && (
          <figure>
            <img
              src={matchedCharacter.imageUrl}
              alt={matchedCharacter.fullName}
              style={{ maxWidth: "100%", marginTop: 20 }}
            />
            <figcaption>{matchedCharacter.fullName}</figcaption>
          </figure>
        )}
      </Box>
    </div>
  );
}
