import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState("");
  const [displayText, setDisplayText] = useState(""); // Initialize as empty string
  const [animationStarted, setAnimationStarted] = useState(false);

  // Function to Fetch the flag text from the retrieved URL
  const handleFlagRetrieval = async () => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/75706c"
    )
      .then((response) => response.text())
      .then((data) => {
        setFlag(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleFlagRetrieval();
  }, []);

  // Start the typewriter effect after the flag is loaded
  useEffect(() => {
    if (!loading && !animationStarted && flag) {
      setAnimationStarted(true); // Mark animation as started
      let currentIndex = -1;

      const typewriterInterval = setInterval(() => {
        if (currentIndex < flag.length) {
          // Handle the case where prevText is undefined
          setDisplayText((prevText) => {
            if (prevText === "undefined") {
              return flag[currentIndex - 1]; // Start with the first character
            }
            return prevText + flag[currentIndex - 1]; // Append the next character
          });
          currentIndex++;
        } else {
          clearInterval(typewriterInterval); // Stop the interval when done
        }
      }, 500); // Half-second delay between characters

      // Cleanup interval on unmount
      return () => clearInterval(typewriterInterval);
    }
  }, [loading, flag]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {displayText.split("").map((char, index) => (
            <li key={index} style={{ display: "inline" }}>
              {char}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
