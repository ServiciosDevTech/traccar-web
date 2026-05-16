import { useMediaQuery, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import LogoImage from './LogoImage';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.background.default,
  },
  sidebar: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 55%, ${theme.palette.secondary.main} 100%)`,
    color: theme.palette.primary.contrastText,
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    [theme.breakpoints.down('lg')]: {
      width: theme.dimensions.sidebarWidthTablet,
    },
    [theme.breakpoints.down('sm')]: {
      width: '0px',
    },
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.06)',
      pointerEvents: 'none',
    },
    '&::before': {
      width: 360,
      height: 360,
      top: -120,
      left: -120,
    },
    '&::after': {
      width: 480,
      height: 480,
      bottom: -200,
      right: -180,
    },
  },
  sidebarContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
    padding: theme.spacing(0, 4),
    textAlign: 'center',
  },
  tagline: {
    fontWeight: 600,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    opacity: 0.9,
  },
  subtitle: {
    maxWidth: 360,
    opacity: 0.85,
    fontWeight: 400,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    background: theme.palette.background.paper,
    boxShadow: '-2px 0px 24px rgba(2, 104, 93, 0.18)',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 18, 0, 0),
    },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 0.6,
    opacity: 0.85,
    zIndex: 1,
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {expanded && (
          <div className={classes.sidebarContent}>
            <LogoImage inverted />
            <Typography variant="overline" className={classes.tagline}>
              Suministros & Industriales
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Plataforma de seguimiento y gestión de comerciales Multisoluciones.
            </Typography>
          </div>
        )}
        {expanded && (
          <div className={classes.footer}>
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Multisoluciones — Todos los derechos reservados
          </div>
        )}
      </div>
      <Paper elevation={0} className={classes.paper}>
        <form className={classes.form}>{children}</form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
