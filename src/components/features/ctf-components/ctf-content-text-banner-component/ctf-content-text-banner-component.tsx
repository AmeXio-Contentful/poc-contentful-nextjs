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
      <h2 className="m-0 mb-4 p-0 text-center align-baseline text-4xl font-medium normal-case text-blue-900">
        {title}
      </h2>
      <p className="text-center text-base font-normal text-black">
        {description}
      </p>
    </div>
  );
}
