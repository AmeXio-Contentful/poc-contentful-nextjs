import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { AssetFragment } from '@ctf-components/ctf-asset/__generated__/AssetFragment';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },

  video: {
    width: '100%',
  },

  caption: {
    color: '#797979',
    fontSize: '1.8rem',
    fontStyle: 'italic',
    lineHeight: 1.389,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4.7rem',
    maxWidth: '77rem',
    textAlign: 'center',
  },
}));

interface CtfVideoPropsInterface extends AssetFragment {
  showDescription?: boolean;
  autoplay?: boolean;
  className?: string;
}

const CtfVideo = (props: CtfVideoPropsInterface) => {
  const { description, url, showDescription, autoplay, className } = props;

  const classes = useStyles();
  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src={url!} autoPlay={autoplay} controls className={classes.video} />
      {showDescription && <p className={classes.caption}>{description}</p>}
    </div>
  );
};

export default CtfVideo;
