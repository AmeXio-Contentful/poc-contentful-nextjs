import {setTimeout} from "timers";

import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { useState } from 'react';

import { NavigationFieldsFragment } from './__generated/ctf-navigation.generated';
import { getLinkDisplayText, getLinkHrefPrefix } from './utils';

import { Link } from '@src/components/shared/link';


interface SysId {
  sys: {
    id: string;
  }
}

interface ChildMenuItem {
  _typename: string;
  sys: SysId;
  slug: string;
  pageName: string;
  pageContentCollection: any
}

interface MenuItem {
  groupName: string;
  _typename: string;
  sys: SysId;
  link: {
    pageContentCollection: {
      items: any[]
    }
    pageName: string;
    slug: string;
    sys: SysId
    __typename: string;
  }
  children: {
    items: ChildMenuItem[]
  }
}

export const CtfNavigation = (props: NavigationFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();

  const navigationContent = props.items[0] as any;


  const showDropdown = (id: number)=> {
    if(lastOpenedDrawer && lastOpenedDrawer !== id){
      const element = document.getElementById(`ctf-navigation-menu-item-${lastOpenedDrawer}`);
      if(element){
        element.style.display = 'none';
      }
    }


    const element = document.getElementById(`ctf-navigation-menu-item-${id}`);
    if(element){
      element.style.display = 'block';
    }
    setLastOpenedDrawer(id);
  }

  const [lastOpenedDrawer, setLastOpenedDrawer] = useState<number>();

  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const hideDropdown = (id: number) => {
    if(hoverTimeout){
      clearTimeout(hoverTimeout);
    }
    setHoverTimeout(
          setTimeout( ()=>{
          const element = document.getElementById(`ctf-navigation-menu-item-${id}`)!;
          if(element && !element.matches(':hover')){
            element.style.display = 'none';
          }
        }, 100)
      )


  }

  const renderNavigationLinks = (menuGroup) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);

      return (
        <li
          key={menuItem.sys.id}
          className='flex flex-row items-center last:mb-0 mb-8'
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link className="before:text-center before:mr-3 before:content-center transition-all duration-150 hover:text-primary text-secondary before:content-['|'] before:text-primary" href={href}>{linkText}</Link>
        </li>
      );
    });
  };

  const navigationItems: any[] = [];
  const languageItems: any[] = [];

  navigationContent?.menuItemsCollection?.items.forEach((item:MenuItem) => {
      if (item.groupName && (item.children || item.link)) {
        navigationItems.push(item);
      } else {
        languageItems.push(item);
      }
  });

  return (
    <>
      {navigationContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul className='flex flex-row items-center list-none capitalize m-0 p-0 '>
            {navigationItems.map (
              (menuItem,index) =>
                  <li
                    key={menuItem.sys.id}
                    className="group text-[12px] text-secondary"
                    {...inspectorMode({
                      entryId: menuItem.sys.id,
                      fieldId: 'groupName',
                    })}
                    onMouseEnter={()=>showDropdown(index)}
                    onMouseLeave={()=>hideDropdown(index)}
                  >
                    {!menuItem.link ? (
                      <p className='hover:bg-primary hover:text-white transition-all duration-150 px-5 py-3'>{menuItem.groupName}</p>
                    ) : (
                      <Link className='transition-all duration-150 text-secondary hover:bg-primary hover:text-white px-5 py-3' href={`/${menuItem.link.slug}`}>{menuItem.groupName}</Link>
                    )}
                    {menuItem.children && menuItem.children.items.length > 0 && (
                      <ul
                        id={`ctf-navigation-menu-item-${index}`}
                        className="hidden absolute bg-white border-[1.5px] text-[12px] px-4 py-4 list-none w-[370px] top-[80%] transition-all duration-100 ease-in-out">
                        {renderNavigationLinks(menuItem.children)}
                      </ul>
                    )}
                  </li>
            )}

            {languageItems.map(
              languageItem =>
                <li
                  key={languageItem.sys.id}
                  className="capitalize inline-flex h-auto relative items-center pl-9"
                  {...inspectorMode({
                    entryId: languageItem.sys.id,
                    fieldId: 'groupName',
                  })}>
                  <img src={languageItem.localeImage.url} alt={languageItem.locale} width="16" height="11"/>
                </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};
