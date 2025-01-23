import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Faq = () => {
  return (
    <div className="mx-auto max-w-[80%] mt-40">
      <div>
        <h1 className='font-semibold text-4xl text-center text-[#008080]'>
          Frequently Asked Questions
        </h1>
      </div>
      <br />
      <div>
        <p className='text-center text-gray-600'>
          We understand you may have questions. Here are some of the most frequently asked questions <br />
          about our services, solutions, and offerings. Please feel free to contact us for more details.
        </p>
      </div>
      <br />
      <br />
      <div className="space-y-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" className="text-[#008080]">What services do you offer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-600'>
              We offer a wide range of services including web development, mobile app development, UX/UI design, digital marketing, and software consultancy. Our goal is to provide solutions that drive results.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className="text-[#008080]">How do I get started with your services?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-600'>
              To get started, simply reach out to us via our contact form or give us a call. Our team will get in touch with you to understand your needs and propose the best solution for your project.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span" className="text-[#008080]">How long does it take to complete a project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-600'>
              The duration of a project depends on its complexity and scope. Typically, our projects range from a few weeks to several months. We always strive to meet deadlines and deliver high-quality results.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography component="span" className="text-[#008080]">What makes your services different?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-600'>
              We prioritize customer satisfaction, attention to detail, and delivering tailored solutions. Our team is made up of skilled professionals with years of experience in various industries, ensuring a unique approach to each project.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography component="span" className="text-[#008080]">What is your pricing structure?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-600'>
              Our pricing is project-based and depends on the services you require. We offer transparent pricing with no hidden fees, ensuring you get the best value for your investment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    </div>
  );
};

export default Faq;
