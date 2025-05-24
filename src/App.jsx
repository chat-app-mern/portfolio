import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import StatsCard from './components/StatsCard';
import companyLogo from './assets/images/favicon.ico';
import bannerImage from './assets/images/maurya-first-image.jpg';
import aboutImage from './assets/images/maurya-second-image.jpg';
import htmlImage from './assets/images/html.png';
import cssImage from './assets/images/css.png';
import jsImage from './assets/images/javascript.png';
import reactImage from './assets/images/reactjs.png';
import foodMart from './assets/images/foodmart.png';
import megaMart from './assets/images/megamart.png';
import emailIcon from './assets/images/email-icon.png';
import gitIcon from './assets/images/github-icon.png';
import linkedinIcon from './assets/images/linkedin.png';
import videoTrimmer from './assets/images/trim-video.jpg';
import { ContactLink } from './components/ContactLink';
import { Header } from './components/Header';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
    return <>
    <Header/>
    <section className="hero-section" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero-section-content">
                    <div className="content">
                  <h1 data-aos-delay="400" data-aos="fade-up" className="h1">Hello, I’m <br/>
                        Maurya Soni
                        </h1>
                        <p data-aos-delay="400" data-aos="fade-up" className="p">
                            I'm a Frontend Developer based in Ahmedabad, Gujarat. <br/> specializing in building bug-free, responsive websites with modern designs and seamless user experiences.
                        </p>
                    </div>
                     <div className='stats w-100'>
                        <div className='row g-1'>
                        <StatsCard statHeading={'1 Y.'} statDescription={'EXPERIENCE'} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div data-aos-delay="400" data-aos="fade-up" className='image-wrapper'>
                        <img src={bannerImage} width={'1280'} height={'960'} alt='hero-banner-image' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className="hero-section about" id="about">
        <div className="container">
            <div className="row flex-row-reverse">
                <div className="col-lg-6">
                    <div data-aos-delay="400" data-aos="fade-up" className="hero-section-content">
                        <h2 className="h2">
                        I’m Frontend Developer
                        </h2>
                        <p className="p">
                        I’m a Frontend Developer based in Ahmedabad, Gujarat, specializing in building responsive, SEO-friendly websites. At KrishaWeb, I focused on delivering bug-free, high-performance web solutions by collaborating closely with designers and backend teams
                        </p>
                        <p className='p'>
                        I write clean, maintainable code and ensure seamless user experiences across all devices. My goal is to create visually appealing and functional digital products that meet both user and business needs.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div data-aos-delay="400" data-aos="fade-up" className='image-wrapper'>
                        <img src={aboutImage} width={'3000'} height={'3000'} alt='hero-banner-image' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className='skills' id="skills">
        <div className='container'>
            <h2 data-aos-delay="400" data-aos="fade-up" className='h2 text-center'>
            Skills
            </h2>
            <div className='skills-container'>
                <SkillCard alt={'html'} image={htmlImage}/>
                <SkillCard alt={'css'} image={cssImage}/>
                <SkillCard alt={'js'} image={jsImage}/>
                <SkillCard alt={'react.js'} image={reactImage}/>
            </div>
        </div>
    </section>
    <section className='projects' id="projects">
        <div className='container'>
            <h2 data-aos-delay="400" data-aos="fade-up" className='h2 text-center pb-4 pb-lg-5'>Projects</h2>
            <div className='row'>
                <ProjectCard title={'VIDEO TRIMMER'} category={'NPM PACKAGE'} 
                description={'Video Trimmer is designed to allow users to upload a video, add trim markers within the video, and then trim it. After trimming, users can obtain the trimmed video segments.'} 
                image={videoTrimmer} linkText={'GITHUB LINK'} linkUrl={'https://github.com/mauryasoni2201/video-trimmer'}/>
                <ProjectCard title={'FOODMART'} category={'MERN STACK'} 
                description={'FOODMART is a dynamic and fully functional e-commerce platform built using the MERN stack. The platform is designed to offer a seamless food ordering experience for customers and robust management capabilities for admins. Users can browse food items, place orders, and leave reviews, while admins can efficiently manage users, food items, and orders.'} 
                image={foodMart} linkText={'GITHUB LINK'} linkUrl={'https://github.com/mauryasoni2201/foodmart_client'}/>
                <ProjectCard title={'MEGAMART'} category={'MERN STACK'} 
                description={'MEGAMART is a dynamic and fully functional e-commerce platform designed using the MERN stack. This project aims to provide a seamless shopping experience for users, allowing them to browse products, view detailed descriptions, add items to their cart.'} 
                image={megaMart} linkText={'GITHUB LINK'} linkUrl={'https://github.com/mauryasoni2201/megamart_client'}/>
            </div>
        </div>
    </section>
    <section className='skills experience' id="experience">
        <div className='container'>
            <h2 data-aos-delay="400" data-aos="fade-up" className='h2 text-center'>
            Experience
            </h2>
            <div className='listing'>
                <ExperienceCard role={'Frontend Developer at KrishaWeb'} description={`At KrishaWeb, I focused on creating bug-free, responsive, and SEO-friendly websites. I worked closely with designers and backend teams to deliver clean code and intuitive, user-friendly interfaces across all devices.`} presentInCompanyDate={`May 2024 - Present`} image={companyLogo}/>
            </div>
        </div>
    </section>
    <section className='contact' id="contact">
        <div className="container">
        <h2 className='h2 pb-4'>Contact</h2>
        <div className="contact-links">
            <ContactLink target="_blank" image={linkedinIcon} url={'https://www.linkedin.com/in/mauryasoni/'} text={'mauryasoni'} />
            <ContactLink target="_blank" image={gitIcon} url={'https://github.com/mauryasoni2201'} text={'mauryasoni2201'} />
            <ContactLink image={emailIcon} url={'mailto:mauryasoni71@gmail.com'} text={'mauryasoni71@gmail.com'} />
            <p className="p copyright">🌟 Made with ❤️ by Maurya Soni</p>
        </div>
        </div>
    </section>
    </>;
}

export default App;