import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Support = () => {
  return (
    <div className='w-auto bg-gray-300 pb-10'>
        <div className="p-4 ">
    <h1 className="text-blue-950 text-3xl font-semibold">Support</h1>
    <div className="flex justify-between text-gray-500 text-sm mt-2">
      <p>En mauris elementum sollicitudin.</p>
      <p>Dashboard / Support</p>
    </div>
  </div>
    <div className="mx-auto ml-4 mr-4 mt-10 bg-white py-10 px-5 shadow-xl rounded-md border border-gray-200">
      <div>
        <h1 className='font-semibold text-4xl text-blue-950'>
          Frequently Asked Questions
        </h1>
      </div>
      <br />
      <div>
        <p className=' text-gray-400'>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis <br />
          pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <br />
      <br />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-400'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-400'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-400'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-400'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-gray-400'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    </div>

    <div className='bg-white mt-5 mb-10 pt-20 pb-20 mx-auto ml-4 mr-4 pl-10 shadow-xl rounded-md border border-gray-200'>
        <div>
            <h1 className='font-semibold text-3xl text-blue-950'>Live Support</h1>
            <p className='text-gray-500'>Still needs help? Contact our live support</p>
        </div>
        <br />
        <div>
            <button className='text-white bg-blue-700 py-1 px-3 rounded-md'>Submit Request</button>
        </div>
    </div>

    </div>
  );
};

export default Support;
