export const StatsCard = ({statDescription,statHeading}) => {
  return (
    <div className='col-lg-3' >
    <div className='stats-card'  data-aos-delay="400" data-aos="fade-up" >
    <div className='heading'>
          {statHeading}
    </div>
    <div className='description'>
        {statDescription}
    </div>
    </div>
    </div>
  )
}

export default StatsCard;