export default {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      '*::-webkit-scrollbar': {
        width: 8,
        height: 8,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(2, 104, 93, 0.35)',
        borderRadius: 8,
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(2, 104, 93, 0.55)',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 12,
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        '&.Mui-focused': {
          boxShadow: `0 0 0 3px ${theme.palette.primary.main}22`,
        },
      }),
      notchedOutline: ({ theme }) => ({
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(2, 104, 93, 0.25)',
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focused': {
          color: theme.palette.primary.main,
          fontWeight: 500,
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: 0.3,
      },
      sizeMedium: {
        height: '42px',
      },
      containedPrimary: ({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        boxShadow: '0 6px 16px rgba(2, 104, 93, 0.28)',
        '&:hover': {
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          boxShadow: '0 8px 18px rgba(2, 104, 93, 0.36)',
        },
      }),
      containedSecondary: ({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: theme.palette.primary.contrastText,
        boxShadow: '0 6px 16px rgba(2, 104, 93, 0.28)',
        '&:hover': {
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          boxShadow: '0 8px 18px rgba(2, 104, 93, 0.36)',
        },
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:hover': {
          backgroundColor: `${theme.palette.primary.main}14`,
        },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 14,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 56,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        fontWeight: 500,
        '&:hover': {
          color: theme.palette.primary.dark,
        },
      }),
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      enterDelay: 500,
      enterNextDelay: 500,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        fontSize: 12,
        borderRadius: 6,
        padding: '6px 10px',
      }),
      arrow: ({ theme }) => ({
        color: theme.palette.primary.dark,
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        '@media print': {
          color: theme.palette.alwaysDark.main,
        },
      }),
      head: ({ theme }) => ({
        fontWeight: 600,
        color: theme.palette.primary.dark,
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(2,104,93,0.08)'}`,
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        margin: '2px 6px',
        '&.Mui-selected': {
          backgroundColor: `${theme.palette.primary.main}1F`,
          color: theme.palette.primary.main,
          '& .MuiListItemIcon-root': {
            color: theme.palette.primary.main,
          },
          '&:hover': {
            backgroundColor: `${theme.palette.primary.main}33`,
          },
        },
      }),
    },
  },
};
