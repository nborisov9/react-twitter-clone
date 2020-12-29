import React from 'react';
import classNames from 'classnames';
import { Avatar, Paper, Typography, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { useHomeStyles } from '../pages/Home/theme';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHedaer)} variant="outlined">
      <div>
        <Avatar alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
      </div>
      <div className={classes.tweetInfoContainer}>
        <Typography>
          <b>{user.fullname}</b>
          <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
          <span className={classes.tweetUserName}>·</span>&nbsp;
          <span className={classes.tweetUserName}>1 ч</span>&nbsp;
        </Typography>

        <Typography className={classes.tweetTextContainer} gutterBottom>
          {text}
        </Typography>

        <div className={classes.tweetFooter}>
          <div>
            <IconButton color="primary">
              <CommentIcon className={classes.tweetIconFooter} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton color="primary">
              <RepeatIcon className={classes.tweetIconFooter} />
            </IconButton>
          </div>
          <div>
            <IconButton color="primary">
              <LikeIcon className={classes.tweetIconFooter} />
            </IconButton>
          </div>
          <div>
            <IconButton color="primary">
              <ShareIcon className={classes.tweetIconFooter} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};
