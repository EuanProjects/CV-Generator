import Form from './components/form';
import { useState } from 'react';
import './App.css';
import starterResumeData from './components/data/StarterResumeData';
import ResumeHTML from './components/resumeHTML';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './components/resumePDF';

function App() {
  const [resume, setResume] = useState(starterResumeData);
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setResume({
      ...resume,
      [name]: value,
    });
  }

  function handleShowPDFViewer() {
    setShowPDFViewer(!showPDFViewer);
  }

  return (
    <>
      <div className="grid grid-cols-2 justify-items-center w-[100%] min-h-screen h-[100%] py-5 bg-slate-50">
        <div>
          <Form
            resume={resume}
            setResume={setResume}
            handleInputChange={handleInputChange}
            handleShowPDFViewer={handleShowPDFViewer}
            showPDFViewer={showPDFViewer}
          />
        </div>
        {!showPDFViewer && <ResumeHTML resume={resume} />}
        {showPDFViewer &&
          <PDFViewer width="100%" height="100%">
            <ResumePDF resume={resume} />
          </PDFViewer>
        }
      </div>
    </>
  );
}

export default App;
