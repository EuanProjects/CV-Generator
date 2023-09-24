import { v4 as uuidv4 } from 'uuid';

function ExperienceForm({ resume, setResume, setDisplayExperienceForm, showPDFViewer }) {

  function handleExperienceSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newExperience = {
      name: formData.get("name"),
      title: formData.get("title"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      description: formData.get("description"),
      id: uuidv4()
    };

    setResume({
      ...resume,
      experience: [...resume.experience, newExperience]
    })
    setDisplayExperienceForm(false);
  }


    return (
        <>
            <form className="animate-dropdownin w-full bg-slate-200 rounded-b-lg px-2" onSubmit={handleExperienceSubmit}>
                <h3></h3>
                <fieldset>
                    <div className="grid grid-row-2">
                        <label className="font-semibold" htmlFor="">Name</label>
                        <input className="rounded-lg px-1" type="text" name="name"  disabled={showPDFViewer} />
                    </div>
                </fieldset>
                <fieldset className="">
                    <div className="grid grid-row-2">
                        <label className="font-semibold" htmlFor="">Job Title</label>
                        <input className="rounded-lg px-1" type="text" name="title" disabled={showPDFViewer} />
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-2 justify-items-between">
                    <div className="grid grid-flow-row">
                        <label className="font-semibold" htmlFor="startDate">Start Date</label>
                        <input className="rounded-lg px-1 w-[125px]" type="text" name="startDate" id="startDate" disabled={showPDFViewer} />
                    </div>
                    <div className="grid grid-flow-row justify-end">
                        <label className="font-semibold"htmlFor="endDate">End Date</label>
                        <input className="rounded-lg px-1 w-[125px]" type="text" name="endDate" id="endDate" disabled={showPDFViewer} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="grid grid-flow-row">
                        <label className="font-semibold" htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            rows="4"
                            className="resize-none w-full overflow-y-auto rounded-lg px-1"
                            disabled={showPDFViewer}
                        ></textarea>
                    </div>
                </fieldset>
                <button className="w-full h-full rounded-lg my-2 bg-white font-semibold" type="submit"  disabled={showPDFViewer}>
                    Close and Save
                </button>
            </form>
        </>
    )
}

export default ExperienceForm