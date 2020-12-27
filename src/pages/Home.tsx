import React from 'react';
import {
  InputBase,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Container,
  withStyles,
} from '@material-ui/core';

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme) => ({
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  wrapper: {
    height: '100vh',
  },
  sideMenuList: {
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          color: theme.palette.primary.main,
        },
      },
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '0 20px 0 20px',
      borderRadius: '30px',
      height: 50,
      marginBottom: 15,
      transition: 'background-color .1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    maeginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginRight: 10,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHedaer: {
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
    padding: '10px 0px 10px 16px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweetUserName: {
    color: '#ADA9AA',
    marginLeft: 5,
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 450,
    position: 'relative',
    left: -12,
  },
  tweetIconFooter: {
    fontSize: 20,
  },
  tweet: {
    cursor: 'pointer',
    padding: '15px 0px 0px 20px',
    '&:hover': {
      background: 'rgb(245, 248, 250)',
    },
  },
}));

const SearchTextField = withStyles(() => ({
  input: {
    borderRadius: 30,
    backgroundColor: '#E6ECF0',
    height: 45,
    padding: 0,
  },
}))(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container disableGutters={true} className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHedaer} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            {new Array(8).fill(
              <Tweet
                text="Нет ничего более рабского, чем роскошь и нега, и ничего более царственного, чем труд."
                classes={classes}
                user={{
                  fullname: 'Alexandr Makedonskiy',
                  username: 'sanekmakedonskiy356',
                  avatarUrl:
                    'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=518&q=80',
                }}
              />,
            )}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="поиск по твиттеру">
            text
          </SearchTextField>
        </Grid>
      </Grid>
    </Container>
  );
};
