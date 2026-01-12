import Heading from "@theme/Heading";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            Sie kennen qmBase noch nicht? Hier unsere Erklärung in weniger als
            1:30!
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="Ghlm20iF31o"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="So funktioniert qmBase"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}
