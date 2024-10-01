export const resumeTemplateB = `
<style>
  .resume-header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .resume-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .left-column {
    width: 30%;
    background-color: #f0f0f0;
    padding: 20px;
  }
  .right-column {
    width: 65%;
    padding: 20px;
  }
  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>

<h1 class="resume-header">Full Name</h1>
<p class="resume-header">Phone | Email | LinkedIn</p>

<div class="resume-container">
  <div class="left-column">
    <div class="section-title">Skills</div>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CI/CD</li>
    </ul>
    <div class="section-title">Certifications</div>
    <ul>
      <li>Google Cloud Professional</li>
      <li>AWS Solutions Architect</li>
    </ul>
    <div class="section-title">Contact Info</div>
    <p>Phone: (123) 456-7890</p>
    <p>Email: example@example.com</p>
  </div>

  <div class="right-column">
    <div class="section-title">Professional Summary</div>
    <p>An enthusiastic developer with experience in full-stack web development, specializing in modern JavaScript frameworks.</p>

    <div class="section-title">Work Experience</div>
    <ul>
      <li><strong>Company Name</strong> - Software Engineer
      <br/>Location | <em>2019 - Present</em>
      <ul>
        <li>Developed and maintained web applications using React and Node.js.</li>
        <li>Led CI/CD initiatives, improving deployment efficiency by 30%.</li>
      </ul></li>
      <li><strong>Company Name</strong> - Junior Developer
      <br/>Location | <em>2016 - 2019</em>
      <ul>
        <li>Collaborated on agile teams, working closely with UI/UX designers.</li>
        <li>Contributed to the frontend development of an e-commerce platform.</li>
      </ul></li>
    </ul>

    <div class="section-title">Projects</div>
    <ul>
      <li><strong>Project Management Tool</strong>
      <p>Built a project management application with team collaboration features.</p></li>
      <li><strong>Weather Dashboard</strong>
      <p>Developed a weather forecast app using OpenWeather API.</p></li>
    </ul>
  </div>
</div>
`;