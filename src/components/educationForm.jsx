import { v4 as uuidv4 } from 'uuid';

function EducationForm({ 
    resume, 
    setResume, 
    setDisplayEducationForm,
    showPDFViewer }) {

  function handleEducationSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEducation = {
      school: formData.get("school"),
      degree: formData.get("degree"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      id: uuidv4()
    };

    setResume({
      ...resume,
      education: [...resume.education, newEducation]
    })
    setDisplayEducationForm(false);
  }


    return (
        <>
            <form className="animate-dropdownin w-full h-[190px] px-2 bg-slate-200 rounded-b-lg" onSubmit={handleEducationSubmit} disabled={showPDFViewer}>
                <h3></h3>
                <fieldset>
                    <div className="grid grid-row-2">
                        <label className="font-semibold" htmlFor="">School</label>
                        <input className="rounded-lg px-1" type="text" name="school" disabled={showPDFViewer}/>
                    </div>
                </fieldset>
                <fieldset className="">
                    <div className="grid grid-row-2">
                        <label className="font-semibold" htmlFor="">Degree</label>
                        <input className="rounded-lg px-1" type="text" name="degree"  disabled={showPDFViewer}/>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-2 justify-items-between">
                    <div className="grid grid-flow-row">
                        <label className="font-semibold px-1" htmlFor="startDate">Start Date</label>
                        <input type="text" name="startDate" id="startDate" className="w-[125px] rounded-lg"  disabled={showPDFViewer}/>
                    </div>
                    <div className="grid grid-flow-row justify-end">
                        <label className="font-semibold px-1" htmlFor="endDate">End Date</label>
                        <input type="text" name="endDate" id="endDate" className="w-[125px] rounded-lg"  disabled={showPDFViewer}/>
                    </div>
                </fieldset>
                <div className="my-2">
                    <button className="w-full h-full rounded-lg bg-white font-semibold px-1" type="submit" disabled={showPDFViewer}>
                        Close and Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default EducationForm