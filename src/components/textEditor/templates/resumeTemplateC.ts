export const resumeTemplateC = `
<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Arial', sans-serif;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }
  .resume-header {
    font-size: 26px;
    color: #2e86de;
    margin-bottom: 10px;
  }
  .section-title {
    text-transform: uppercase;
    font-size: 18px;
    color: #444;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  ul {
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
  }
  ul li {
    text-align: left;
  }
</style>

<h1 class="resume-header">Full Name</h1>
<p class="resume-header">Phone: (123) 456-7890 | Email: <a href="mailto:example@example.com">example@example.com</a></p>

<h2 class="section-title">Professional Summary</h2>
<p>An experienced software developer specializing in web technologies, with a passion for building high-performance applications.</p>

<h2 class="section-title">Experience</h2>
<ul>
  <li><strong>Senior Developer</strong> - Company Name
  <br/><em>Location | January 2020 - Present</em>
  <p>Responsibilities:</p>
  <ul>
    <li>Led the development of client-side and server-side components.</li>
    <li>Mentored junior developers and conducted code reviews.</li>
  </ul></li>

  <li><strong>Frontend Developer</strong> - Company Name
  <br/><em>Location | June 2017 - December 2019</em>
  <p>Responsibilities:</p>
  <ul>
    <li>Worked on designing and implementing user interfaces using React.</li>
    <li>Collaborated with cross-functional teams to optimize performance.</li>
  </ul></li>
</ul>

<h2 class="section-title">Education</h2>
<ul>
  <li><strong>University Name</strong> - Bachelor of Science in Computer Science
  <br/><em>Graduated: May 2017</em>
  </li>
</ul>

<h2 class="section-title">Skills</h2>
<ul>
  <li>JavaScript (ES6+), React, Node.js</li>
  <li>RESTful APIs, MongoDB, SQL</li>
  <li>Version Control (Git), Unit Testing</li>
</ul>

<h2 class="section-title">References</h2>
<p>Available upon request.</p>
`;