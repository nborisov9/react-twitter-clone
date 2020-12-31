import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AddPersonIcon from '@material-ui/icons/GroupAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';

import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';
import IconButton from '@material-ui/core/IconButton/IconButton';

import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container disableGutters={true} className={classes.wrapper} maxWidth="lg">
      <div className={classes.sideMenuWrapper}>
        <SideMenu classes={classes} />
      </div>

      <div>
        <Paper className={classes.tweetsWrapper} variant="outlined">
          <Paper className={classes.tweetsHedaer} variant="outlined">
            <Typography variant="h6">Главная</Typography>
          </Paper>

          <div>
            <AddTweetForm classes={classes} />
            <div className={classes.bottomLine}></div>
          </div>

          {isLoading ? (
            <div className={classes.tweetsCentered}>
              <CircularProgress />
            </div>
          ) : (
            tweets.map((tweet) => (
              <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user} />
            ))
          )}
        </Paper>
      </div>

      <div className={classes.rightBlockWrapper}>
        <SearchTextField
          className={classes.inputSearch}
          variant="outlined"
          placeholder="Поиск по Твиттеру"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Paper className={classes.currentTopicsContainer} variant="outlined">
          <Paper className={classes.currentTopics} variant="outlined">
            Актуальные темы
          </Paper>
          <Paper className={classes.currentTopics} variant="outlined">
            Казань
            <span>Твитов: 213213 </span>
          </Paper>
          <Paper className={classes.currentTopics} variant="outlined">
            #Навальный
            <span>Твитов: 213213 </span>
          </Paper>
          <Paper className={classes.currentTopics} variant="outlined">
            #Коронавирус
            <span>Твитов: 213213 </span>
          </Paper>
        </Paper>
        <div className={classes.personInfoContainer}>
          <Paper className={classes.currentTopics} variant="outlined">
            Кого читать
          </Paper>
          <Paper
            className={classNames(classes.currentTopics, classes.topicsPerson)}
            variant="outlined">
            <div>
              <Avatar
                alt="Аватарка"
                src="https://sun9-28.userapi.com/impf/c857432/v857432329/c9fc6/2D3addxwlzg.jpg?size=1600x1066&quality=96&proxy=1&sign=120473f924e667b5bdb8e1a1fca12faf&type=album"
              />
            </div>
            <div className={classes.topicsAllInfoPerson}>
              nastenka
              <span>@NastyaMladsheva</span>
            </div>
            <IconButton>
              <AddPersonIcon color="primary" />
            </IconButton>
          </Paper>
        </div>
      </div>
    </Container>
  );
};
