import "./TeamMood.css";
import { TeamMoodCard } from "../index";

function TeamMood() {
  return (
    <div className="team-mood">
      <span className="text-medium">Team Mood</span>

      <TeamMoodCard
        name={"Andrea"}
        occupation={"UX Junior"}
        sliderEmoji={"😕"}
      />
      <TeamMoodCard
        name={"Alvaro"}
        occupation={"Backend developer"}
        sliderEmoji={"😃"}
      />
      <TeamMoodCard name={"Juan"} occupation={"UX Senior"} sliderEmoji={"🙂"} />
      <TeamMoodCard name={"Jose"} occupation={"Marketing"} sliderEmoji={"😡"} />
      <TeamMoodCard
        name={"Maria"}
        occupation={"UX Junior"}
        sliderEmoji={"😐"}
      />
    </div>
  );
}

export default TeamMood;
