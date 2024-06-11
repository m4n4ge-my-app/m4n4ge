import dashboard from './images/dashboard.png';
import selfManagement from './images/self-management.png';
import getAssist from './images/get-assist.png';
import archives from './images/archives.png';
import security from './images/security.png';

export const appFeatures = [
  {
    title: 'Dashboard',
    message: 'Comprehensive data display.',
    description: [
      'The dashboard provides a comprehensive view of your job application journey.',
      'It displays available jobs specific to your preference and detailed statistics of your job applications, categorized into various stages of the application process.',
      'It also lists your applications in various views for easy management.',
      'To keep you motivated, the dashboard presents different inspirational quotes each time you visit.',
    ],
    image: dashboard,
  },
  {
    title: 'Self Management',
    message: 'Manage your job applications.',
    description: [
      'Upload different versions of resumes and link them to different applications.',
      'Manage cover letters in the same manner.',
      'Upload job postings for reference even when employers delete the job post.',
      'Add events like planned interviews to the calendar.',
      'Manage todos related to job application process and link them to specific jobs you applied.',
    ],
    image: selfManagement,
  },
  {
    title: 'Get Assistance',
    message: 'Delegate your job application process.',
    description: [
      'Based on your profile and preference, our auto pilot can find jobs matching your criteria and apply for them automatically.',
      'Once your application records reach 44, the automation is fully aware of your specific goals and ready to take over. Fun fact: this is the origin of the "44" in our app name.',
      'Get notified each time automation finds and applies to new jobs. Automation data will automatically reflect in the dashboard.',
      'Engage with AI to simulate real job interviews and practice before the actual interview happens.',
      'Interviews are automatically personalized and focused on specific job application and company background.',
    ],
    image: getAssist,
  },
  {
    title: 'Archives',
    message: 'Preserve your past application records.',
    description: [
      'The Archives section serves as a repository for your previous job application sessions.',
      'Once you have received an offer, you can archive all related records, including todos, job descriptions, and the different versions of resumes and cover letters you used.',
      'This preserved information can be a valuable resource when you start a new job hunting process, providing insights and references from your past experiences.',
    ],
    image: archives,
  },
  {
    title: 'Security',
    message: 'Your data is secure.',
    description: [
      'Security is our top priority.',
      'All data stored on our application servers is encrypted using advanced cryptographic techniques.',
      'This ensures that only you have access to the data you have generated, maintaining your privacy and security.',
      'We are committed to ensuring that your job search process is not only efficient but also secure.',
    ],
    image: security,
  },
];
