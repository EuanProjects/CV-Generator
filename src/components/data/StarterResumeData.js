import { v4 as uuidv4 } from 'uuid';


const starterResumeData = {
    font: "sans",
    name: "Johnson Michael",
    phone: "1234567890",
    email: "johnmich@gmail.com",
    website: "johnmich.com",
    education: [
        {
            school: "University of Odin",
            degree: "Bachelor's in Web Dev",
            startDate: "09/2018",
            endDate: "05/2022",
            id: uuidv4(),
        }
    ],
    experience: [
        {
            name: "Book",
            title: "Software Developer",
            startDate: "06/2022",
            endDate: "Present",
            description: "Software Engineer at Book, contributing to the development of core features and optimizing performance. Led projects in data analytics, improved algorithm efficiency, and collaborated on UX enhancements. Expertise in Java, Python, and large-scale system design. Played a vital role in ensuring a seamless user experience.",
            id: uuidv4(),
        }
    ]
}

export default starterResumeData