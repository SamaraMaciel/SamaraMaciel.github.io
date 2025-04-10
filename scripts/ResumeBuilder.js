// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
                saveFormData(); // Save when items are removed
            }, 500);
        },
        isFirstItemUndeletable: true
    });
    
    // Add input event listeners to all form elements
    $('input, textarea').on('input', saveFormData);
});

// Function to load saved form data
function loadFormData() {
    const savedData = localStorage.getItem('resumeData');
    if (!savedData) return;
    
    const formData = JSON.parse(savedData);
    
    // Load about section
    const about = formData.about || {};
    document.querySelector('.firstname').value = about.firstName || '';
    document.querySelector('.middlename').value = about.middleName || '';
    document.querySelector('.lastname').value = about.lastName || '';
    document.querySelector('.designation').value = about.designation || '';
    document.querySelector('.address').value = about.address || '';
    document.querySelector('.email').value = about.email || '';
    document.querySelector('.phoneno').value = about.phone || '';
    document.querySelector('.summary').value = about.summary || '';
    
    // Load other sections would require more complex logic for repeaters
    // This is a simplified version - you might need to enhance it
    
    // Trigger CV generation
    generateCV();
}

// Call this when page loads
$(document).ready(function(){
    loadFormData();
    
    // Your existing repeater code...
});

// Function to save form data to localStorage
function saveFormData() {
    const formData = {
        about: {
            firstName: document.querySelector('.firstname').value,
            middleName: document.querySelector('.middlename').value,
            lastName: document.querySelector('.lastname').value,
            designation: document.querySelector('.designation').value,
            email: document.querySelector('.email').value,
            phone: document.querySelector('.phoneno').value,
            summary: document.querySelector('.summary').value,
            image: document.querySelector('.image').files[0] ? 
                URL.createObjectURL(document.querySelector('.image').files[0]) : null
        },
        achievements: [],
        experience: [],
        education: [],
        projects: [],
        skills: []
    };

    // Get achievements
    document.querySelectorAll('[data-repeater-list="group-a"] [data-repeater-item]').forEach(item => {
        formData.achievements.push({ 
            title: item.querySelector('.achieve_title')?.value || '',
            description: item.querySelector('.achieve_description')?.value || ''
        });
    });

    // Get experience
    document.querySelectorAll('[data-repeater-list="group-b"] [data-repeater-item]').forEach(item => {
        formData.experience.push({ 
            title: item.querySelector('.exp_title')?.value || '',
            organization: item.querySelector('.exp_organization')?.value || '',
            location: item.querySelector('.exp_location')?.value || '',
            startDate: item.querySelector('.exp_start_date')?.value || '',
            endDate: item.querySelector('.exp_end_date')?.value || '',
            description: item.querySelector('.exp_description')?.value || ''
        });
    });

    // Get education
    document.querySelectorAll('[data-repeater-list="group-c"] [data-repeater-item]').forEach(item => {
        formData.education.push({ 
            school: item.querySelector('.edu_school')?.value || '',
            degree: item.querySelector('.edu_degree')?.value || '',
            location: item.querySelector('.edu_city')?.value || '',
            startDate: item.querySelector('.edu_start_date')?.value || '',
            endDate: item.querySelector('.edu_graduation_date')?.value || '',
            description: item.querySelector('.edu_description')?.value || ''
        });
    });

    // Get projects
    document.querySelectorAll('[data-repeater-list="group-d"] [data-repeater-item]').forEach(item => {
        formData.projects.push({ 
            title: item.querySelector('.proj_title')?.value || '',
            link: item.querySelector('.proj_link')?.value || '',
            description: item.querySelector('.proj_description')?.value || ''
        });
    });

    // Get skills
    document.querySelectorAll('[data-repeater-list="group-e"] [data-repeater-item]').forEach(item => {
        const skill = item.querySelector('.skill')?.value;
        if (skill) {
            formData.skills.push(skill);
        }
    });

    localStorage.setItem('resumeData', JSON.stringify(formData));
}

// Add event listeners to all form elements
document.querySelectorAll('input, textarea').forEach(element => {
element.addEventListener('input', saveFormData);
});

// Handle image upload
document.querySelector('.image').addEventListener('change', function(e) {
saveFormData();
// Preview image if needed
if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Save the base64 encoded image to localStorage
        const resumeData = JSON.parse(localStorage.getItem('resumeData') || {});
        resumeData.about.image = e.target.result;
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }
    reader.readAsDataURL(this.files[0]);
}
});

// Update the preview button link
document.querySelector('.btn-primary').addEventListener('click', function(e) {
e.preventDefault();
saveFormData();
window.location.href = 'resume_profile.html';
});
