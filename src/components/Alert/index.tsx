import { Alert as MuiAlert, Snackbar } from '@mui/material';
import { Theme, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AlertType } from '../../types';
import { AppState } from '../../redux/rootReducer';
import ErrorIcon from '@mui/icons-material/WarningRounded';
import SuccessIcon from '@mui/icons-material/CheckRounded';
import { getStyles } from './styles';
import { hideAlert } from '../../redux/alert/actions';

const getIcon = (type: AlertType, theme: Theme) =>
  type === AlertType.SUCCESS ? (
    <SuccessIcon sx={{ color: theme.palette.success.dark }} />
  ) : (
    <ErrorIcon sx={{ color: theme.palette.warning.main }} />
  );

export const Alert = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = getStyles(theme);

  const alert = useSelector((state: AppState) => state.alert);

  const handleClose = (
    _event?: Event | React.SyntheticEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideAlert());
  };

  return (
    <>
      {alert && (
        <Snackbar
          open={alert.isOpen}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={alert.timeout}
          onClose={handleClose}
        >
          <MuiAlert
            severity={alert.type}
            onClose={handleClose}
            sx={() => ({ ...styles.root, ...styles[alert.type] })}
            icon={getIcon(alert.type, theme)}
          >
            {alert.message}
          </MuiAlert>
        </Snackbar>
      )}
    </>
  );
};
