export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  contentCarouselCollection?: Maybe<ContentCarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  imageCarouselCollection?: Maybe<ImageCarouselCollection>;
  imageCollection?: Maybe<ImageCollection>;
  languageMetadataCollection?: Maybe<LanguageMetadataCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  seoCollection?: Maybe<SeoCollection>;
  teaserCollection?: Maybe<TeaserCollection>;
  testimonialCollection?: Maybe<TestimonialCollection>;
};


export type AssetLinkingCollectionsContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsLanguageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTeaserCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/button) */
export type Button = Entry & {
  __typename?: 'Button';
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/button) */
export type ButtonButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/button) */
export type ButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type ButtonLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ButtonLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ButtonLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentWrapper) */
export type ComponentWrapper = Entry & {
  __typename?: 'ComponentWrapper';
  componentsCollection?: Maybe<ComponentWrapperComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentWrapperLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentWrapper) */
export type ComponentWrapperComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentWrapperComponentsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentWrapper) */
export type ComponentWrapperInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentWrapper) */
export type ComponentWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentWrapperCollection = {
  __typename?: 'ComponentWrapperCollection';
  items: Array<Maybe<ComponentWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentWrapperComponentsCollection = {
  __typename?: 'ComponentWrapperComponentsCollection';
  items: Array<Maybe<ComponentWrapperComponentsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentWrapperComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentWrapperComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentWrapperComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentWrapperComponentsItem = Button | Description | Image | ImageCarousel | Teaser | Testimonial | Title | TwoGrid;

export type ComponentWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentWrapperFilter>>>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentWrapperLinkingCollections = {
  __typename?: 'ComponentWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type ComponentWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentWrapperLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentWrapperLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentWrapperLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentWrapperOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarousel = Entry & {
  __typename?: 'ContentCarousel';
  autoplay?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  block2Body?: Maybe<ContentCarouselBlock2Body>;
  block2Image?: Maybe<Asset>;
  block2JobTitle?: Maybe<Scalars['String']>;
  block2Name?: Maybe<Scalars['String']>;
  block3Body?: Maybe<ContentCarouselBlock3Body>;
  block3Image?: Maybe<Asset>;
  block3JobTitle?: Maybe<Scalars['String']>;
  block3Name?: Maybe<Scalars['String']>;
  blockBody?: Maybe<ContentCarouselBlockBody>;
  blockImage?: Maybe<Asset>;
  blockJobTitle?: Maybe<Scalars['String']>;
  blockName?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentCarouselLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2JobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2NameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3JobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3NameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentCarouselBlock2Body = {
  __typename?: 'ContentCarouselBlock2Body';
  json: Scalars['JSON'];
  links: ContentCarouselBlock2BodyLinks;
};

export type ContentCarouselBlock2BodyAssets = {
  __typename?: 'ContentCarouselBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlock2BodyEntries = {
  __typename?: 'ContentCarouselBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlock2BodyLinks = {
  __typename?: 'ContentCarouselBlock2BodyLinks';
  assets: ContentCarouselBlock2BodyAssets;
  entries: ContentCarouselBlock2BodyEntries;
  resources: ContentCarouselBlock2BodyResources;
};

export type ContentCarouselBlock2BodyResources = {
  __typename?: 'ContentCarouselBlock2BodyResources';
  block: Array<ContentCarouselBlock2BodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlock2BodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlock2BodyResourcesInline>;
};

export type ContentCarouselBlock2BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlock2BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlock2BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselBlock3Body = {
  __typename?: 'ContentCarouselBlock3Body';
  json: Scalars['JSON'];
  links: ContentCarouselBlock3BodyLinks;
};

export type ContentCarouselBlock3BodyAssets = {
  __typename?: 'ContentCarouselBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlock3BodyEntries = {
  __typename?: 'ContentCarouselBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlock3BodyLinks = {
  __typename?: 'ContentCarouselBlock3BodyLinks';
  assets: ContentCarouselBlock3BodyAssets;
  entries: ContentCarouselBlock3BodyEntries;
  resources: ContentCarouselBlock3BodyResources;
};

export type ContentCarouselBlock3BodyResources = {
  __typename?: 'ContentCarouselBlock3BodyResources';
  block: Array<ContentCarouselBlock3BodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlock3BodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlock3BodyResourcesInline>;
};

export type ContentCarouselBlock3BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlock3BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlock3BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselBlockBody = {
  __typename?: 'ContentCarouselBlockBody';
  json: Scalars['JSON'];
  links: ContentCarouselBlockBodyLinks;
};

export type ContentCarouselBlockBodyAssets = {
  __typename?: 'ContentCarouselBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlockBodyEntries = {
  __typename?: 'ContentCarouselBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlockBodyLinks = {
  __typename?: 'ContentCarouselBlockBodyLinks';
  assets: ContentCarouselBlockBodyAssets;
  entries: ContentCarouselBlockBodyEntries;
  resources: ContentCarouselBlockBodyResources;
};

export type ContentCarouselBlockBodyResources = {
  __typename?: 'ContentCarouselBlockBodyResources';
  block: Array<ContentCarouselBlockBodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlockBodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlockBodyResourcesInline>;
};

export type ContentCarouselBlockBodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlockBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlockBodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselCollection = {
  __typename?: 'ContentCarouselCollection';
  items: Array<Maybe<ContentCarousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Body_contains?: InputMaybe<Scalars['String']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']>;
  block2JobTitle?: InputMaybe<Scalars['String']>;
  block2JobTitle_contains?: InputMaybe<Scalars['String']>;
  block2JobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  block2JobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2JobTitle_not?: InputMaybe<Scalars['String']>;
  block2JobTitle_not_contains?: InputMaybe<Scalars['String']>;
  block2JobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Name?: InputMaybe<Scalars['String']>;
  block2Name_contains?: InputMaybe<Scalars['String']>;
  block2Name_exists?: InputMaybe<Scalars['Boolean']>;
  block2Name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Name_not?: InputMaybe<Scalars['String']>;
  block2Name_not_contains?: InputMaybe<Scalars['String']>;
  block2Name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Body_contains?: InputMaybe<Scalars['String']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']>;
  block3JobTitle?: InputMaybe<Scalars['String']>;
  block3JobTitle_contains?: InputMaybe<Scalars['String']>;
  block3JobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  block3JobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3JobTitle_not?: InputMaybe<Scalars['String']>;
  block3JobTitle_not_contains?: InputMaybe<Scalars['String']>;
  block3JobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Name?: InputMaybe<Scalars['String']>;
  block3Name_contains?: InputMaybe<Scalars['String']>;
  block3Name_exists?: InputMaybe<Scalars['Boolean']>;
  block3Name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Name_not?: InputMaybe<Scalars['String']>;
  block3Name_not_contains?: InputMaybe<Scalars['String']>;
  block3Name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockBody_contains?: InputMaybe<Scalars['String']>;
  blockBody_exists?: InputMaybe<Scalars['Boolean']>;
  blockBody_not_contains?: InputMaybe<Scalars['String']>;
  blockImage_exists?: InputMaybe<Scalars['Boolean']>;
  blockJobTitle?: InputMaybe<Scalars['String']>;
  blockJobTitle_contains?: InputMaybe<Scalars['String']>;
  blockJobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  blockJobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockJobTitle_not?: InputMaybe<Scalars['String']>;
  blockJobTitle_not_contains?: InputMaybe<Scalars['String']>;
  blockJobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockName?: InputMaybe<Scalars['String']>;
  blockName_contains?: InputMaybe<Scalars['String']>;
  blockName_exists?: InputMaybe<Scalars['Boolean']>;
  blockName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockName_not?: InputMaybe<Scalars['String']>;
  blockName_not_contains?: InputMaybe<Scalars['String']>;
  blockName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentCarouselLinkingCollections = {
  __typename?: 'ContentCarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentCarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentCarouselLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentCarouselOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  Block2JobTitleAsc = 'block2JobTitle_ASC',
  Block2JobTitleDesc = 'block2JobTitle_DESC',
  Block2NameAsc = 'block2Name_ASC',
  Block2NameDesc = 'block2Name_DESC',
  Block3JobTitleAsc = 'block3JobTitle_ASC',
  Block3JobTitleDesc = 'block3JobTitle_DESC',
  Block3NameAsc = 'block3Name_ASC',
  Block3NameDesc = 'block3Name_DESC',
  BlockJobTitleAsc = 'blockJobTitle_ASC',
  BlockJobTitleDesc = 'blockJobTitle_DESC',
  BlockNameAsc = 'blockName_ASC',
  BlockNameDesc = 'blockName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/description) */
export type Description = Entry & {
  __typename?: 'Description';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<DescriptionLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/description) */
export type DescriptionDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/description) */
export type DescriptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DescriptionCollection = {
  __typename?: 'DescriptionCollection';
  items: Array<Maybe<Description>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DescriptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<DescriptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DescriptionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type DescriptionLinkingCollections = {
  __typename?: 'DescriptionLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type DescriptionLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DescriptionLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DescriptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DescriptionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DescriptionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DescriptionLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DescriptionLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DescriptionLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DescriptionLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum DescriptionLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DescriptionLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum DescriptionLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DescriptionLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DescriptionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuYoutubeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']>;
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink?: InputMaybe<Scalars['String']>;
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']>;
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_contains?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_not?: InputMaybe<Scalars['String']>;
  youtube_not_contains?: InputMaybe<Scalars['String']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterMenuOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBanner = Entry & {
  __typename?: 'HeroBanner';
  backgroundImage?: Maybe<Asset>;
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeroBannerOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/image) */
export type Image = Entry & {
  __typename?: 'Image';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ImageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/image) */
export type ImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/image) */
export type ImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarousel = Entry & {
  __typename?: 'ImageCarousel';
  autoplay?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ImageCarouselLinkingCollections>;
  sys: Sys;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageCarouselCollection = {
  __typename?: 'ImageCarouselCollection';
  items: Array<Maybe<ImageCarousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageCarouselLinkingCollections = {
  __typename?: 'ImageCarouselLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type ImageCarouselLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarouselLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarouselLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageCarouselLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageCarouselLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageCarouselLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageCarouselLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageCarouselOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ImageCollection = {
  __typename?: 'ImageCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type ImageLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadata = Entry & {
  __typename?: 'LanguageMetadata';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LanguageMetadataLinkingCollections>;
  locale?: Maybe<Scalars['String']>;
  localeImage?: Maybe<Asset>;
  localeUrl?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LanguageMetadataCollection = {
  __typename?: 'LanguageMetadataCollection';
  items: Array<Maybe<LanguageMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LanguageMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<LanguageMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LanguageMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  locale?: InputMaybe<Scalars['String']>;
  localeImage_exists?: InputMaybe<Scalars['Boolean']>;
  localeUrl?: InputMaybe<Scalars['String']>;
  localeUrl_contains?: InputMaybe<Scalars['String']>;
  localeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  localeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localeUrl_not?: InputMaybe<Scalars['String']>;
  localeUrl_not_contains?: InputMaybe<Scalars['String']>;
  localeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_contains?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_not?: InputMaybe<Scalars['String']>;
  locale_not_contains?: InputMaybe<Scalars['String']>;
  locale_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LanguageMetadataLinkingCollections = {
  __typename?: 'LanguageMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type LanguageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LanguageMetadataLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LanguageMetadataLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LanguageMetadataLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LanguageMetadataOrder {
  LocaleUrlAsc = 'localeUrl_ASC',
  LocaleUrlDesc = 'localeUrl_DESC',
  LocaleAsc = 'locale_ASC',
  LocaleDesc = 'locale_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/mainNavigation) */
export type MainNavigation = Entry & {
  __typename?: 'MainNavigation';
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<MainNavigationItemsCollection>;
  linkedFrom?: Maybe<MainNavigationLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/mainNavigation) */
export type MainNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MainNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/mainNavigation) */
export type MainNavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/mainNavigation) */
export type MainNavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MainNavigationCollection = {
  __typename?: 'MainNavigationCollection';
  items: Array<Maybe<MainNavigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MainNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  items?: InputMaybe<CfNavigationItemNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MainNavigationItemsCollection = {
  __typename?: 'MainNavigationItemsCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum MainNavigationItemsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MainNavigationLinkingCollections = {
  __typename?: 'MainNavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MainNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MainNavigationOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroup = Entry & {
  __typename?: 'MenuGroup';
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  footerImage?: Maybe<Asset>;
  groupLink?: Maybe<Page>;
  groupName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupFooterImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum MenuGroupFeaturedPagesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPages?: InputMaybe<CfPageNestedFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  footerImage_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink?: InputMaybe<CfPageNestedFilter>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MenuGroupLinkingCollectionsFooterMenuCollectionOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

export enum MenuGroupLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MenuGroupOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationItem) */
export type NavigationItem = Entry & {
  __typename?: 'NavigationItem';
  childrenCollection?: Maybe<NavigationItemChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationItemLinkingCollections>;
  page?: Maybe<Entry>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationItem) */
export type NavigationItemChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemChildrenCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationItem) */
export type NavigationItemPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationItem) */
export type NavigationItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationItemChildrenCollection = {
  __typename?: 'NavigationItemChildrenCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationItemChildrenCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  children?: InputMaybe<CfNavigationItemNestedFilter>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  page_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationItemLinkingCollections = {
  __typename?: 'NavigationItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainNavigationCollection?: Maybe<MainNavigationCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
};


export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationItemLinkingCollectionsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsMainNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationItemLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationItemLinkingCollectionsMainNavigationCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationItemLinkingCollectionsNavigationItemCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationItemOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  sys: Sys;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuMenuItemsFilter>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfmenuItemsMultiTypeNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<NavigationMenuMenuItemsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuMenuItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuMenuItemsItem = LanguageMetadata | MenuGroup;

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContentCollection?: Maybe<PagePageContentCollection>;
  pageName?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagePageContentFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTopSectionFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMenuGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLinkingCollectionsMenuGroupCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PagePageContentCollection = {
  __typename?: 'PagePageContentCollection';
  items: Array<Maybe<PagePageContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PagePageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PagePageContentItem = Button | ContentCarousel | Description | HeroBanner | ImageCarousel | PageSection | SolutionSection | Teaser | Testimonial | Title;

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSection = Entry & {
  __typename?: 'PageSection';
  componentsCollection?: Maybe<PageSectionComponentsCollection>;
  componentsGrouped?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageSectionLinkingCollections>;
  sectionType?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSectionComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionComponentsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSectionComponentsGroupedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/pageSection) */
export type PageSectionSectionTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageSectionComponentsCollection = {
  __typename?: 'PageSectionComponentsCollection';
  items: Array<Maybe<PageSectionComponentsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageSectionComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionComponentsItem = Button | ComponentWrapper | Description | Image | ImageCarousel | PageSection | SolutionSection | Teaser | Testimonial | Title | TwoGrid;

export type PageSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  componentsGrouped?: InputMaybe<Scalars['Boolean']>;
  componentsGrouped_exists?: InputMaybe<Scalars['Boolean']>;
  componentsGrouped_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionType?: InputMaybe<Scalars['String']>;
  sectionType_contains?: InputMaybe<Scalars['String']>;
  sectionType_exists?: InputMaybe<Scalars['Boolean']>;
  sectionType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionType_not?: InputMaybe<Scalars['String']>;
  sectionType_not_contains?: InputMaybe<Scalars['String']>;
  sectionType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionLinkingCollections = {
  __typename?: 'PageSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type PageSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSectionLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSectionLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageSectionLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageSectionLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageSectionLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageSectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageTopSectionItem = HeroBanner;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  componentWrapper?: Maybe<ComponentWrapper>;
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  contentCarousel?: Maybe<ContentCarousel>;
  contentCarouselCollection?: Maybe<ContentCarouselCollection>;
  description?: Maybe<Description>;
  descriptionCollection?: Maybe<DescriptionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  heroBanner?: Maybe<HeroBanner>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  image?: Maybe<Image>;
  imageCarousel?: Maybe<ImageCarousel>;
  imageCarouselCollection?: Maybe<ImageCarouselCollection>;
  imageCollection?: Maybe<ImageCollection>;
  languageMetadata?: Maybe<LanguageMetadata>;
  languageMetadataCollection?: Maybe<LanguageMetadataCollection>;
  mainNavigation?: Maybe<MainNavigation>;
  mainNavigationCollection?: Maybe<MainNavigationCollection>;
  menuGroup?: Maybe<MenuGroup>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageSection?: Maybe<PageSection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  solutionSection?: Maybe<SolutionSection>;
  solutionSectionCollection?: Maybe<SolutionSectionCollection>;
  teaser?: Maybe<Teaser>;
  teaserCollection?: Maybe<TeaserCollection>;
  testimonial?: Maybe<Testimonial>;
  testimonialCollection?: Maybe<TestimonialCollection>;
  title?: Maybe<Title>;
  titleCollection?: Maybe<TitleCollection>;
  twoGrid?: Maybe<TwoGrid>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryComponentWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentWrapperFilter>;
};


export type QueryContentCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentCarouselFilter>;
};


export type QueryDescriptionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDescriptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DescriptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DescriptionFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerFilter>;
};


export type QueryImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageCarouselFilter>;
};


export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageFilter>;
};


export type QueryLanguageMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLanguageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LanguageMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LanguageMetadataFilter>;
};


export type QueryMainNavigationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MainNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MainNavigationFilter>;
};


export type QueryMenuGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryNavigationItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySolutionSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySolutionSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SolutionSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SolutionSectionFilter>;
};


export type QueryTeaserArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTeaserCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeaserFilter>;
};


