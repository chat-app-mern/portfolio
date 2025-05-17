const ExperienceCard = ({image,role,description,presentInCompanyDate}) => {
  return (
    <div data-aos-delay="400" data-aos="fade-up" className="experience-card-wrapper">
      <div className="upper-content">
        <div className="company-content">
          <div className="logo">
            <img src={image} alt="company-logo" height={'30'} width={'30'} loading="lazy"/>
          </div>
          <div className="role">
           {role}
          </div>
        </div>
        <div className="date">
          {presentInCompanyDate}
        </div>
      </div>
      <div className="lower-content">
        <p className="p">
         {description}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard;
