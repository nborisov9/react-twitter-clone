import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ModalBlock } from '../components/Modal';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    backgroundColor: '#71C9F8',
    height: '100%',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '71%',
    top: '52%',
    transform: 'translate(-50%, -50%)',
    width: '190%',
    height: '190%',
  },
  blueSideListInfo: {
    zIndex: 1,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    widht: '380px',
    '& h6': {
      display: 'flex',
      alignItemes: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: '20px',
    },
  },
  blueSideListInfoItem: {
    marginBottom: '40px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  blueSideListInfoIcon: {
    fontSize: '32px',
    marginRight: '10px',
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  subTitleTwitter: {
    marginBottom: theme.spacing(2),
  },
  loginSideWrapper: {
    width: '380px',
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '60px',
    marginTop: '20px',
  },
  loginSideField: {
    marginBottom: '18px',
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  titleSignIn: {
    marginTop: '5px',
    marginBottom: '20px',
  },
}));

export const SignIn = () => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} /> Читайте о том, что
              вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={classes.subTitleTwitter}>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            style={{ marginBottom: '15px' }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignUp}>
            Зарегистироваться
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            fullWidth>
            Войти
          </Button>

          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            title="Войти в аккаунт"
            classes={classes}>
            <DialogContent>
              <Typography className={classes.titleSignIn} gutterBottom variant="h6">
                Войти в аккаунт
              </Typography>
              <TextField
                className={classes.loginSideField}
                autoFocus
                id="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                className={classes.loginSideField}
                autoFocus
                id="password"
                label="Пароль"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Отмена
              </Button>
              <Button onClick={handleCloseModal} color="primary">
                Войти
              </Button>
            </DialogActions>
          </ModalBlock>

          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            title="Создайте учетную запись"
            classes={classes}>
            <DialogContent>
              <Typography className={classes.titleSignIn} gutterBottom variant="h6">
                Войти в аккаунт
              </Typography>
              <TextField
                className={classes.registerField}
                autoFocus
                id="name"
                label="Имя"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                className={classes.registerField}
                autoFocus
                id="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                className={classes.loginSideField}
                autoFocus
                id="password"
                label="Пароль"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Отмена
              </Button>
              <Button onClick={handleCloseModal} color="primary">
                Далее
              </Button>
            </DialogActions>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
