

import {
  DoormatComponent,
  DoormatItem,
  DoormatItemChild, DoormatProps,
} from '@src/components/features/decoupled-components/doormat/doormat';
import { FooterComponent, FooterProps } from '@src/components/features/decoupled-components/footer/footer';
import { getLinkDisplayText, getLinkHrefPrefix } from '@src/data/contentful/navigation/utils';
import { FooterFieldsFragment } from '@src/data/contentful/footer/__generated/ctf-footer.generated';

export const Footer = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const doormatProps: DoormatProps = {items: []};
  if(footerContent && footerContent.menuItemsCollection){
    doormatProps.items =  footerContent.menuItemsCollection.items.map((collection)=>{

      const doormatItem: DoormatItem = {
        title: collection?.groupName || '',
        imageUrl: collection?.footerImage?.url || '',
        children: collection?.featuredPagesCollection?.items.map((collectionChild)=>{
          const doormatItemChild: DoormatItemChild = {
            title: collectionChild?.pageName || '',
            url: getLinkHrefPrefix(collectionChild)
          }
          return doormatItemChild;
        }) || []
      }
      return doormatItem;
    });
  }



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
      <DoormatComponent items={doormatProps.items} />
      <FooterComponent legalLinks={footerProps.legalLinks} socials={footerProps.socials}  />
    </>
  );
};
