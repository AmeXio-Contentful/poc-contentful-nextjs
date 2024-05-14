import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { useTranslation } from 'next-i18next';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss'

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const renderMenuGroupLinks = (menuGroup) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li
          key={menuItem.sys.id}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link href={href} title={linkText}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <div className={styles.doormat}>
        {footerContent && footerContent.menuItemsCollection && footerContent.menuItemsCollection.items.map(
          menuItem =>
            menuItem && (
              <div className={styles.doormat__column} key={menuItem.sys.id}>
                <img className='text-white' src={menuItem.footerImage?.url as string}
                     alt={menuItem.footerImage?.title as string}
                />
                <h3
                  {...inspectorMode({
                    entryId: menuItem.sys.id,
                    fieldId: 'groupName',
                    locale,
                  })}
                >
                  {menuItem.groupName}
                </h3>
                {menuItem.featuredPagesCollection && (
                  <ul>
                    {renderMenuGroupLinks(
                      menuItem.featuredPagesCollection,
                    )}
                  </ul>
                )}
              </div>
            ),
        )}


      </div>
      <footer className={styles.footer}>
        {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
          <ul className={styles.footer__mainnav}>
            {renderMenuGroupLinks(
              footerContent.legalLinks.featuredPagesCollection,
            )}
          </ul>
        )}

        <ul className={styles.footer__socials}>
          {footerContent?.twitterLink && (
            <li>
              <a
                href={footerContent.twitterLink}
                title={t('socials.twitter')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Twitter />
              </a>
            </li>
          )}
          {footerContent?.facebookLink && (
            <li>
              <a
                href={footerContent.facebookLink}
                title={t('socials.facebook')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Facebook />
              </a>
            </li>
          )}
          {footerContent?.linkedinLink && (
            <li>
              <a
                href={footerContent.linkedinLink}
                title={t('socials.linkedin')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
          )}
          {footerContent?.instagramLink && (
            <li>
              <a
                href={footerContent.instagramLink}
                title={t('socials.instagram')}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Instagram />
              </a>
            </li>
          )}
        </ul>
      </footer>
    </>
  );
};
