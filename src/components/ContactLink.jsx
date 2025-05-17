
export const ContactLink = ({url,external,image,text,...props}) => {
  return (
    <div className="contact-link-wrapper">
        <a href={url} {...props}>
        <img src={image} alt='contact-link-image' loading='lazy' height={'30'} width={'30'}/>
                {text}
            </a>
        </div>
  )
}
