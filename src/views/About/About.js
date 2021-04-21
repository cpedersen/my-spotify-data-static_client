import React from "react";
import styles from "./about.module.css";

const About = (props) => {
  return (
    <section className={styles.container}>
      {/*<form>
        <input type="button" value="Go back!" onclick="history.back()">
      </form>*/}
      <div className={styles.helpSection}>
        <h1 className={styles.header1}>General Help</h1>
        <p>
          The My Spotify Data app provides a way for users to search for songs
          in their playlists, functionality not provided by Spotify's user
          interface. In addition, My Spotify Data displays the user's listening
          history and creates CSV files containing the user's playlists and
          songs. In this way, the user can always be assured that they have a
          backup of their Spotify data.
        </p>
        <p>
          By logging into My Spotify Data, you agree to provide your music data
          to My Spotify Data, so that you can search and export your data. Your
          data is not accessible to other users and will not be sold to third
          parties.
        </p>
      </div>
    </section>
  );
};

export default About;
