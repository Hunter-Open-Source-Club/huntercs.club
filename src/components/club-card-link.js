import React from "react"

const ClubCard = ({ post: club }) => (
  <article className="card ">
    <a to={club.link}>
      {!!club.thumbnail && (
        <img src={club.thumbnail} alt={club.name + "- Featured Shot"} />
      )}
    </a>
    <header>
      <h2 className="post-title">
        <a to={club.link} className="post-link">
          {club.name}
        </a>
      </h2>
      <div className="post-meta">{club.est}</div>
    </header>
  </article>
)
export default ClubCard
