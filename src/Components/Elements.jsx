import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Elements() {
  const [site, setSite] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (site !== false) {
      setMessage("The Site Is UpLoad");
    }
  }, [site]);

  function getData() {
    setLoading(true);
    axios
      .get("www.facebook.com")
      .then((response) => {
        setSite(true);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container maxWidth="sm">
      <div>
        <Box m={1}>
          <Button color="primary" onClick={getData}>
            click
          </Button>
        </Box>
      </div>
      {loading && <CircularProgress color="secondary" />}
      <h2>{message}</h2>
    </Container>
  );
}
