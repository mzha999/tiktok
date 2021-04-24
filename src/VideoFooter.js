import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import { Grid } from "@material-ui/core";

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className="video_footer">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <Grid container className="videoFooter_ticker">
          <Grid item xs={1}>
            <MusicNoteIcon className="vieoFooter_icon" />
          </Grid>
          <Grid item xs={9}>
            <Ticker mode="smooth" className="ticker">
              {({ index }) => <p>{song}</p>}
            </Ticker>
          </Grid>
          <Grid item xs={1}>
            <img
              className="videoFooter_record"
              src="disk.png"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default VideoFooter;
