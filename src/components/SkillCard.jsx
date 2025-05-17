const SkillCard = ({image,alt}) => {
  return (
    <div data-aos-delay="400" data-aos="fade-up" className='skill'>
    <img alt={alt} src={image} loading="lazy" height={'42'} width={'42'} />
    </div>
  )
}
export default SkillCard;
