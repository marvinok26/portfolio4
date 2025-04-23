"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+254) 738 376 991',
    link: 'tel:+254720538053'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'marvinsammyke@gmail.com',
    link: 'mailto:marvinsammyke@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'Nairobi, Kenya',
    link: 'https://maps.google.com/?q=Nairobi,Kenya'
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'Marvin Okongo',
    link: 'https://www.linkedin.com/in/marvin-okongo-96b924233/'
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    description: 'marvinok26',
    link: 'https://github.com/marvinok26'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [emailjsInitialized, setEmailjsInitialized] = useState(false);

  // Initialize EmailJS with your user ID
  useEffect(() => {
    // Initialize EmailJS with your User ID
    // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
    emailjs.init("YOUR_USER_ID");
    setEmailjsInitialized(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitError(false);

    try {
      // Validate form data
      const requiredFields = ['firstname', 'lastname', 'email', 'service', 'message'];
      const missingFields = requiredFields.filter(field => !formData[field]);

      if (missingFields.length > 0) {
        setSubmitStatus(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setSubmitError(true);
        setIsSubmitting(false);
        return;
      }

      if (!emailjsInitialized) {
        throw new Error("EmailJS is not initialized yet");
      }

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone_number: formData.phone || 'Not provided',
        service_requested: formData.service,
        message: formData.message
      };

      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('Message sent successfully! I will get back to you soon.');
        setSubmitError(false);
        
        // Reset form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('An error occurred. Please try again or contact me directly.');
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I deliver exceptional web, UI/UX, mobile development, and SEO solutions, transforming your vision into impactful digital experiences that drive your business forward.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input 
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input 
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <Select 
                name="service"
                value={formData.service}
                onValueChange={(value) => setFormData(prev => ({
                  ...prev,
                  service: value
                }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Textarea 
                name="message"
                className="h-[200px]" 
                placeholder="Type your message here. For serious business inquiries, please be detailed and professional."
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              {submitStatus && (
                <div className={`
                  text-center p-3 rounded-lg
                  ${submitError 
                    ? 'bg-red-600/20 text-red-400' 
                    : 'bg-green-600/20 text-green-400'
                  }
                `}>
                  {submitStatus}
                </div>
              )}
              
              <Button 
                type="submit" 
                size="md" 
                className="max-w-40 mx-auto" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-6 group cursor-pointer"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center 
                    group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl group-hover:text-accent transition-colors">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;