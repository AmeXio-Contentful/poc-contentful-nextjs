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
import { FooterComponent, FooterProps } from '@src/components/features/decoupled-components/footer/footer';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const footerProps: FooterProps = {};
  footerProps.legalLinks = footerContent?.legalLinks?.featuredPagesCollection?.items?.map(item => ({
    title: getLinkDisplayText(item),
    link: getLinkHrefPrefix(item)
  })) || [];

  footerProps.socials = {
    facebookLink: footerContent?.facebookLink || undefined,
    twitterLink: footerContent?.twitterLink || undefined,
    linkedInLink: footerContent?.linkedinLink || undefined,
    instagramLink: footerContent?.instagramLink || undefined,

  }
  return (
    <>
      <div className={styles.doormat_container}>
        <div className={styles.doormat}>
          {footerContent && footerContent.menuItemsCollection && footerContent.menuItemsCollection.items.map(
            menuItem =>
              menuItem && (
                <div className={styles.doormat__column} key={menuItem.sys.id}>
                  <img className="text-white" src={menuItem.footerImage?.url as string}
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
                      {menuItem.featuredPagesCollection.items.map((item)=>{
                        if(item){
                          return (
                            <li
                              key={item.sys.id}
                              {...inspectorMode({
                                entryId: item.sys.id,
                                fieldId: 'pageName',
                              })}
                            >
                              <Link href={getLinkHrefPrefix(item)} title={getLinkDisplayText(item)}>
                                {getLinkDisplayText(item)}
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  )}
                </div>
              ),
          )}
        </div>
      </div>
      <FooterComponent legalLinks={footerProps.legalLinks} socials={footerProps.socials}  />
    </>
  );
};
