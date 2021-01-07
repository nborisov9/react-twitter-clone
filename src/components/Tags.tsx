import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import AddPersonIcon from '@material-ui/icons/GroupAddOutlined';
import { useSelector } from 'react-redux';

import { useHomeStyles } from '../pages/Home/theme';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';
import { Link } from 'react-router-dom';

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Paper className={classes.currentTopicsContainer} variant="outlined">
        <Paper
          className={classNames(classes.currentTopics, classes.titleCurrentTopics)}
          variant="outlined">
          Актуальные темы
        </Paper>
        {items.map((tag) => (
          <Link to={`/home/search?q=${tag.name}`} key={tag._id}>
            <Paper className={classes.currentTopics} variant="outlined">
              {tag.name}
              <span>Твитов: {tag.count}</span>
            </Paper>
          </Link>
        ))}
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
    </>
  );
};