export type QueryTestimonialArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialFilter>;
};


export type QueryTitleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TitleFilter>;
};


export type QueryTwoGridArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TwoGridOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TwoGridFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/solutionSection) */
export type SolutionSection = Entry & {
  __typename?: 'SolutionSection';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SolutionSectionLinkingCollections>;
  sys: Sys;
  teasersCollection?: Maybe<SolutionSectionTeasersCollection>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/solutionSection) */
export type SolutionSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/solutionSection) */
export type SolutionSectionTeasersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SolutionSectionTeasersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeaserFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/solutionSection) */
export type SolutionSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SolutionSectionCollection = {
  __typename?: 'SolutionSectionCollection';
  items: Array<Maybe<SolutionSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SolutionSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SolutionSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SolutionSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  teasers?: InputMaybe<CfTeaserNestedFilter>;
  teasersCollection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SolutionSectionLinkingCollections = {
  __typename?: 'SolutionSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type SolutionSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SolutionSectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SolutionSectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SolutionSectionLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SolutionSectionLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SolutionSectionLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SolutionSectionLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SolutionSectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SolutionSectionTeasersCollection = {
  __typename?: 'SolutionSectionTeasersCollection';
  items: Array<Maybe<Teaser>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SolutionSectionTeasersCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  GroupedAsc = 'grouped_ASC',
  GroupedDesc = 'grouped_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type Teaser = Entry & {
  __typename?: 'Teaser';
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  grouped?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<TeaserLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserGroupedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/teaser) */
export type TeaserTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TeaserCollection = {
  __typename?: 'TeaserCollection';
  items: Array<Maybe<Teaser>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TeaserFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  grouped?: InputMaybe<Scalars['Boolean']>;
  grouped_exists?: InputMaybe<Scalars['Boolean']>;
  grouped_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeaserLinkingCollections = {
  __typename?: 'TeaserLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  solutionSectionCollection?: Maybe<SolutionSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type TeaserLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TeaserLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TeaserLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TeaserLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TeaserLinkingCollectionsSolutionSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserLinkingCollectionsSolutionSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TeaserLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TeaserLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TeaserLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TeaserLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TeaserLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TeaserLinkingCollectionsSolutionSectionCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TeaserLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TeaserOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  GroupedAsc = 'grouped_ASC',
  GroupedDesc = 'grouped_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type Testimonial = Entry & {
  __typename?: 'Testimonial';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<TestimonialLinkingCollections>;
  quote?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type TestimonialImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type TestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type TestimonialQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type TestimonialSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/testimonial) */
export type TestimonialTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestimonialCollection = {
  __typename?: 'TestimonialCollection';
  items: Array<Maybe<Testimonial>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  quote?: InputMaybe<Scalars['String']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quote_not?: InputMaybe<Scalars['String']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestimonialLinkingCollections = {
  __typename?: 'TestimonialLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type TestimonialLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TestimonialLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TestimonialLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TestimonialLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestimonialLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TestimonialLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TestimonialLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TestimonialLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TestimonialOrder {
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type Title = Entry & {
  __typename?: 'Title';
  alignment?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fontSize?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TitleLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleFontSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  items: Array<Maybe<Title>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  alignment?: InputMaybe<Scalars['String']>;
  alignment_contains?: InputMaybe<Scalars['String']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alignment_not?: InputMaybe<Scalars['String']>;
  alignment_not_contains?: InputMaybe<Scalars['String']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontSize?: InputMaybe<Scalars['String']>;
  fontSize_contains?: InputMaybe<Scalars['String']>;
  fontSize_exists?: InputMaybe<Scalars['Boolean']>;
  fontSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontSize_not?: InputMaybe<Scalars['String']>;
  fontSize_not_contains?: InputMaybe<Scalars['String']>;
  fontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TitleLinkingCollections = {
  __typename?: 'TitleLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type TitleLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TitleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TitleLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TitleLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TitleLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TitleLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TitleLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TitleLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TitleOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  FontSizeAsc = 'fontSize_ASC',
  FontSizeDesc = 'fontSize_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/twoGrid) */
export type TwoGrid = Entry & {
  __typename?: 'TwoGrid';
  componentLeft?: Maybe<TwoGridComponentLeft>;
  componentRight?: Maybe<TwoGridComponentRight>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TwoGridLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/twoGrid) */
export type TwoGridComponentLeftArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/twoGrid) */
export type TwoGridComponentRightArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/twoGrid) */
export type TwoGridInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/twoGrid) */
export type TwoGridLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TwoGridCollection = {
  __typename?: 'TwoGridCollection';
  items: Array<Maybe<TwoGrid>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TwoGridComponentLeft = Button | Description | Image | ImageCarousel | PageSection | Teaser | Testimonial | Title | TwoGrid;

export type TwoGridComponentRight = Button | Description | Image | ImageCarousel | PageSection | Teaser | Testimonial | Title | TwoGrid;

export type TwoGridFilter = {
  AND?: InputMaybe<Array<InputMaybe<TwoGridFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TwoGridFilter>>>;
  componentLeft_exists?: InputMaybe<Scalars['Boolean']>;
  componentRight_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TwoGridLinkingCollections = {
  __typename?: 'TwoGridLinkingCollections';
  componentWrapperCollection?: Maybe<ComponentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  twoGridCollection?: Maybe<TwoGridCollection>;
};


export type TwoGridLinkingCollectionsComponentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TwoGridLinkingCollectionsComponentWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TwoGridLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TwoGridLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TwoGridLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TwoGridLinkingCollectionsTwoGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TwoGridLinkingCollectionsTwoGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TwoGridLinkingCollectionsComponentWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TwoGridLinkingCollectionsPageSectionCollectionOrder {
  ComponentsGroupedAsc = 'componentsGrouped_ASC',
  ComponentsGroupedDesc = 'componentsGrouped_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SectionTypeAsc = 'sectionType_ASC',
  SectionTypeDesc = 'sectionType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TwoGridLinkingCollectionsTwoGridCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TwoGridOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  footerImage_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  page_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTeaserNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTeaserNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTeaserNestedFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  grouped?: InputMaybe<Scalars['Boolean']>;
  grouped_exists?: InputMaybe<Scalars['Boolean']>;
  grouped_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfcomponentsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfmenuItemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfpageContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CftopSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentButtonFieldsFragment = { __typename: 'Button', url?: string | null, buttonText?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentButtonQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentButtonQuery = { __typename?: 'Query', button?: { __typename: 'Button', url?: string | null, buttonText?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

type DefaultInfo_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_ComponentWrapper_Fragment = { __typename: 'ComponentWrapper', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_ContentCarousel_Fragment = { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Description_Fragment = { __typename: 'Description', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_HeroBanner_Fragment = { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Image_Fragment = { __typename: 'Image', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_ImageCarousel_Fragment = { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_LanguageMetadata_Fragment = { __typename: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_MainNavigation_Fragment = { __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_NavigationItem_Fragment = { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_PageSection_Fragment = { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_SolutionSection_Fragment = { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Teaser_Fragment = { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Testimonial_Fragment = { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_Title_Fragment = { __typename: 'Title', sys: { __typename?: 'Sys', id: string } };

type DefaultInfo_TwoGrid_Fragment = { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfoFragment = DefaultInfo_Button_Fragment | DefaultInfo_ComponentWrapper_Fragment | DefaultInfo_ContentCarousel_Fragment | DefaultInfo_Description_Fragment | DefaultInfo_FooterMenu_Fragment | DefaultInfo_HeroBanner_Fragment | DefaultInfo_Image_Fragment | DefaultInfo_ImageCarousel_Fragment | DefaultInfo_LanguageMetadata_Fragment | DefaultInfo_MainNavigation_Fragment | DefaultInfo_MenuGroup_Fragment | DefaultInfo_NavigationItem_Fragment | DefaultInfo_NavigationMenu_Fragment | DefaultInfo_Page_Fragment | DefaultInfo_PageSection_Fragment | DefaultInfo_Seo_Fragment | DefaultInfo_SolutionSection_Fragment | DefaultInfo_Teaser_Fragment | DefaultInfo_Testimonial_Fragment | DefaultInfo_Title_Fragment | DefaultInfo_TwoGrid_Fragment;

export type CtfComponentsWrapperFieldsFragment = { __typename: 'ComponentWrapper', componentsCollection?: { __typename?: 'ComponentWrapperComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', title?: string | null, subtitle?: string | null, quote?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentWrapperQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentWrapperQuery = { __typename?: 'Query', componentWrapper?: { __typename: 'ComponentWrapper', componentsCollection?: { __typename?: 'ComponentWrapperComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', title?: string | null, subtitle?: string | null, quote?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null };

export type ComponentDescriptionFieldsFragment = { __typename: 'Description', description?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentDescriptionQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentDescriptionQuery = { __typename?: 'Query', description?: { __typename: 'Description', description?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type ComponentImageCarouselFieldsFragment = { __typename: 'ImageCarousel', autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, imageCollection?: { __typename?: 'AssetCollection', total: number, items: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfComponentInfiniteCarouselQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentInfiniteCarouselQuery = { __typename?: 'Query', imageCarousel?: { __typename: 'ImageCarousel', autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, imageCollection?: { __typename?: 'AssetCollection', total: number, items: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type CtfPageSectionFieldsFragment = { __typename: 'PageSection', componentsGrouped?: boolean | null, sectionType?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentWrapper', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'SolutionSection' } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', title?: string | null, subtitle?: string | null, quote?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } };

export type CtfPageSectionQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPageSectionQuery = { __typename?: 'Query', pageSection?: { __typename: 'PageSection', componentsGrouped?: boolean | null, sectionType?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentWrapper', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'SolutionSection' } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', title?: string | null, subtitle?: string | null, quote?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null } | null, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null } | null, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type ComponentTeaserFieldsFragment = { __typename: 'Teaser', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonUrl?: string | null, grouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null };

export type CtfComponentTeaserQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentTeaserQuery = { __typename?: 'Query', teaser?: { __typename: 'Teaser', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonUrl?: string | null, grouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null };

export type ComponentTitleFieldsFragment = { __typename: 'Title', title?: string | null, alignment?: string | null, fontSize?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentTitleQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentTitleQuery = { __typename?: 'Query', title?: { __typename: 'Title', title?: string | null, alignment?: string | null, fontSize?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type ComponentsFieldPageSectionFragment = { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentWrapper' } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel' } | { __typename?: 'PageSection' } | { __typename?: 'SolutionSection' } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TwoGrid' } | null> } | null };

type ComponentsFields_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

type ComponentsFields_ComponentWrapper_Fragment = { __typename?: 'ComponentWrapper' };

type ComponentsFields_ContentCarousel_Fragment = { __typename?: 'ContentCarousel' };

type ComponentsFields_Description_Fragment = { __typename: 'Description', sys: { __typename?: 'Sys', id: string } };

type ComponentsFields_FooterMenu_Fragment = { __typename?: 'FooterMenu' };

type ComponentsFields_HeroBanner_Fragment = { __typename?: 'HeroBanner' };

type ComponentsFields_Image_Fragment = { __typename: 'Image', sys: { __typename?: 'Sys', id: string } };

type ComponentsFields_ImageCarousel_Fragment = { __typename?: 'ImageCarousel' };

type ComponentsFields_LanguageMetadata_Fragment = { __typename?: 'LanguageMetadata' };

type ComponentsFields_MainNavigation_Fragment = { __typename?: 'MainNavigation' };

type ComponentsFields_MenuGroup_Fragment = { __typename?: 'MenuGroup' };

type ComponentsFields_NavigationItem_Fragment = { __typename?: 'NavigationItem' };

type ComponentsFields_NavigationMenu_Fragment = { __typename?: 'NavigationMenu' };

type ComponentsFields_Page_Fragment = { __typename?: 'Page' };

type ComponentsFields_PageSection_Fragment = { __typename?: 'PageSection' };

type ComponentsFields_Seo_Fragment = { __typename?: 'Seo' };

type ComponentsFields_SolutionSection_Fragment = { __typename?: 'SolutionSection' };

type ComponentsFields_Teaser_Fragment = { __typename?: 'Teaser' };

type ComponentsFields_Testimonial_Fragment = { __typename?: 'Testimonial' };

type ComponentsFields_Title_Fragment = { __typename: 'Title', sys: { __typename?: 'Sys', id: string } };

type ComponentsFields_TwoGrid_Fragment = { __typename?: 'TwoGrid' };

export type ComponentsFieldsFragment = ComponentsFields_Button_Fragment | ComponentsFields_ComponentWrapper_Fragment | ComponentsFields_ContentCarousel_Fragment | ComponentsFields_Description_Fragment | ComponentsFields_FooterMenu_Fragment | ComponentsFields_HeroBanner_Fragment | ComponentsFields_Image_Fragment | ComponentsFields_ImageCarousel_Fragment | ComponentsFields_LanguageMetadata_Fragment | ComponentsFields_MainNavigation_Fragment | ComponentsFields_MenuGroup_Fragment | ComponentsFields_NavigationItem_Fragment | ComponentsFields_NavigationMenu_Fragment | ComponentsFields_Page_Fragment | ComponentsFields_PageSection_Fragment | ComponentsFields_Seo_Fragment | ComponentsFields_SolutionSection_Fragment | ComponentsFields_Teaser_Fragment | ComponentsFields_Testimonial_Fragment | ComponentsFields_Title_Fragment | ComponentsFields_TwoGrid_Fragment;

export type ComponentTwoGridFieldsFragment = { __typename: 'TwoGrid', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, componentLeft?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentWrapper' } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel' } | { __typename?: 'PageSection' } | { __typename?: 'SolutionSection' } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TwoGrid' } | null> } | null } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null, componentRight?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentWrapper' } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel' } | { __typename?: 'PageSection' } | { __typename?: 'SolutionSection' } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TwoGrid' } | null> } | null } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null };

export type CtfComponentTwoGridQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentTwoGridQuery = { __typename?: 'Query', twoGrid?: { __typename: 'TwoGrid', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, componentLeft?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentWrapper' } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel' } | { __typename?: 'PageSection' } | { __typename?: 'SolutionSection' } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TwoGrid' } | null> } | null } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null, componentRight?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentWrapper' } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Image', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel' } | { __typename?: 'PageSection' } | { __typename?: 'SolutionSection' } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TwoGrid' } | null> } | null } | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null } | null };

type ComponentReferenceFields_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentWrapper_Fragment = { __typename: 'ComponentWrapper', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentCarousel_Fragment = { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Description_Fragment = { __typename: 'Description', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_HeroBanner_Fragment = { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Image_Fragment = { __typename: 'Image', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ImageCarousel_Fragment = { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_LanguageMetadata_Fragment = { __typename: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_MainNavigation_Fragment = { __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationItem_Fragment = { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_PageSection_Fragment = { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_SolutionSection_Fragment = { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Teaser_Fragment = { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Testimonial_Fragment = { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Title_Fragment = { __typename: 'Title', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TwoGrid_Fragment = { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_Button_Fragment | ComponentReferenceFields_ComponentWrapper_Fragment | ComponentReferenceFields_ContentCarousel_Fragment | ComponentReferenceFields_Description_Fragment | ComponentReferenceFields_FooterMenu_Fragment | ComponentReferenceFields_HeroBanner_Fragment | ComponentReferenceFields_Image_Fragment | ComponentReferenceFields_ImageCarousel_Fragment | ComponentReferenceFields_LanguageMetadata_Fragment | ComponentReferenceFields_MainNavigation_Fragment | ComponentReferenceFields_MenuGroup_Fragment | ComponentReferenceFields_NavigationItem_Fragment | ComponentReferenceFields_NavigationMenu_Fragment | ComponentReferenceFields_Page_Fragment | ComponentReferenceFields_PageSection_Fragment | ComponentReferenceFields_Seo_Fragment | ComponentReferenceFields_SolutionSection_Fragment | ComponentReferenceFields_Teaser_Fragment | ComponentReferenceFields_Testimonial_Fragment | ComponentReferenceFields_Title_Fragment | ComponentReferenceFields_TwoGrid_Fragment;
