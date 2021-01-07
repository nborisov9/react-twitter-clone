import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from 'react-router-dom';
import classNames from 'classnames';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';

import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';

import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tags } from '../../components/Tags';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container disableGutters={true} className={classes.wrapper} maxWidth="lg">
      <div className={classes.sideMenuWrapper}>
        <SideMenu classes={classes} />
      </div>

      <div className={classes.tweetsWrapper}>
        <Paper className={classes.tweetsContainer} variant="outlined">
          <Paper
            className={classNames(classes.tweetsHedaer, classes.tweetsTitleHeader)}
            variant="outlined">
            <Route path="/home/:any">
              <BackButton />
            </Route>

            <Route exact path={['/home', '/home/search']}>
              <Typography variant="h6">Твиты</Typography>
            </Route>

            <Route exact path="/home/tweet/:id">
              <Typography variant="h6">Твитнуть</Typography>
            </Route>
          </Paper>

          <Route exact path={['/home', '/home/search']}>
            <div>
              <AddTweetForm classes={classes} />
              <div className={classes.bottomLine}></div>
            </div>
          </Route>

          <Route exact path="/home">
            {isLoading ? (
              <div className={classes.tweetsCentered}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
            )}
          </Route>

          <Route exact path="/home/tweet/:id" component={FullTweet} />
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
        <Tags classes={classes} />
      </div>
    </Container>
  );
};
