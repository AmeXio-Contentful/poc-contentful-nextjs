interface CtfTextBannerProps {
  title: string;
  description: string;
}

export default function CtfTextBanner({
  title,
  description,
}: CtfTextBannerProps) {
  return (
    <div className="mx-auto max-w-[600px] pt-16">
      <h2 className="m-0 mb-4 p-0 text-center align-baseline normal-case primary-color font-bold">
        {title}
      </h2>
      <p className="text-center text-black text-2xl font-semibold w-4/5 m-auto">
        {description}
      </p>
    </div>
  );
}
