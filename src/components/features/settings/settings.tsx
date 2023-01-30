import { Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SettingsForm } from '@src/components/features/settings/settings-form';
import { useExternalSpaceAndPreview } from '@src/components/features/settings/useExternalSpaceAndPreview';
import SettingsIcon from '@src/icons/settings-icon.svg';

const useStyles = makeStyles((theme: Theme) => ({
  toggle: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '#192737',
    border: 0,
    borderRadius: '50%',
    bottom: theme.spacing(3),
    boxShadow: '0 2px 6px rgba(0,0,0,0.29)',
    cursor: 'pointer',
    display: 'flex',
    height: '6rem',
    justifyContent: 'center',
    position: 'fixed',
    right: theme.spacing(3),
    width: '6rem',
    zIndex: 1130,
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(9),
      right: theme.spacing(9),
    },
  },
  toggleImage: {
    display: 'block',
    transform: 'translateX(-1px)',
    width: '3rem',
  },
  animationEnter: {
    opacity: 0,
    transform: 'scale(0.1)',
    transformOrigin: 'bottom right',
  },
  animationEnterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 300ms, transform 300ms',
  },
  animationExit: {
    opacity: 1,
  },
  animationExitActive: {
    opacity: 0,
    transform: 'scale(0.1)',
    transformOrigin: 'bottom right',
    transition: 'opacity 300ms, transform 300ms',
  },
}));

export const Settings = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { shouldUseSpaceCredsFromParams } = useExternalSpaceAndPreview();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (settingsOpen === false) {
      document.body.classList.remove('is-scroll-locked');
      return;
    }

    if (window.matchMedia(theme.breakpoints.up('md').replace('@media ', '')).matches === true) {
      return;
    }

    document.body.classList.add('is-scroll-locked');
  }, [settingsOpen, theme.breakpoints]);

  return (
    <>
      <CSSTransition
        in={settingsOpen}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: classes.animationEnter,
          enterActive: classes.animationEnterActive,
          exit: classes.animationExit,
          exitActive: classes.animationExitActive,
        }}>
        <SettingsForm
          onClose={() => {
            setSettingsOpen(false);
          }}
        />
      </CSSTransition>
      {shouldUseSpaceCredsFromParams && (
        <button
          className={classes.toggle}
          type="button"
          onClick={() => {
            setSettingsOpen(open => !open);
          }}
          title="Toggle editorial toolbox">
          <SettingsIcon className={classes.toggleImage} />
        </button>
      )}
    </>
  );
};