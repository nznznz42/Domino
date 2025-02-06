type Props = {
  imageUrl: string
  caption: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-neutral-200 dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark dark:border-neutral-800">
      <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-neutral-200 dark:border-darkBorder p-4 dark:border-neutral-800">
        {caption}
      </figcaption>
    </figure>
  )
}
