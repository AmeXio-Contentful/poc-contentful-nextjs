import { ImageProps } from '@src/mapping/contentful/image';

export function ImageComponent({url, title}: ImageProps) {
  return (
    <div>
      <img src={url} alt={title} className="max-h-96 min-h-96"/>
    </div>
  )
}
