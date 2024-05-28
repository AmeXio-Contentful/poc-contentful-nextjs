import { setTimeout } from 'timers';

import { useState } from 'react';

import { Link } from '@src/components/shared/link';
import { HeaderByIdQuery } from '@src/data/sanity/navigation/__generated/navigation.generated';


export const NavigationSanity = (props: HeaderByIdQuery) => {

  console.log('props', props);
  const navigationContentItems = props.allHeader[0].navigationItems;
  const navigationLanguageItems = props.allHeader[0]?.languageItems;

  const firstLanguageItem = navigationLanguageItems != null ? navigationLanguageItems[0] : null;
  navigationLanguageItems?.shift();

  const showDropdown = (id: number) => {
    if (lastOpenedDrawer && lastOpenedDrawer !== id) {
      const element = document.getElementById(`ctf-navigation-menu-item-${lastOpenedDrawer}`);
      if (element) {
        element.style.display = 'none';
      }
    }


    const element = document.getElementById(`ctf-navigation-menu-item-${id}`);
    if (element) {
      element.style.display = 'block';
    }
    setLastOpenedDrawer(id);
  };

  const [lastOpenedDrawer, setLastOpenedDrawer] = useState<number>();

  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const hideDropdown = (id: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoverTimeout(
      setTimeout(() => {
        const element = document.getElementById(`ctf-navigation-menu-item-${id}`)!;
        if (element && !element.matches(':hover')) {
          element.style.display = 'none';
        }
      }, 100),
    );
  };

  const renderNavigationLinks = (menuGroup) => {
    return menuGroup?.map(menuItem => {
      return (
        <li
          key={menuItem.text}
          className="flex flex-row items-center last:mb-0 mb-8"
        >
          <Link
            className="before:text-center before:mr-3 before:content-center transition-all duration-150 hover:text-primary text-secondary before:content-['|'] before:text-primary"
            href={menuItem.url?.current}>{menuItem.text}</Link>
        </li>
      );
    });
  };

  const renderLanguageLinks = (languageGroup) => {
    return languageGroup?.map(languageItem => {
      return (
        <li
          key={languageItem.language}
          className="flex flex-row items-center last:mb-0 mb-8"
        >
          <Link
            className="before:text-center before:mr-3 before:content-center transition-all duration-150 hover:text-primary text-secondary before:content-['|'] before:text-primary"
            href={languageItem.language}>
            <img src={languageItem.logo.asset.url} alt={languageItem.language} width="16" height="11" />
          </Link>
        </li>
      );
    });
  };

  console.log('navigationLanguageItems', navigationLanguageItems);
  console.log('first item', firstLanguageItem);
  return (
    <>
      {navigationContentItems?.length && (
        <nav role="navigation">
          <ul className="flex flex-row items-center list-none capitalize m-0 p-0 ">
            {navigationContentItems.map(
              (menuItem, index) =>
                <li
                  key={index}
                  className="group text-[12px] text-secondary"
                  onMouseEnter={() => showDropdown(index)}
                  onMouseLeave={() => hideDropdown(index)}
                >
                  {!menuItem?.url ? (
                    <p
                      className="hover:bg-primary hover:text-white transition-all duration-150 px-5 py-3">{menuItem?.text}</p>
                  ) : (
                    <Link
                      className="transition-all duration-150 text-secondary hover:bg-primary hover:text-white px-5 py-3"
                      href={`/${menuItem.url.current}`}>{menuItem.text}</Link>
                  )}
                  {menuItem?.children && menuItem.children.length > 0 && (
                    <ul
                      id={`ctf-navigation-menu-item-${index}`}
                      className="hidden absolute bg-white border-[1.5px] text-[12px] px-4 py-4 list-none w-[370px] top-[80%] transition-all duration-100 ease-in-out">
                      {renderNavigationLinks(menuItem.children)}
                    </ul>
                  )}
                </li>,
            )}

            <li
              key={firstLanguageItem?.language}
              className="capitalize inline-flex h-auto relative items-center pl-9">
              <img src={firstLanguageItem?.logo?.asset?.url as string} alt={firstLanguageItem?.language as string} width="16" height="11" />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
