function ResumeHTML({ resume }) {
    console.log(resume.font);
    return (
        <>
            <div id="resume" className={`bg-slate-50 text-black w-full h-full font-${resume.font}`}>
                <div className="mx-5 h-[95%] w-[95%] flex flex-col items-center border-solid border-2 border-slate-200 bg-white drop-shadow-lg">
                    <div className="w-full" id="header">
                        <h1 className="text-2xl font-bold text-center">{resume.name}</h1>
                        <div className="w-full flex justify-around">
                            <span className="text-center">phone: {resume.phone}</span>
                            <span className="text-center">email: {resume.email}</span>
                            <span className="text-center">website: {resume.website}</span>
                        </div>
                        <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <div className="w-full" id="education">
                        <h2 className="text-xl font-bold pl-2">Education</h2>
                        <div className="w-full h-[2px] bg-black"></div>
                        {
                            resume.education.map((inst) => (
                                <div key={inst.id} className="pl-2">
                                    <div>
                                        <span className="font-semibold">{inst.school}</span>
                                        <div>{inst.startDate}-{inst.endDate}</div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="w-full h-[2px] bg-black"></div>


                    </div>
                    <div className="w-full" id="experience">
                        <h2 className="text-xl font-bold pl-2">Experience</h2>
                        <div className="w-full h-[2px] bg-black"></div>
                        {
                            resume.experience.map((job) => (
                                <div key={job.id} className="pl-2 mb-2 flex w-full">
                                    <div className="pr-2 w-[25%]">
                                        <span className="font-semibold">{job.name}</span>
                                        <div className="font-medium">{job.title}</div>
                                        <div>{job.startDate}-{job.endDate}</div>
                                    </div>
                                    <div className="w-[75%]">
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeHTML