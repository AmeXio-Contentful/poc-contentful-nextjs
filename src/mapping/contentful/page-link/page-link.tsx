import { ReactNode } from 'react';

import { Link, LinkProps } from '@src/components/shared/link';
import { PageLinkFieldsFragment } from '@src/lib/shared-fragments/__generated/page-link.generated';

export type PageLinkProps = Omit<LinkProps, 'children'> & {
  page: PageLinkFieldsFragment;
  render?: (pathname?: string) => ReactNode;
  children?: ReactNode;
};

export const PageLink = (props: PageLinkProps) => {
  const pathname = props.page.slug ? `/${props.page.slug}` : ``;

  const linkProps = {
    href: pathname,
    className: props.className,
    onClick: props.onClick,
    withoutMaterial: props.withoutMaterial,
    underline: props.underline,
    isButton: props.isButton || false,
    variant: props.variant,
    size: props.size,
    color: props.color,
    endIcon: props.endIcon,
    urlParams: props.urlParams,
  };

  return (
    <Link {...linkProps} legacyBehavior>
      {props.render ? props.render(pathname) : props.children}
    </Link>
  );
};
