import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';

import { useHomeStyles } from '../pages/Home/theme';
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  rowsMax?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  rowsMax = 7,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();

  const [text, setText] = React.useState<string>('');
  const textLimitPercent = (text.length / MAX_LENGTH) * 100;
  const textCount = MAX_LENGTH - text.length;
  const currentLengthText = text.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText('');
  };

  return (
    <div className={classes.tweetForm}>
      <div className={classes.tweetFormAvatarContainer}>
        <Avatar
          alt="Аватарка"
          src="https://sun9-28.userapi.com/impf/c857432/v857432329/c9fc6/2D3addxwlzg.jpg?size=1600x1066&quality=96&proxy=1&sign=120473f924e667b5bdb8e1a1fca12faf&type=album"
        />
      </div>
      <div className={classes.addFromContentContainer}>
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFromTextArea}
          rows={1.6}
          rowsMax={rowsMax}
          placeholder="Что происходит?"
          value={text}
        />
        <div className={classes.addFormSendContainer}>
          <div className={classes.addFormIcons}>
            <IconButton color="primary">
              <ImageIcon />
            </IconButton>
            <IconButton color="primary">
              <SmileIcon />
            </IconButton>
          </div>
          <div className={classes.addFormButton}>
            {text && (
              <>
                <span style={{ marginRight: -8 }}>{textCount}</span>
                <CircularProgress
                  className={classes.circularProgress}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={currentLengthText >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={currentLengthText >= MAX_LENGTH ? { color: '#f44336' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0,0,0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </>
            )}
            <Button
              onClick={handleClickAddTweet}
              disabled={currentLengthText >= MAX_LENGTH}
              style={{ marginLeft: 10 }}
              variant="contained"
              color="primary">
              Твитнуть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
