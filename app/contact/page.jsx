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
    link: 'tel:+254738376991'
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

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY);
    
    // Debug log to verify environment variables
    // console.log("Environment check:", {
    //   publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ? "Available" : "Missing",
    //   serviceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ? "Available" : "Missing",
    //   templateId: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ? "Available" : "Missing"
    // });
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

      // Prepare template parameters - including explicit recipient
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone_number: formData.phone || 'Not provided',
        service_requested: formData.service,
        message: formData.message
      };

      // console.log("Sending email with params:", templateParams);
      
      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        templateParams
      );

      // console.log("EmailJS response:", response);

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
        throw new Error(`Failed to send message: ${response.text}`);
      }
    } catch (error) {
      // console.error('Submission error:', error);
      setSubmitStatus(`An error occurred. Please try again or contact me directly.`);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback to server-side sending
  const handleServerFallback = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
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
        setSubmitStatus(result.message || 'Failed to send message. Please try again.');
        setSubmitError(true);
      }
    } catch (error) {
      // console.error('Server fallback error:', error);
      setSubmitStatus('An error occurred. Please try contacting me directly.');
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
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  type="submit" 
                  size="md" 
                  className="max-w-40 mx-auto" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
                
                {submitError && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="md" 
                    className="max-w-40 mx-auto" 
                    onClick={handleServerFallback}
                    disabled={isSubmitting}
                  >
                    Try alternate method
                  </Button>
                )}
              </div>
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