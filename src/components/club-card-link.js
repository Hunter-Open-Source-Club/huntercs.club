import React from "react";

const ClubCard = ({ link, name, est, thumbnail }) => (
  <article className="card ">
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="post-link"
    >
      {!!thumbnail && <img src={thumbnail} alt={name + "- Featured Shot"} />}
    </a>
    <header>
      <h2 className="post-title">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="post-link"
        >
          {name}
        </a>
      </h2>
      <div className="post-meta">{est}</div>
    </header>
  </article>
);
export default ClubCard;
