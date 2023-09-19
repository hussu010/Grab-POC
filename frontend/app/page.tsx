"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [fragment, setFragment] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fragment = window.location.hash.substring(1);

    const tokenPair = fragment
      .split("&")
      .find((item) => item.startsWith("id_token="));
    if (tokenPair) {
      setFragment(tokenPair.split("=")[1]);
    }

    fetch(`https://plenty-paths-cry.loca.lt/?id_token=${fragment}`)
      .then((res) => res.text())
      .then((data) => setResponse(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>Fragment: {fragment}</div>;
}
