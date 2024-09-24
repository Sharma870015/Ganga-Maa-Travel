import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const handleModalOpen = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const aboutUsContent = `
    Welcome to Travel Explorer, your number one source for all things travel. We're dedicated to providing you with the very best of travel experiences, with a focus on reliability, customer service, and uniqueness.
    Founded in 2024, Travel Explorer has come a long way from its beginnings as a small travel blog. When we first started out, our passion for helping others experience the beauty of the world drove us to do intense research, so that Travel Explorer can offer you world-class travel tips and advice. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
    We hope you enjoy our travel guides as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
    Our vision is to inspire and empower travelers to explore the wonders of the world, all while promoting sustainable tourism and cultural awareness. Through our extensive network of partners, we aim to provide the best deals and most insightful tips to our customers.
    Thank you for being a part of our journey!
    Sincerely, Travel Explorer Team.
  `;

  const privacyPolicyContent = `
    At Travel Explorer, accessible from https://www.gangamaatravels.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Travel Explorer and how we use it.
    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at privacy@travelexplorer.com.
    When you use our website, we collect the information that you voluntarily provide, such as your email address and personal details when filling out a contact form or subscribing to our newsletter. This data is securely stored and never shared with third parties without your explicit consent.
    Cookies are also used to enhance your experience by storing preferences and tracking site interaction. You can control the use of cookies via your browser settings.
    We maintain high levels of data protection standards and continually strive to improve our practices to ensure the safety of our users' information. For more details on how your data is handled, please refer to our full privacy guidelines.
  `;

  const termsOfServiceContent = `
    Welcome to Travel Explorer! These terms and conditions outline the rules and regulations for the use of our website, located at https://www.gangamaatravels.com. 
    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Travel Explorer if you do not accept all the terms and conditions stated on this page.
    Our content is designed for informational purposes only, and while we strive to keep information accurate and up-to-date, Travel Explorer does not guarantee the completeness or accuracy of any travel information provided on our site. 
    Users are responsible for ensuring that any trips or travel decisions they make are safe and lawful. We reserve the right to modify or discontinue any content or service without prior notice.
    Travel Explorer provides a platform for the community to share insights, but we are not liable for any direct, indirect, or consequential loss or damage arising under these terms in connection with our website.
    By using our services, you agree to abide by our policies on responsible and respectful conduct while engaging with our content or other users.
  `;

  const contactFormContent = `
    Thank you for reaching out to Travel Explorer! We value your feedback and inquiries, and we aim to respond to all requests within 48 hours.
    Whether you're looking for travel advice, have questions about our content, or need assistance planning your next adventure, our team is here to help. Please provide as much detail as possible when submitting your inquiry to ensure a prompt and accurate response.
    You can contact us by filling out the form below or directly via email at support@gangamaatravels.com. Our support team is available Monday to Friday, 9 AM to 6 PM GMT.
    In your message, please include:
    - Your full name
    - Your email address
    - The reason for your inquiry (e.g., trip planning, content feedback, partnership inquiry)
    - Any relevant details that will help us assist you better
    We look forward to hearing from you and helping you with your travel needs!
  `;

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p className="for-connect">Contact Us:<br></br> +91 9557681671</p>
        <p className="for-connect">Email: ay6271297@gmail.com</p>
        <p className="for-connect">Follow us on social media</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <p className="for-connect">&copy; 2024 Travel Explorer</p>
        <div className="footer-links">
          <a
            href="#about-us"
            className="footer-link"
            onClick={() => handleModalOpen("About Us", aboutUsContent)}
          >
            About Us
          </a>
          <a
            href="#privacy-policy"
            className="footer-link"
            onClick={() => handleModalOpen("Privacy Policy", privacyPolicyContent)}
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="footer-link"
            onClick={() => handleModalOpen("Terms of Service", termsOfServiceContent)}
          >
            Terms of Service
          </a>
          <a
            href="#contact-form"
            className="footer-link"
            onClick={() => handleModalOpen("Contact", contactFormContent)}
          >
            Contact
          </a>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={modalContent.title}
        content={modalContent.content}
      />
    </footer>
  );
};

export default Footer;
