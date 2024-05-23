import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  content: string;
  button: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  href?: string;
};

export function Card({
  title,
  content,
  button,
  imageSrc,
  imageAlt,
  href = "#",
}: Props) {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl  w-[200px]">
      <div className="h-32 pt-4">
        <Image src={imageSrc} alt={imageAlt} width={400} height={200} />
      </div>
      <div className="p-4 md:p-5 flex flex-col items-start">
        <h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
        <p className="mt-1 text-gray-500  h-full">{content}</p>
        <a
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#156418] text-white hover:bg-[#2f7732] disabled:opacity-50 disabled:pointer-events-none"
          href={href}
        >
          {button}
        </a>
      </div>
    </div>
  );
}
