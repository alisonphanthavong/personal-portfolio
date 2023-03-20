import React from "react";
import { connect } from "react-redux";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <img class="profile-photo" src={"/images/profile.jpg"} height="200" width="200"/>
      <p>
        Hi! I'm Alison, a fervent student of words and an educator turned coder
        based in Alexandria, Virginia.
      </p>

      <p>
        I've always been fascinated by how the human experience translates
        through language. Learning coding as a former teacher of literature has
        presented a series of new delights in this respect — written code
        operates as bridge between human and technology. I thrive in that
        creative and liminal space, seeking the best way the pieces fit
        together, and building with others to solve complex problems. I believe
        that at its best, code allows us to connect deeply and create without
        bounds.
      </p>

      <p>
        Outside of technology, my passions include public service, all things food and wine, and
        learning via cultivating relationships.
      </p>
    </div>
  );
};

export default connect(null)(About);
