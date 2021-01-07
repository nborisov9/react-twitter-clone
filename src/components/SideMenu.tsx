import React from 'react';

import { Typography, IconButton, Button, Hidden } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../pages/Home/theme';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const onCloseAddTweet = (): void => {
    setVisibleAddTweet(false);
  };

  const handleClickOpenAddTweet = (): void => {
    setVisibleAddTweet(true);
  };

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} color="primary">
            <TwitterIcon color="primary" className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Hidden smDown>
          <Button
            onClick={handleClickOpenAddTweet}
            className={classes.sideMenuTweetButton}
            variant="contained"
            color="primary"
            fullWidth>
            Твитнуть
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            onClick={handleClickOpenAddTweet}
            variant="contained"
            color="primary"
            className={classes.hiddenCreateIcon}>
            <CreateIcon />
          </Button>
        </Hidden>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <AddTweetForm rowsMax={15} classes={classes} />
        </ModalBlock>
      </li>
    </ul>
  );
};
