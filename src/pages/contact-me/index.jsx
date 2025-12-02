import ReCaptchaProviderWrapper from 'components/wrappers/RecaptchaWrapper/RecaptchaWrapper';
import toast from 'react-hot-toast';

const ContactMePage = () => {
    const handleClick = () => {
        toast.success('recaptcha wrapper loaded');
    };
    return (
        <ReCaptchaProviderWrapper>
            <button onClick={handleClick}>Click me</button>
        </ReCaptchaProviderWrapper>
    );
};
export default ContactMePage;
