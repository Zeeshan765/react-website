import React , {useState} from 'react';
import Experience from './Expereince/Experience';
import './MainPage.css';
import Personal from './personal/Personal';
import Web from './Web/Web';
import { Box, Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";



const steps = [
  "Welcome Page",
  "Personal Information",
  "Web Presence",
  "Exprience",
  "Education",
  "Expectations",
  "Supporting Documents",
  "Summary",
];

const MainPage = () => {

  const [welcome, setWelcome] = useState(true);
  const [per, setPer] = useState(false);
  const [web, setWeb] = useState(false);
  const [exp, setExp] = useState(false);
  const [ed, setEd] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
// const  useStyles = makeStyles(() => ({
//   root: {
//     "& .MuiStepIcon-active": { color: "purple", fontSize: "2.2rem" },
//     "& .MuiStepLabel-active": { color: "purple", fontSize: "2.2rem" },
//     "& .MuiStepIcon-completed": { color: "purple", fontSize: "1.5rem" },
//     "& .MuiStepLabel-completed": { color: "purple", fontSize: "1.5rem" },
//     // "& .Mui-disabled .MuiStepIcon-root": {
//     //   color: "grey",
//     //   fontSize: "1.5rem",
//     // },
//   },
// }));
// const c = useStyles();

const isStepOptional = (step) => {
  return step === 1;
};

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};
const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};
const handleReset = () => {
  setActiveStep(0);
};

function step1() {
  setWelcome(true);
  setPer(false);
}
function handleback1() {
  handleBack();
  setWelcome(true);
  setPer(false);
}
function step2() {
  

  setWelcome(false);
  setPer(true);
  handleNext();
}
function handleback2() {
  handleBack();
  setWeb(false);
  setPer(true);
}
function step3() {
  

  setPer(false);
  setWeb(true);
  handleNext();
}
function handleback3() {
  handleBack();
  setExp(false);
  setWeb(true);
}
function step4() {

  setWeb(false);
  setExp(true);
  handleNext();
}
function handleback4() {
  handleBack();
  setEd(false);
  setExp(true);
}
function step5() {

  setWeb(false);
  setEd(true);
  handleNext();
}









const ok = () => {
  console.log("ok");	
}






 
      {/* <div className='topbar'></div> */}
      if(welcome===true)  {
        return (
      <div className="bottom-container">
        <div className="left-container">
        <div className='title-container'>
          <h1 className='main-title'>Welcome</h1>
          <p className='sub-title'>
            Welcome to the application. This application is designed to help
          </p>
      </div>
      <div className="form-holder">
        <h1>Welcome to the App</h1>
       
      </div>
      <div className="btn-groups">
        
        <button className="btn-secondary " onClick={() => step2()}>
          Next
        </button>
      </div>
      </div>
        <div className="right-container">
        <Box className="stepBox" sx={{ width: "20%", marginLeft: "500px" }}>
          <Stepper
            // className={c.root}
            sx={{ color: "green", fontSize: "2.2rem" }}
            activeStep={activeStep}
            orientation="vertical"
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </React.Fragment>
          )}
        </Box>

           </div> 
      </div>
    
  );
        }

        else if(per===true) {
        
          return (
            <div className="bottom-container">
              <div className="left-container">
              <div className='title-container'>
                <h1 className='main-title'>Personal Information</h1>
                <p className='sub-title'>
                  Help Us to get you know by answering the following questions
                </p>
            </div>
            <div className="form-holder">
              
              {/* <Experience/> */}
            <Personal/>
      {/* <Web/> */}
            </div>
            <div className="btn-groups">
              <button className="btn-primary" onClick={() => handleback1()}>
                <span>Previous</span>
              </button>
              <button className="btn-secondary" onClick={() => step3()}>
                <span>Next</span>
              </button>
            </div>
            </div>
              <div className="right-container">
              <Box className="stepBox" sx={{ width: "50%", marginLeft: "500px" }}>
                <Stepper 
                  // className={c.root}
                  sx={{ color: "black" }}
                  activeStep={activeStep}
                  orientation="vertical"
                >

                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
      
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                    </Box>
                  </React.Fragment>
                )}
              </Box>
      
                 </div> 
            </div>
          
        );
        }
        else if(web===true) {
          return (
            <div className="bottom-container">
              <div className="left-container">
              <div className='title-container'>
                <h1 className='main-title'>Web Presence</h1>
                <p className='sub-title'>
                  If you would be so kind to share , please share your web presence
                </p>
            </div>
            <div className="form-holder">
              
              {/* <Experience/> */}
            {/* <Personal/> */}
      <Web/>
            </div>
            <div className="btn-groups">
              <button className="btn-primary" onClick={()=> handleback2()}>
                <span>Previous</span>
              </button>
              <button className="btn-secondary" onClick={() => step4()}>
                <span>Next</span>
              </button>
            </div>
            </div>
              <div className="right-container">
              <Box className="stepBox" sx={{ width: "50%", marginLeft: "500px" }}>
                <Stepper
                  // className={c.root}
                  sx={{ color: "black" }}
                  activeStep={activeStep}
                  orientation="vertical"
                >
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
      
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                    </Box>
                  </React.Fragment>
                )}
              </Box>
      
                 </div> 
            </div>
          
        );
        }
        else if(exp===true) {
          return (
            <div className="bottom-container">
              <div className="left-container">
              <div className='title-container'>
                <h1 className='main-title'>Experience</h1>
                <p className='sub-title'>
                  Tell us about your experience
                </p>
            </div>
            <div className="form-holder">
              
              <Experience/>
            {/* <Personal/> */}
      {/* <Web/> */}
            </div>
            <div className="btn-groups">
              <button className="btn-primary" onClick={()=> handleback3()}>
                <span>Previous</span>
              </button>
              <button className="btn-secondary" onClick={() => step5()}>
                <span>Next</span>
              </button>
            </div>
            </div>
              <div className="right-container">
              <Box className="stepBox" sx={{ width: "50%", marginLeft: "500px" }}>
                <Stepper
                  // className={c.root}
                  sx={{ color: "black" }}
                  activeStep={activeStep}
                  orientation="vertical"
                >
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
      
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                    </Box>
                  </React.Fragment>
                )}
              </Box>
      
                 </div> 
            </div>
          
        );
        }
};

export default MainPage;
{/* <div className="bottom-container">
<div className="left-container">
<div className='title-container'>
  <h1 className='main-title'>Expereince</h1>
  <p className='sub-title'>
    Tell us About Your Professional Expereince
  </p>
</div>
<div className="form-holder">
<Experience/>
{/* <Personal/> */}
{/* <Web/> */}
// </div>
// <div className="btn-groups">
// <button className="btn-primary">
//   <span>Previous</span>
// </button>
// <button className="btn-secondary">
//   <span>Next</span>
// </button>
// </div>
// </div>
// <div className="right-container">
//    </div> 
// </div> */}
