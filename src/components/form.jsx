import { useState } from "react"
import starterResumeData from "./data/StarterResumeData";
import clearResumeData from "./data/ClearResumeData";
import ExperienceForm from "./experienceForm";
import EducationForm from "./educationForm";
import { X, ChevronDown, BookOpen, Briefcase, PlusCircle } from "react-feather";

function Form({ resume, setResume, handleInputChange, handleShowPDFViewer, showPDFViewer }) {
    const [displayEducation, setDisplayEducation] = useState(false);
    const [displayExperience, setDisplayExperience] = useState(false);

    const [displayEducationForm, setDisplayEducationForm] = useState(false);
    const [displayExperienceForm, setDisplayExperienceForm] = useState(false);


    function handleEducationClick(e) {
        displayEducation ? setDisplayEducation(false) : setDisplayEducation(true);
    }

    function handleExperienceClick(e) {
        displayExperience ? setDisplayExperience(false) : setDisplayExperience(true);
    }

    function handleDisplayExperienceFormClick(e) {
        displayExperienceForm ? setDisplayExperienceForm(false) : setDisplayExperienceForm(true);

    }

    function handleDisplayEducationFormClick() {
        displayEducationForm ? setDisplayEducationForm(false) : setDisplayEducationForm(true);
    }

    function handleExperienceDelete(jobId) {
        const updatedExperience = resume.experience.filter((job) => job.id !== jobId);

        setResume({
            ...resume,
            experience: updatedExperience
        })
    }

    function handleEducationDelete(instId) {
        const updatedExperience = resume.education.filter((inst) => inst.id !== instId);

        setResume({
            ...resume,
            education: updatedExperience
        })
    }

    function handleReset() {
        setResume(starterResumeData);
    }

    function handleClear() {
        setResume(clearResumeData);
    }

    const handleFontChange = (e) => {
        setResume({
            ...resume,
            font: e.target.value
        })
      };


    return (
        <>

            <div className="flex flex-col gap-5 max-w-xs min-w-xs drop-shadow-md" action="">
                <div className="flex justify-space-between gap-1">
                    <button className="w-[50%] bg-slate-200 rounded-l-lg font-bold text-red-600 text-center" onClick={handleClear}>Clear</button>
                    <button className="w-[50%] bg-slate-200 rounded-r-lg font-bold text-center" onClick={handleReset}>Reset</button>
                </div>
                <div className="flex justify-space-between gap-1">
                    <button className={`w-[100%] rounded-lg font-bold text-blue-600 text-center ${!showPDFViewer ? "bg-slate-200" : "bg-slate-900"}`} onClick={handleShowPDFViewer}>View PDF Version</button>
                </div>
                <div>
                    <form className="bg-slate-200 rounded-lg px-2 py-2" action="" disabled={showPDFViewer}>
                        <legend className="font-bold">Style</legend>
                        <fieldset className="flex justify-between">
                            <input
                                id="draft"
                                type="radio"
                                name="status"
                                value="sans"
                                checked={resume.font === 'sans'}
                                onChange={handleFontChange}
                                disabled={showPDFViewer}
                            />
                            <label htmlFor="draft" className="peer-checked/draft:text-sky-500 font-semibold">
                                sans
                            </label>
                            <input
                                id="published"
                                type="radio"
                                name="status"
                                value="mono"
                                checked={resume.font === 'mono'}
                                onChange={handleFontChange}
                                disabled={showPDFViewer}
                            />
                            <label htmlFor="published" className="peer-checked/published:text-sky-500 font-semibold">
                                mono
                            </label>

                            <input
                                id="font-serifco"
                                type="radio"
                                name="status"
                                value="serif"
                                checked={resume.font === 'serif'}
                                onChange={handleFontChange}
                                disabled={showPDFViewer}
                            />
                            <label htmlFor="published" className="peer-checked/font-serif:text-sky-500  font-semibold">
                                serif
                            </label>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <form className="h-[250px] rounded-lg bg-slate-200 px-2">
                        <legend className="font-bold text-md mb-1 py-2">Personal Information</legend>
                        <div className="">
                            <label className="font-semibold" htmlFor="name">Full Name</label>
                            <input
                                className="w-full rounded-lg px-1"
                                type="text"
                                name="name"
                                value={resume.name}
                                onChange={handleInputChange}
                                disabled={showPDFViewer}
                            />
                        </div>
                        <div>
                            <label className="font-semibold" htmlFor="phonenumber">Phone Number</label>
                            <input
                                className="w-full rounded-lg px-1"
                                type="text"
                                id="phone"
                                name="phone"
                                value={resume.phone}
                                onChange={handleInputChange}
                                disabled={showPDFViewer}
                            />
                        </div>
                        <div>
                            <label className="font-semibold" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-lg px-1"
                                type="text"
                                id="email"
                                name="email"
                                value={resume.email}
                                onChange={handleInputChange}
                                disabled={showPDFViewer}
                            />
                        </div>
                        <div>
                            <label className="font-semibold" htmlFor="website">Website</label>
                            <input
                                className="w-full rounded-lg px-1"
                                type="text"
                                id="website"
                                name="website"
                                value={resume.website}
                                onChange={handleInputChange}
                                disabled={showPDFViewer}
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <div className="w-full">
                        <button className={`flex justify-between items-center bg-slate-200 h-[50px] w-full mb-1 px-2 ${!displayEducation ? "rounded-lg" : "rounded-t-lg"}`} onClick={(e) => handleEducationClick(e)}>
                            <span className="flex gap-2 font-bold"><BookOpen /> Education</span>
                            <div className={`transform transition-transform ${displayEducation ? "rotate-180" : ""}`}>
                                <ChevronDown />
                            </div>
                        </button>
                    </div>
                    {
                        displayEducation &&
                        !displayEducationForm &&
                        (<>
                            <ul className="animate-dropdownin">
                                {resume.education.map((inst) => (
                                    <li key={inst.id} className="flex justify-between bg-slate-200 my-1.5 px-2">
                                        <span className="font-medium">{inst.school}</span>
                                        <button onClick={() => handleEducationDelete(inst.id)}>< X /></button>
                                    </li>
                                ))}
                                <button className="flex gap-2 justify-center items-center w-full h-[50px] bg-slate-200 font-semibold rounded-b-lg" onClick={() => handleDisplayEducationFormClick()}>Education <PlusCircle size={16} /></button>
                            </ul>
                        </>)
                    }
                    {
                        displayEducation &&
                        displayEducationForm &&
                        <EducationForm resume={resume} setResume={setResume} setDisplayEducationForm={setDisplayEducationForm} showPDFViewer={showPDFViewer} />
                    }
                </div>

                <div>
                    <div className="w-full">
                        <button className={`flex justify-between items-center bg-slate-200 h-[50px] w-full mb-1 px-2 ${!displayExperience ? "rounded-lg" : "rounded-t-lg"}`} onClick={(e) => handleExperienceClick(e)}>
                            <span className="flex gap-2 font-bold"><Briefcase /> Experience</span>
                            <div className={`transform transition-transform ${displayExperience ? "rotate-180" : ""}`}>
                                <ChevronDown />
                            </div>
                        </button>
                    </div>
                    {
                        displayExperience &&
                        !displayExperienceForm &&
                        (<>
                            <ul className="animate-dropdownin">
                                {resume.experience.map((job) => (
                                    <li key={job.id} className="flex justify-between bg-slate-200 my-1.5 px-2">
                                        <span className="font-medium">{job.name}</span>
                                        <button onClick={() => handleExperienceDelete(job.id)}><X /></button>
                                    </li>
                                ))}
                                <button className="flex gap-2 justify-center items-center w-full h-[50px] bg-slate-200 font-semibold rounded-b-lg" onClick={() => handleDisplayExperienceFormClick()}><span>Experience</span> <PlusCircle size={16} /> </button>
                            </ul>
                        </>)
                    }
                    {
                        displayExperience &&
                        displayExperienceForm &&
                        <ExperienceForm resume={resume} setResume={setResume} setDisplayExperienceForm={setDisplayExperienceForm} showPDFViewer={showPDFViewer} />
                    }
                </div>

            </div >
        </>
    )
}

export default Form


