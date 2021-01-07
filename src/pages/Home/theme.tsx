import { makeStyles } from '@material-ui/core/';

export const useHomeStyles = makeStyles((theme) => ({
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  sideMenuWrapper: {
    flex: '0 1 25%',
  },
  tweetsWrapper: {
    flex: '0 1 50%',
  },
  rightBlockWrapper: {
    flex: '0 1 25%',
    marginLeft: 26,
    position: 'sticky',
    top: 0,
  },
  tweetsContainer: {
    borderRadius: 0,
    height: '100%',
    width: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  sideMenuList: {
    padding: 0,
    margin: 0,
    width: 230,
    position: 'sticky',
    top: 0,
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
  tweetsHedaer: {
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
    padding: '10px 0px 10px 16px',
    display: 'flex',
    alignItems: 'flex-start',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweetsTitleHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  tweetUserName: {
    color: '#ADA9AA',
    marginLeft: 5,
  },
  tweetInfoContainer: {
    padding: '0 20px',
  },
  tweetTextContainer: {
    width: 500,
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 450,
    position: 'relative',
    left: -11,
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
  tweetsCentered: {
    marginTop: 50,
    textAlign: 'center',
  },
  hiddenCreateIcon: {
    borderRadius: 20,
    color: '#fff',
    marginLeft: 6,
  },
  inputSearch: {
    marginTop: 20,
    position: 'sticky',
    top: 20,
  },
  tweetForm: {
    width: '100%',
    display: 'flex',
    margin: '20px 0 0px 0',
    paddingBottom: 15,
  },
  bottomLine: {
    width: '100%',
    borderBottom: '12px solid rgb(235,236,239)',
  },
  addFromContentContainer: {
    flex: '0 1 90%',
    marginLeft: 5,
  },
  addFromTextArea: {
    width: '100%',
    resize: 'none',
    borderColor: 'transparent',
    fontSize: 19,
    fontWeight: 300,
    paddingTop: 5,
    font: 'inherit',
    outline: 'none',
    paddingRight: 20,
  },
  tweetFormAvatarContainer: {
    flex: '0 1 10%',
    marginLeft: 21,
  },
  addFormSendContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormIcons: {
    display: 'flex',
  },
  addFormButton: {
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  circularProgress: {
    position: 'relative',
    left: 20,
  },
  currentTopicsContainer: {
    overflow: 'hidden',
    borderRadius: '10px',
    borderColor: 'transparent',
    marginTop: 25,
    padding: '10px 0',
    position: 'sticky',
    top: 90,
  },
  personInfoContainer: {
    position: 'sticky',
    top: 330,
  },
  currentTopics: {
    borderRadius: 0,
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 700,
    paddingLeft: 10,
    flexDirection: 'column',
    backgroundColor: 'rgb(246,247,250)',

    '& span': {
      fontWeight: 400,
      fontSize: 15,
      color: 'rgb(174,175,178)',
    },

    '&:hover': {
      backgroundColor: '#EEF1F6',
    },
  },
  titleCurrentTopics: {
    fontWeight: 800,
    '&:hover': {
      backgroundColor: 'rgb(246,247,250)',
    },
  },
  topicsPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topicsAllInfoPerson: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 5,
  },
}));
