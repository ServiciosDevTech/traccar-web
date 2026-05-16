import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import LogoBrand from '../resources/images/logo.png';

const useStyles = makeStyles()((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '260px',
    maxHeight: '160px',
    width: 'auto',
    height: 'auto',
    margin: theme.spacing(2),
    objectFit: 'contain',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 4),
    background: theme.palette.brand?.white || '#FFFFFF',
    borderRadius: 24,
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)',
  },
}));

const LogoImage = ({ inverted = false }) => {
  const theme = useTheme();
  const { classes, cx } = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server.attributes?.logoInverted);

  const renderImg = (src) => (
    inverted ? (
      <div className={classes.card}>
        <img className={classes.image} src={src} alt="Multisoluciones" />
      </div>
    ) : (
      <img className={cx(classes.image)} src={src} alt="Multisoluciones" />
    )
  );

  if (logo) {
    if (expanded && logoInverted) {
      return renderImg(logoInverted);
    }
    return renderImg(logo);
  }
  return renderImg(LogoBrand);
};

export default LogoImage;
