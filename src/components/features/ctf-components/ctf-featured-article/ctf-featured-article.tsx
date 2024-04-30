interface FeaturedProps {
  subtitle: string;
  description: string;
}

export default function CtfFeaturedArticle({subtitle, description}: FeaturedProps) {
    return (
        <div
            className='w-3/5 relative bg-[#D9E8F5] text-[#084772] py-14 px-9 flex flex-col gap-y-6 items-start h-full text-left'
        >
            <h4 className='flex flex-row font-bold items-center gap-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-8 h-8">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
                Featured Article
            </h4>
            <h2 className='font-bold underline'>
              { subtitle }
            </h2>
            <p className='text-black text-base font-semibold'>
              { description }
            </p>
        </div>
    )
}
