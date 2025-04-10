
$(document).ready(function () {
    // ****generates cv based in date stored in local host****
    $('#preview-btn').on('click', function () {
        let resumeData = {};

        // About
        resumeData.firstname = $('input[name="firstname"]').val();
        resumeData.middlename = $('input[name="middlename"]').val();
        resumeData.lastname = $('input[name="lastname"]').val();
        resumeData.designation = $('input[name="designation"]').val();
        resumeData.address = $('input[name="address"]').val();
        resumeData.email = $('input[name="email"]').val();
        resumeData.phoneno = $('input[name="phoneno"]').val();
        resumeData.summary = $('input[name="summary"]').val();

        // Achievements
        resumeData.achieve_title = $('input[name="achieve_title"]').val();
        resumeData.achieve_description = $('input[name="achieve_description"]').val();

        // Experience
        resumeData.exp_title = $('input[name="exp_title"]').val();
        resumeData.exp_organization = $('input[name="exp_organization"]').val();
        resumeData.exp_location = $('input[name="exp_location"]').val();
        resumeData.exp_start_date = $('input[name="exp_start_date"]').val();
        resumeData.exp_end_date = $('input[name="exp_end_date"]').val();
        resumeData.exp_description = $('input[name="exp_description"]').val();

        // Education
        resumeData.edu_school = $('input[name="edu_school"]').val();
        resumeData.edu_degree = $('input[name="edu_degree"]').val();
        resumeData.edu_city = $('input[name="edu_city"]').val();
        resumeData.edu_start_date = $('input[name="edu_start_date"]').val();
        resumeData.edu_graduation_date = $('input[name="edu_graduation_date"]').val();
        resumeData.edu_description = $('input[name="edu_description"]').val();

        // Projects
        resumeData.proj_title = $('input[name="proj_title"]').val();
        resumeData.proj_link = $('input[name="proj_link"]').val();
        resumeData.proj_description = $('input[name="proj_description"]').val();

        // Skills
        resumeData.skill = $('input[name="skill"]').val();

        // Save to localStorage
        localStorage.setItem('resumeData', JSON.stringify(resumeData));

        // Redirect to view page
        window.location.href = 'viewResume.html';

    });

    // ****jquery script for saving data on json file****
    $('#generate-json-btn').on('click', function (event) {
        
        event.preventDefault();  // Prevent form from submitting the traditional way
        
        // Collecting form data
        var formData = {};

        // Collecting "about" section data
        formData.firstname = $('input[name="firstname"]').val();
        formData.middlename = $('input[name="middlename"]').val();
        formData.lastname = $('input[name="lastname"]').val();
        // formData.image = $('input[name="image"]')[0].files[0]; // Image special handling
        formData.designation = $('input[name="designation"]').val();
        formData.address = $('input[name="address"]').val();
        formData.email = $('input[name="email"]').val();
        formData.phoneno = $('input[name="phoneno"]').val();
        formData.summary = $('input[name="summary"]').val();

        // Achievements
        formData.achieve_title = $('input[name="achieve_title"]').val();
        formData.achieve_description = $('input[name="achieve_description"]').val();

        // Experience
        formData.exp_title = $('input[name="exp_title"]').val();
        formData.exp_organization = $('input[name="exp_organization"]').val();
        formData.exp_location = $('input[name="exp_location"]').val();
        formData.exp_start_date = $('input[name="exp_start_date"]').val();
        formData.exp_end_date = $('input[name="exp_end_date"]').val();
        formData.exp_description = $('input[name="exp_description"]').val();

        // Education
        formData.edu_school = $('input[name="edu_school"]').val();
        formData.edu_degree = $('input[name="edu_degree"]').val();
        formData.edu_city = $('input[name="edu_city"]').val();
        formData.edu_start_date = $('input[name="edu_start_date"]').val();
        formData.edu_graduation_date = $('input[name="edu_graduation_date"]').val();
        formData.edu_description = $('input[name="edu_description"]').val();

        // Projects
        formData.proj_title = $('input[name="proj_title"]').val();
        formData.proj_link = $('input[name="proj_link"]').val();
        formData.proj_description = $('input[name="proj_description"]').val();

        // Skills
        formData.skill = $('input[name="skill"]').val();

        // Sending the data to the server
        sendToServer(formData);
    });


    // Function to send data to the server
    function sendToServer(data) {
        $.ajax({
            url: 'http://localhost:3000/save-cv',  // path where the data will be saved
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                console.log('Data saved successfully:', response);
            },
            error: function (error) {
                console.error('Error saving data:', error);
            }
        });
    }
});
