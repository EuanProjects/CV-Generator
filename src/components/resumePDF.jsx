import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register(
    {
        family: 'sans',
        fonts: [
            { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
            { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: "semibold" },
            { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: "bold" },
        ],
    }
);

Font.register({
    family: 'mono',
    fonts: [
      { src: '/RobotoMono-Regular.ttf' },
      { src: '/RobotoMono-SemiBold.ttf', fontStyle: 'semibold' },
      { src: '/RobotoMono-Bold.ttf', fontWeight: 'bold' },
    ],
});

Font.register({
    family: 'serif',
    fonts: [
      { src: 'NotoSerifKR-Regular.otf'},
      { src: 'NotoSerifKR-SemiBold.otf', fontStyle: 'semibold' },
      { src: 'NotoSerifKR-Bold.otf', fontWeight: 'bold' },
    ],
});





function ResumePDF({ resume }) {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#f0f0f0',
        },
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            border: '2pt solid #444',
            boxShadow: '5pt 5pt 5pt #888',
            backgroundColor: '#fff',
            width: '100%',
            height: '100%',
        },
        header: {
            paddingBottom: '5pt',
            width: '100%',
        },
        heading: {
            fontFamily: resume.font,
            fontSize: '28pt',
            fontWeight: "bold",
            textAlign: 'center',
        },
        contactInfo: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        contactText: {
            textAlign: 'center',
            fontSize: "12pt"
        },
        section: {
            marginTop: '5pt',
            width: "100%",
            borderTop: '2pt solid #000',
        },
        sectionTitle: {
            fontFamily: resume.font,
            fontSize: '18pt',
            fontWeight: "semibold",
            borderBottom: '2pt solid #000',
        },
        sectionSubTitle: {
            fontFamily: resume.font,
            fontSize: '14pt',
            fontWeight: "semibold",
            textAlign: 'left',
        },
        text: {
            textAlign: 'left',
            fontSize: "14pt"
        },
        educationItem: {
            marginBottom: '5pt',
        },
        jobSectionSubTitle: {
            fontFamily: resume.font,
            fontSize: '10pt',
            fontWeight: "semibold",
            textAlign: 'left',
        },
        jobItem: {
            flexDirection: 'row',
            marginBottom: '10pt',
        },
        jobInfo: {
            width: '25%',
            height: '100pt',
            flexDirection: "column",
            flexWrap: "wrap",
        },
        jobDescription: {
            width: '75%',
            fontSize: '14pt'
        },
    });


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.heading}>{resume.name}</Text>
                        <View style={styles.contactInfo}>
                            <Text style={styles.contactText}>phone: {resume.phone}</Text>
                            <Text style={styles.contactText}>email: {resume.email}</Text>
                            <Text style={styles.contactText}>website: {resume.website}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        {resume.education.map((inst) => (
                            <View key={inst.id} style={styles.educationItem}>
                                <Text>
                                    <Text style={styles.sectionSubTitle}>{inst.school}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.text}> {inst.startDate}-{inst.endDate}</Text>
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {resume.experience.map((job) => (
                            <View key={job.id} style={styles.jobItem}>
                                <View style={styles.jobInfo}>
                                    <Text style={styles.jobTitle}>{job.name}</Text>
                                    <Text style={styles.jobSectionSubTitle}>{job.title}</Text>
                                    <Text style={styles.text}>{job.startDate}-{job.endDate}</Text>
                                </View>
                                <View style={styles.jobDescription}>
                                    <Text>{job.description}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default ResumePDF;
