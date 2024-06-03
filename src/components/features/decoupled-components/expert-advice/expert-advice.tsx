import {Button} from '@src/components/features/decoupled-components/button/button';
import {ExpertProps} from "@src/components/features/decoupled-components/expert-advice/expert-advice.typings";

export default function ExpertAdvice({title, subtitle, buttonUrl, buttonText, advices}: ExpertProps) {

  const buttonProps = {
     buttonText,
     buttonUrl
   }

  return (
        <div
            className='relative bg-no-repeat bg-cover bg-center py-14 pr-9 pl-9 md:pl-[100px] flex flex-col gap-y-6 items-start'
            style={{ backgroundImage: `url('https://www.amexio.fr/wp-content/uploads/2023/09/header-amexio.jpg?id=8062')` }}
        >
          <div className="w-4/5 ml-auto text-left">
            <h2 className='text-white font-bold pt-4 pb-4'>{title}</h2>
            <p className='text-white pb-4 text-base'>{subtitle}</p>
            <div className='flex self-stretch flex-col gap-y-12 mt-4 mb-8'>
              {
                advices && advices.map((item: any) => (
                  <div key={item.buttonText || item.advice}>
                    <a href={item.buttonUrl || item.url}>
                      <button
                        className="py-3.5 pl-5 pr-12 bg-white text-gray-600 text-base text-start flex flex-row justify-between w-full">
                        {item.buttonText || item.advice}
                        <div className="h-full flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                      </button>
                    </a>
                  </div>
                ))
              }
            </div>

            <Button {...buttonProps} />
          </div>
        </div>
    )
}
