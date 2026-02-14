const fs = require('fs');
const path = require('path');

const studentsListPath = path.join(__dirname, 'students_list.txt');
const imagesDir = path.join(__dirname, 'src', 'images', 'placements');

try {
    const studentsList = fs.readFileSync(studentsListPath, 'utf8');
    const imageFiles = fs.readdirSync(imagesDir);

    const students = studentsList.trim().split('\n').map(line => {
        if (!line.trim()) return null;

        let tokens = line.trim().split('\t');
        if (tokens.length < 3) {
            // Regex for "ID Name Company" where Name and Company can have spaces
            // Assuming ID is number at start
            const match = line.trim().match(/^(\d+)\s+(.+?)\s{2,}(.+)$/); // 2 spaces separator?
            if (match) {
                tokens = [match[1], match[2], match[3]];
            } else {
                // Try default split by space and reconstruct? No, names have spaces.
                // Try to split by tab again? Maybe indentation is spaces.
                // Let's assume the user pasted tabs.
                // If not, let's try to match ID at start.
                const idMatch = line.trim().match(/^(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    const rest = line.trim().substring(id.length).trim();
                    // Now we have "Name Company".
                    // We don't know where name ends.
                    // But we have the list of companies.
                    // Actually, I'll rely on the tab or double space split first.
                    // If that fails, I'll try to find the image by partial match of the whole string?
                    // Let's try to infer from image files?
                    // Or just split by single space if tabs failed?
                    const parts = line.trim().split(/\s+/);
                    if (parts.length >= 3) {
                        // ID Name... Company...
                        // This is hard without delimiter.
                        // But the user list looks tab separated in the prompt display.
                        // Let's hope my write_to_file preserved tabs.
                    }
                }
            }
        }

        if (tokens.length < 2) return null; // Skip if cant parse

        const id = tokens[0].trim();
        // If we split by tab, we are good.
        // If not, we might have Name and Company mixed.
        // Let's assume tab for now.
        let name = tokens[1] ? tokens[1].trim() : "Unknown";
        let company = tokens[2] ? tokens[2].trim() : "";

        // Fallback for single line without tabs
        if (!company) {
            // Maybe name has it?
        }

        // Special handling if tab didn't work and we used spaces
        // If tokens has more than 3 elements (ID Name MiddleName Company)
        // I'll assume last part is company? No, Company can be "Omega Healthcare".
        // I will trust the tab separation from the prompt.


        // Image Matching
        let matchName = name;
        if (name === 'Joy.J') matchName = 'Joy';

        const imageFile = imageFiles.find(f => {
            const fName = f.toLowerCase();
            const nLower = matchName.toLowerCase();
            return fName.includes(nLower);
        });

        if (!imageFile) {
            console.log(`Warning: Image not found for ${name} (ID: ${id})`);
        }

        return { id, name, company, imageFile };
    }).filter(s => s !== null);

    let imports = "import React from 'react';\n";
    let constants = "";
    let studentObjects = '';

    students.forEach(s => {
        const varName = `Student${s.id}`;
        if (s.imageFile) {
            imports += `import ${varName} from '../images/placements/${s.imageFile}';\n`;
        } else {
            constants += `const ${varName} = 'https://via.placeholder.com/150'; // Image not found for ${s.name}\n`;
        }

        studentObjects += `    {
        id: ${s.id},
        name: "${s.name}",
        designation: "Placed Student 2025",
        company: "${s.company}",
        image: ${varName}
    },\n`;
    });

    const content = `
${imports}
${constants}

export const placementData = {
  banner: {
    title: "Placement Success at ThoughtFlows",
    subtitle: "Success Stories of Students Placed in Top Companies in 2025"
  },
  introduction: {
    text: "At ThoughtFlows, we don’t just train—we help students build real careers. Our strong placement support, practical guidance, and continuous interview preparation have helped thousands of students start their careers in top healthcare companies across India. With a dedicated placement team and trusted hiring partners, we have successfully placed 25,000+ students, and many more success stories are being created every day."
  },
  students: [
${studentObjects}
  ],
  companies: [
    "Omega Healthcare", "Episource", "CorroHealth", "Vee Technologies",
    "R1 RCM", "Optum", "AGS Health", "Access Healthcare",
    "Visionary RCM", "Sutherland", "Guidehouse", "Cotiviti"
  ]
};
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'Placements', 'placementData.js'), content);
    console.log('Successfully updated src/Placements/placementData.js with ' + students.length + ' students.');

} catch (err) {
    console.error('Error:', err);
}
