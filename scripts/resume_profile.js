document.addEventListener('DOMContentLoaded', function() {
    // Load data when page loads
    loadResumeData();
});

function loadResumeData() {
    try {
        const resumeData = JSON.parse(localStorage.getItem('resumeData'));
        if (!resumeData) {
            console.log('No resume data found in localStorage');
            return;
        }

        // Populate About section
        populateAboutSection(resumeData.about);
        
        // Populate Experience section
        populateSection('experience', resumeData.experience, 
            ['title', 'organization', 'location', 'dateRange', 'description']);
        
        // Populate Education section
        populateSection('education', resumeData.education, 
            ['school', 'degree', 'location', 'dateRange', 'description']);
        
        // Populate Achievements section
        populateSection('achievements', resumeData.achievements, 
            ['title', 'description']);
        
        // Populate Projects section
        populateSection('projects', resumeData.projects, 
            ['title', 'link', 'description']);
        
        // Populate Skills section
        populateSkills(resumeData.skills);

    } catch (error) {
        console.error('Error loading resume data:', error);
    }
}

function populateAboutSection(aboutData) {
    if (!aboutData) return;

    const fields = [
        { selector: '.about-item:nth-child(1) p', value: aboutData.firstName },
        { selector: '.about-item:nth-child(2) p', value: aboutData.lastName },
        { selector: '.about-item:nth-child(3) p', value: aboutData.middleName },
        { selector: '.about-item:nth-child(4) p', value: aboutData.email },
        { selector: '.about-item:nth-child(5) p', value: aboutData.phone },
        { selector: '.about-item:nth-child(6) p', value: aboutData.designation },
        { selector: '.about-item-summary p', value: aboutData.summary }
    ];

    fields.forEach(field => {
        const element = document.querySelector(field.selector);
        if (element) {
            element.textContent = field.value || '';
        }
    });

    // Handle profile image
    if (aboutData.image) {
        const profilePic = document.querySelector('.profile-pic');
        if (profilePic) {
            // Check if it's a data URL or regular URL
            if (aboutData.image.startsWith('data:image') || aboutData.image.startsWith('http')) {
                profilePic.src = aboutData.image;
            } else {
                // Handle relative paths if needed
                profilePic.src = 'images/' + aboutData.image;
            }
        }
    }
}

function populateSection(sectionName, items, columns) {
    if (!items || !Array.isArray(items)) return;

    const table = document.querySelector(`#${sectionName}-sc table tbody`);
    if (!table) return;

    // Clear existing rows
    table.innerHTML = '';

    // Add new rows
    items.forEach(item => {
        const row = document.createElement('tr');
        
        columns.forEach(col => {
            const cell = document.createElement('td');
            
            if (col === 'dateRange') {
                cell.textContent = formatDateRange(item.startDate, item.endDate);
            } 
            else if (col === 'link' && item[col]) {
                const link = document.createElement('a');
                link.href = item[col];
                link.textContent = item[col];
                link.target = '_blank';
                cell.appendChild(link);
            }
            else {
                cell.textContent = item[col] || '';
            }
            
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

function populateSkills(skills) {
    if (!skills || !Array.isArray(skills)) return;

    const skillsList = document.querySelector('#skills-sc ul');
    if (!skillsList) return;

    // Clear existing skills
    skillsList.innerHTML = '';

    // Add new skills
    skills.forEach(skill => {
        if (skill) {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        }
    });
}

function formatDateRange(startDate, endDate) {
    if (!startDate && !endDate) return '';
    
    const formatDate = (dateString) => {
        if (!dateString) return '';
        
        try {
            const date = new Date(dateString);
            return isNaN(date.getTime()) ? '' : 
                date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short' 
                });
        } catch (e) {
            console.error('Error formatting date:', e);
            return '';
        }
    };
    
    const formattedStart = formatDate(startDate);
    const formattedEnd = endDate ? formatDate(endDate) : 'Present';
    
    return formattedStart ? `${formattedStart} - ${formattedEnd}` : '';
}