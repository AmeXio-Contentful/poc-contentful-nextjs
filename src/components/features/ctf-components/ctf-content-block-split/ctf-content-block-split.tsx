import {
  ComponentContentBlokSplitFieldsFragment
} from '@src/components/features/ctf-components/ctf-content-block-split/__generated/ctf-content-block-split.generated';
import CtfExpertAdvice from '@src/components/features/ctf-components/ctf-expert-advice/ctf-expert-advice';
import CtfFeaturedArticle from '@src/components/features/ctf-components/ctf-featured-article/ctf-featured-article';


export const CtfContentBlockSplit = (props: ComponentContentBlokSplitFieldsFragment) => {
  const { title, subtitle, buttonText, buttonLink, fullWidth,  title2, backgroundColor, button1, backgroundImage, image} = props;
  return (
    <div className="grid grid-cols-2 divide-x">
      <div className="md:px-48z h-auto px-6 pb-9 pt-9 text-center">
        <CtfExpertAdvice title={title as string} subtitle={subtitle as string} buttonText1={buttonText as string}
                         buttonText2={buttonText as string} />
      </div>
      <div className="md:px-48z h-auto px-6 pb-9 pt-9 text-center">
        <CtfFeaturedArticle description={subtitle as string} subtitle={title2 as string}/>
      </div>;
    </div>
);
};
