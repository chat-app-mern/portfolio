const ProjectCard = ({category,title,description,linkText,linkUrl,image}) => {
  return (
          <div data-aos-delay="400" data-aos="fade-up" className='col-lg-4'>
                    <div className='project-card'>
                        <div className='project-thumbnail'>
                            <img src={image} alt='project-image' width={'424'} height={'248'} loading={'lazy'}/>
                        </div>
                        <div className='project-content'>
                            <div className='project-category'>
                            {category}
                            </div>
                            <div className='h3'>
                           {title}
                            </div>
                            <p className='p'>
                             {description}
                            </p>
                        </div>
              <div className='link-wrapper'>
                             <a target="_blank" rel="noreferrer" href={linkUrl} className='btn btn-secondary'>{linkText}</a>
                           </div>
                    </div>
                </div>  
  )
}
export default ProjectCard;
