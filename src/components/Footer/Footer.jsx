import '../../styles/footer.css'
import { ContactFooter } from './ContactFooter';
import { SocialNetwork } from './SocialNetwork';


export const Footer = () => {
  return (
    <dev className="background-footer">
      <div className='container-info'>
        <ContactFooter />
        <SocialNetwork />
      </div>
    </dev>
  );
};