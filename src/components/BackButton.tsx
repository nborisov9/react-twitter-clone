import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const backButtonSyles = {
    margin: '0px 20px 0px 0px',
    transform: 'translateY(2px)',
  };

  const handleClickButton = () => history.goBack();

  return (
    <IconButton style={backButtonSyles} onClick={handleClickButton} color="primary">
      <ArrowBackIcon />
    </IconButton>
  );
};
