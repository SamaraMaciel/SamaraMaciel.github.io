
$(document).ready(function () {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (resumeData) {
        // Full name
        // const fullName = `${resumeData.firstname} ${resumeData.middlename} ${resumeData.lastname}`;
        // console.log(fullName);
        // $('#fullname').text(fullName.trim());

        $('#fullname').text(`${resumeData.firstname} ${resumeData.middlename} ${resumeData.lastname}`);
        console.log(resumeData.firstname, resumeData.middlename, resumeData.lastname);
        console.log(localStorage.getItem('resumeData'));

        $('#designation').text(resumeData.designation);
        $('#contact-info').html(`${resumeData.email} | ${resumeData.phoneno} | ${resumeData.address}`);
        $('#summary').text(resumeData.summary);

        // Achievements
        $('#achieve-title').text(resumeData.achieve_title);
        $('#achieve-description').text(resumeData.achieve_description);

        // Experience
        $('#exp-title').text(resumeData.exp_title);
        $('#exp-organization').text(resumeData.exp_organization);
        $('#exp-location').text(resumeData.exp_location);
        $('#exp-start-date').text(resumeData.exp_start_date);
        $('#exp-end-date').text(resumeData.exp_end_date);
        $('#exp-description').text(resumeData.exp_description);

        // Education
        $('#edu-degree').text(resumeData.edu_degree);
        $('#edu-school').text(resumeData.edu_school);
        $('#edu-city').text(resumeData.edu_city);
        $('#edu-start-date').text(resumeData.edu_start_date);
        $('#edu-graduation-date').text(resumeData.edu_graduation_date);
        $('#edu-description').text(resumeData.edu_description);

        // Projects
        $('#proj-title').text(resumeData.proj_title);
        $('#proj-link').text(resumeData.proj_link).attr('href', resumeData.proj_link);
        $('#proj-description').text(resumeData.proj_description);

        // Skills
        $('#skill').text(resumeData.skill);
    } else {
        $('#resume').html('<p>No resume data found. Please go back and fill out the form.</p>');
    }
});
