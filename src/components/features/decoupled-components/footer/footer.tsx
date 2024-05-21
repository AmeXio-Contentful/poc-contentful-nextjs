import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { useTranslation } from 'next-i18next';

import styles from './footer.module.scss'

import { Link } from '@src/components/shared/link';

export interface FooterProps {
  socials?: {
    twitterLink?: string,
    facebookLink?: string,
    instagramLink?: string,
    linkedInLink?: string
  }
  legalLinks?: legalLink[]
}

type legalLink = {
  title: string,
  link: string
}
export const FooterComponent = (footerProps: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {footerProps.legalLinks && (
        <ul className={styles.footer__mainnav}>
          {footerProps.legalLinks.map((item, index) => {
            if (item) {
              return (
                <li key={index}>
                  <Link href={item.link} title={item.title}>
                    {item.title}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      )}

      <ul className={styles.footer__socials}>
        {footerProps.socials?.twitterLink && (
          <li>
            <a
              href={footerProps.socials?.twitterLink}
              title={t('socials.twitter')}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Twitter />
            </a>
          </li>
        )}
        {footerProps.socials?.facebookLink && (
          <li>
            <a
              href={footerProps.socials?.facebookLink}
              title={t('socials.facebook')}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Facebook />
            </a>
          </li>
        )}
        {footerProps.socials?.linkedInLink && (
          <li>
            <a
              href={footerProps.socials?.linkedInLink}
              title={t('socials.linkedin')}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        )}
        {footerProps.socials?.instagramLink && (
          <li>
            <a
              href={footerProps.socials?.instagramLink}
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
  )

}
