'use client'
import Menu from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Theme, Toolbar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { useContentfulContext } from '@src/contentful-context';
import { CtfNavigationGql } from '@src/data/contentful/navigation/navigation-gql';
import { useCtfPageQuery } from '@src/data/contentful/page/__generated/ctf-page.generated';
import { useCtfPageBySysIdQuery } from '@src/data/contentful/page-by-sys-id/__generated/page-sysid-query.generated';
import Logo from '@src/icons/amexio-logo.svg';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  noBackground: {
    backgroundColor: 'white !important'
  },
  appbar: {
    boxShadow: '0 2px 6px #00000021',
  },
  toolbar: {
    height: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      height: HEADER_HEIGHT,
    },
  },
  toolbarContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    width: '70%',
    margin: 'auto',
  },
  logo: {
    display: 'block',
    maxWidth: '120px',
    height: 'auto',
  },
  menuWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  accountMenu: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  accountMenuItem: {
    '& + &': {
      marginLeft: theme.spacing(8),

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: '0.4rem',
    },
    '& .MuiButton-iconSizeSmall > :first-child': {
      fontSize: '1.5rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    width: '200px',
  },
}));

interface HeaderPropsInterface {
  isMenuOpen?: boolean;
  onMenuClick?: () => any;
}

export const Header = (props: HeaderPropsInterface) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { onMenuClick, isMenuOpen } = props;
  const classes = useStyles();
  const contentFulContext = useContentfulContext();

  const [homePageSlug, setHomePageSlug] = useState<string>();
  const { data: homePageSlugQuery } = useCtfPageQuery({
      slug: process.env.CONTENTFUL_HOMEPAGE_SLUG!,
      locale: "en",
      preview: false,
    }
    );


  const { data: homePageLocaleQuery } = useCtfPageBySysIdQuery({
      sysid: homePageSlugQuery?.pageCollection?.items[0]?.sys.id || '',
      locale: contentFulContext.locale.toLowerCase(),
      preview: contentFulContext.previewActive,
    },
    {
      enabled: (!!homePageSlugQuery?.pageCollection && homePageSlugQuery.pageCollection.items.length > 0),
    });

  useEffect(() => {
    if(homePageLocaleQuery){
      if (
        homePageLocaleQuery.pageCollection &&
        homePageLocaleQuery.pageCollection?.items.length > 0
      ) {
        setHomePageSlug(homePageLocaleQuery.pageCollection!.items[0]!.slug!);
      }
      else {
        setHomePageSlug(contentFulContext.locale.toLowerCase())
      }
    }

  }, [homePageLocaleQuery]);



  return (
    <AppBar position="sticky" color="secondary" className={classes.appbar}>
      <Toolbar>
        <Container
          className={classes.toolbarContent}
          disableGutters
          maxWidth={false}
          style={{
            maxWidth: `${CONTAINER_WIDTH / 10}rem`,
          }}>
          <Link
            href={`/${homePageSlug || ''}`}
            locale={contentFulContext.locale}>
            <Logo className={classes.corporateLogo} />
          </Link>
          <Box display={{ xs: 'none', md: 'block' }} className={classes.noBackground}>
            <div className={classes.menuWrapper}>
              <CtfNavigationGql />
            </div>
          </Box>
        </Container>

        {/* menu button */}
        <Box display={{ md: 'none' }}>
          <IconButton
            title={t('navigation.mobileMenuButton')}
            onClick={() => onMenuClick?.()}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="dialog">
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
