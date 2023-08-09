import './style.module.css'

export function ContactImg({url, altText}) {
  return (
    <figure>
      <img
        src={url}
        alt={altText}
      />
    </figure>
  )
}