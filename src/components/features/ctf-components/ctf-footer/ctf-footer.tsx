import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';
import { CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  footerTopbanner: {
    backgroundColor: '#ed6c25',
    height: '30px'
  },
  footerImage: {
    width: '50px',
    height: '50px',
    marginBottom: '20px'
  },
  menuItemSpacing: {
    padding: theme.spacing(2, 0, 2),
  },
  delimiterSpace: {
    padding: theme.spacing(4, 0, 4)
  },
  delimiter: {
    color: '#ed6c25',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3)
  },
  footerContainer: {
    background: 'linear-gradient(35deg, rgba(0,0,0,1) 2%, rgba(8,71,114,1) 85%)',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(15),
    },
  },
  menuWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(-8),
  },
  menuColumn: {
    paddingLeft: theme.spacing(8),
  },
  menu: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    width: '17.2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    color: '#ed6c25',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  submenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& $menuItem': {
      fontWeight: 400,
    },
  },
  submenuItem: {
    '& a': {
      fontSize: '16px',
      borderBottom: '1px solid transparent',
      color: 'white',
      display: 'inline-block',
      minWidth: 0,
      transition: 'border-bottom-color 0.2s ease-in-out',
    },
    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        color: '#ed6c25'
      },
    },
  },
  footerEndSection: {
    marginLeft: 'auto',
  },
  footerCorporateContainer: {
    backgroundColor: 'black',
    color: '#fff',
    paddingBottom: theme.spacing(0),
  },
  footerCorporate: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '45%',
  },
  storeLogos: {
    marginTop: theme.spacing(7),
  },
  storeLogo: {
    display: 'block',
    maxWidth: '11.5rem',
    '& + &': {
      marginTop: theme.spacing(5),
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
  },
  corporateLogoMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  corporateLogoContainer: {
    flexShrink: 0,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: '38.4rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  },
  copyrightAndLegal: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
  copyright: {
    fontSize: '1.8rem',
    lineHeight: 1.2,
    margin: theme.spacing(1, 10, 0, 0),
  },
  legalMenuWrapper: {},
  legalMenu: {
    listStyle: 'none',
    margin: theme.spacing(5, 0, 0),
    padding: 0,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 0,
    },
  },
  legalMenuItem: {
    display: 'flex',
    fontSize: '2rem',
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: 'auto',
    },
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      },
    },
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#fff',
      display: 'inline-block',
      transition: 'border-bottom-color 0.2s ease-in-out',
      fontSize: '16px',
      fontWeight: '600'
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        color: '#ed6c25'
      },
    },
  },
  socialDisclaimer: {
    [theme.breakpoints.up('md')]: {
      // marginTop: theme.spacing(7),
    },
  },
  socialWrapper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'start',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      order: -1,
      // marginRight: theme.spacing(8),
      width: '38.4rem',
    },
  },
  socialTitle: {
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    '& a': {
      color: 'inherit',
      display: 'inline-block',
      lineHeight: 1.6,

      '&:not(:first-child)': {
        marginLeft: theme.spacing(4),
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '2.2rem',
    },
    '& a:hover': {
      color: '#ed6c25'
    }
  }
}));

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const renderMenuGroupLinks = (menuGroup, listClassName, needsDelimiter) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link href={href} className={classes.menuItem + ' ' + (needsDelimiter ? classes.delimiterSpace : classes.menuItemSpacing)}>
            {linkText}
          </Link>
          {needsDelimiter ? <p className={classes.delimiter}> | </p> : <></>}
        </li>
      );
    });
  };

  const classes = useStyles();
  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
      entryId: footerContent.sys.id,
      fieldId: 'menuItems',
      locale,
    })
    : undefined;

  return (
    <>
      <div className={classes.footerTopbanner}></div>
      <Container {...containerProps} maxWidth={false} className={classes.footerContainer}>
        <footer className={classes.footer}>
          {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation" className={classes.menuWrapper}>
              {footerContent.menuItemsCollection.items.map(
                menuItem =>
                  menuItem && (
                    <div key={menuItem.sys.id} className={classes.menuColumn}>
                      <ul className={classes.menu}>
                        <li>
                          <img src={menuItem.footerImage?.url as string}
                               alt={menuItem.footerImage?.title as string}
                               className={classes.footerImage + ' invert'}
                          />
                          <p
                            className={classes.menuItem}
                            {...inspectorMode({
                              entryId: menuItem.sys.id,
                              fieldId: 'groupName',
                              locale,
                            })}
                          >
                            {menuItem.groupName}
                          </p>
                          {menuItem.featuredPagesCollection && (
                            <ul className={classes.submenu}>
                              {renderMenuGroupLinks(
                                menuItem.featuredPagesCollection,
                                classes.submenuItem,
                                false
                              )}
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  ),
              )}
            </nav>
          )}
        </footer>
      </Container>
      <Container maxWidth={false} className={classes.footerCorporateContainer}>
        <section className={classes.footerCorporate}>
          <div className={classes.corporateLogoMenu}>
            <section className={classes.copyrightAndLegal}>
              {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                <nav role="navigation" className={classes.legalMenuWrapper}>
                  <ul className={classes.legalMenu}>
                    {renderMenuGroupLinks(
                      footerContent.legalLinks.featuredPagesCollection,
                      classes.legalMenuItem,
                      true
                    )}
                  </ul>
                </nav>
              )}
            </section>
          </div>

          <div className={classes.socialDisclaimer}>
            <div className={classes.socialWrapper}>
              <div className={classes.social}>
                {footerContent?.twitterLink && (
                  <a
                    href={footerContent.twitterLink}
                    title={t('socials.twitter')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Twitter />
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a
                    href={footerContent.facebookLink}
                    title={t('socials.facebook')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Facebook />
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a
                    href={footerContent.linkedinLink}
                    title={t('socials.linkedin')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <LinkedIn />
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a
                    href={footerContent.instagramLink}
                    title={t('socials.instagram')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Instagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
