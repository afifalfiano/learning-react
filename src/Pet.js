import React from "react";

export default function Pet({ name, animal, breed, media, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
      <img src={media} alt={name} width="200" />
      <h2>{location}</h2>
    </div>
  );
}
