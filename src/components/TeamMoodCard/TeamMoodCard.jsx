import "./TeamMoodCard.css";

function TeamMoodCard({ name, occupation, sliderEmoji }) {
  return (
    <div className="team-mood-card">
      <div className="team-mood-card-header">
        <img
          className="display-picture"
          src="https://i.pravatar.cc/35?img=1"
          alt="woman"
        />
        <div>
          <div className="text-medium">{name}</div>
          <div className="light-gray">{occupation}</div>
        </div>
      </div>
      <input className="slider-emoji" type="range" name="" id="" />
    </div>
  );
}

export default TeamMoodCard;
