import { setTimeout } from "timers";

import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import localeEmoji from "locale-emoji";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { useContentfulContext } from "@src/contentful-context";
import { NavigationFieldsFragment } from "@src/data/contentful/navigation/__generated/navigation.generated";
import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from "@src/data/contentful/navigation/utils";
import { getLocales, useLocaleContext } from "@src/locale-context";
import { useCtfPageBySysIdQuery } from "@src/data/contentful/page-by-sys-id/__generated/page-sysid-query.generated";
import { useCtfPageQuery } from "@src/data/contentful/page/__generated/ctf-page.generated";

interface SysId {
  sys: {
    id: string;
  };
}

interface ChildMenuItem {
  _typename: string;
  sys: SysId;
  slug: string;
  pageName: string;
  pageContentCollection: any;
}

interface MenuItem {
  groupName: string;
  _typename: string;
  sys: SysId;
  link: {
    pageContentCollection: {
      items: any[];
    };
    pageName: string;
    slug: string;
    sys: SysId;
    __typename: string;
  };
  children: {
    items: ChildMenuItem[];
  };
}

export const CtfNavigation = (props: NavigationFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();

  const localeContext = useLocaleContext();
  const contentFulContext = useContentfulContext();
  const navigationContent = props.items[0] as any;

  const path = useRouter().asPath;

  const showDropdown = (id: number) => {
    if (lastOpenedDrawer && lastOpenedDrawer !== id) {
      const element = document.getElementById(
        `ctf-navigation-menu-item-${lastOpenedDrawer}`,
      );
      if (element) {
        element.style.display = "none";
      }
    }

    const element = document.getElementById(`ctf-navigation-menu-item-${id}`);
    if (element) {
      element.style.display = "block";
    }
    setLastOpenedDrawer(id);
  };

  const [lastOpenedDrawer, setLastOpenedDrawer] = useState<number>();

  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const hideDropdown = (id: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoverTimeout(
      setTimeout(() => {
        const element = document.getElementById(
          `ctf-navigation-menu-item-${id}`,
        )!;
        if (element && !element.matches(":hover")) {
          element.style.display = "none";
        }
      }, 100),
    );
  };

  const renderNavigationLinks = (menuGroup) => {
    return menuGroup?.items?.map((menuItem) => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);

      return (
        <li
          key={menuItem.sys.id}
          className="flex flex-row items-center last:mb-0 mb-8"
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: "pageName",
          })}
        >
          <Link
            className="before:text-center before:mr-3 before:content-center transition-all duration-150 hover:text-primary text-secondary before:content-['|'] before:text-primary"
            href={href}
          >
            {linkText}
          </Link>
        </li>
      );
    });
  };

  const navigationItems: any[] = [];

  navigationContent?.menuItemsCollection?.items.forEach((item: MenuItem) => {
    if (item.groupName && (item.children || item.link)) {
      navigationItems.push(item);
    }
  });

  let pathSysId: string | undefined;
  const localeSlugs: { locale: string; slug: string }[] = [];

  const homePageSlugs: { locale: string; slug: string }[] = [];
  let homePageSysId: string | undefined;

  localeContext.locales.forEach((locale) => {
    if (!homePageSysId) {
      const homePageQuery = useCtfPageQuery({
        slug: process.env.CONTENTFUL_HOMEPAGE_SLUG!,
        locale: "en",
        preview: false,
      });

      homePageSysId = homePageQuery.data?.pageCollection?.items[0]?.sys.id;
    }

    const homePageQuery = useCtfPageBySysIdQuery({
      sysid: homePageSysId!,
      locale: locale,
      preview: contentFulContext.previewActive,
    });

    let homePageSlug = "";
    if (
      homePageQuery.data?.pageCollection &&
      homePageQuery.data?.pageCollection?.items.length > 0
    ) {
      homePageSlug = homePageQuery.data!.pageCollection!.items[0]!.slug!;
    }

    homePageSlugs.push({
      slug: homePageSlug,
      locale,
    });

    if (!pathSysId) {
      const pathSlug = path.replace(/\//g, "");
      const pageQuery = useCtfPageQuery({
        slug:
          pathSlug === "" ? process.env.CONTENTFUL_HOMEPAGE_SLUG! : pathSlug,
        locale: contentFulContext.locale,
        preview: contentFulContext.previewActive,
      });
      pathSysId = pageQuery.data?.pageCollection?.items[0]?.sys.id;
    }

    const translated = useCtfPageBySysIdQuery({
      sysid: pathSysId!,
      locale: locale,
      preview: contentFulContext.previewActive,
    });

    const slug = translated.data?.pageCollection?.items[0]?.slug;
    localeSlugs.push({
      locale,
      slug: !slug ? "" : slug,
    });
  });

  return (
    <>
      {navigationContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul className="flex flex-row items-center list-none capitalize m-0 p-0 ">
            {navigationItems.map((menuItem, index) => (
              <li
                key={menuItem.sys.id}
                className="group text-[12px] text-secondary"
                {...inspectorMode({
                  entryId: menuItem.sys.id,
                  fieldId: "groupName",
                })}
                onMouseEnter={() => showDropdown(index)}
                onMouseLeave={() => hideDropdown(index)}
              >
                {!menuItem.link ? (
                  <p className="hover:bg-primary hover:text-white transition-all duration-150 px-5 py-3">
                    {menuItem.groupName}
                  </p>
                ) : (
                  <Link
                    className="transition-all duration-150 text-secondary hover:bg-primary hover:text-white px-5 py-3"
                    href={`/${menuItem.link.slug}`}
                  >
                    {menuItem.groupName}
                  </Link>
                )}
                {menuItem.children && menuItem.children.items.length > 0 && (
                  <ul
                    id={`ctf-navigation-menu-item-${index}`}
                    className="hidden absolute bg-white border-[1.5px] text-[12px] px-4 py-4 list-none w-[370px] top-[80%] transition-all duration-100 ease-in-out"
                  >
                    {renderNavigationLinks(menuItem.children)}
                  </ul>
                )}
              </li>
            ))}

            {localeContext.locales.map((locale) => (
              <Link
                href={
                  localeSlugs.find((slug) => slug.locale === locale)?.slug ||
                  homePageSlugs.find((homePage) => homePage.locale === locale)
                    ?.slug ||
                  ""
                }
                locale={locale}
                className={`cursor-pointer text-[18px] leading-4 mx-2 px-1 text-center ${contentFulContext.locale.toUpperCase() === locale.toUpperCase() ? "border-b-2 border-primary" : ""} `}
                key={locale}
              >
                {localeEmoji(locale)}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
