import dashboard from './images/dashboard.png';
import selfManagement from './images/self-management.png';
import getAssist from './images/get-assist.png';
import archives from './images/archives.png';
import security from './images/security.png';

export const appFeatures = [
  {
    title: 'Dashboard',
    message: 'Comprehensive job outlook.',
    description:
      'The dashboard provides a comprehensive view of your job search. It displays current job outlook and detailed statistics of your job applications, categorized into total applications, in-progress, rejected, and offers. It also lists your applications in various views for easy management. To keep you motivated, the dashboard presents different inspirational quotes each time you visit.',
    image: dashboard,
  },
  {
    title: 'Self Management',
    message: 'Manage your job applications.',
    description:
      'Upload different versions of resumes and link them to different applications. Manage cover letters in the same manner. Upload job postings for reference even when employers delete the job post. Add events like planned interviews to the calendar. Manage todos related to job application process and link them to specific jobs you applied.',
    image: selfManagement,
  },
  {
    title: 'Get Assisted',
    message: 'Delegate your job application process.',
    description:
      'Based on your profile and preference, our auto pilot can find jobs matching your criteria and apply for them automatically. Get notified each time automation finds and applies to new jobs. These data will automatically reflect in the dashboard. Engage with AI to simulate real job interviews and practice before the actual interview happens. Interviews are automatically personalized and focused on specific job application and company background.',
    image: getAssist,
  },
  {
    title: 'Archives',
    message: 'Preserve your past application records.',
    description:
      'The Archives section serves as a repository for your successful job applications. Once you have received an offer, you can archive all related records, including todos, job descriptions, and the different versions of resumes and cover letters you used. This preserved information can be a valuable resource when you start a new job hunting process, providing insights and references from your past experiences.',
    image: archives,
  },
  {
    title: 'Security',
    message: 'Your data is secure.',
    description:
      'Security is our top priority. In addition to the secure HTTPS protocol, all data saved on our application servers are encrypted. This ensures that only you have access to the data you have generated, maintaining your privacy and security. We are committed to ensuring that your job search process is not only efficient but also secure.',
    image: security,
  },
];
