import React from 'react';

import { Typography, IconButton, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';

import { useHomeStyles } from '../pages/Home';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo} color="primary">
          <TwitterIcon color="primary" className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          Твитнуть
        </Button>
      </li>
    </ul>
  );
};
