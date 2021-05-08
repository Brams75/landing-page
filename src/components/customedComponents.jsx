import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const WhiteTextField = withStyles({
  root: {
    backgroundColor: '#fff',
    margin: '0.2rem',
    width: '75%',
  },
})(TextField);

export const BrownButton = withStyles({
  root: {
    backgroundColor: '#460e0d',
    margin: '1rem',
    padding: '0.8rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#460e0d',
    },
  },
})(Button);
