import './App.css'

function App() {
 return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Ugochukwu Maduagufor-Ogoke</h1>
          <p className="subtitle">AI Ethics and Technology Policy Enthusiast</p>
          <div className="contact-info">
            <span>📍 Nigeria</span>
            <span>📧 ugochukwuogoke@gmail.com</span>
            <span>📞 +234 813 796 0837</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="section summary">
        <div className="container">
          <h2>Professional Summary</h2>
          <p>
            AI Ethics and Technology Policy enthusiast with a background in Philosophy and hands-on experience in digital systems, web technologies, and emerging AI tools. Skilled in analyzing the ethical implications of technology, evaluating risks in automated systems, and translating ethical principles into practical governance frameworks.
          </p>
          <p>
            Experienced in collaborating with multidisciplinary teams to support responsible technology development and digital platforms. Author of <strong>Ethics in Code</strong>, exploring the intersection of artificial intelligence, ethics, and society. Passionate about advancing responsible AI policies that promote fairness, transparency, accountability, and human-centered innovation.
          </p>
        </div>
      </section>

      {/* Core Skills */}
      <section className="section skills">
        <div className="container">
          <h2>Core Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>AI Ethics & Governance</h3>
              <ul>
                <li>Responsible AI frameworks</li>
                <li>Algorithmic fairness and bias awareness</li>
                <li>AI risk and impact assessment</li>
                <li>Technology ethics and digital governance</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Research & Policy Analysis</h3>
              <ul>
                <li>Policy research and documentation</li>
                <li>Ethical impact analysis</li>
                <li>Technical research and report writing</li>
                <li>Data governance and privacy awareness</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Technical Knowledge</h3>
              <ul>
                <li>Artificial Intelligence fundamentals</li>
                <li>Machine learning concepts and datasets</li>
                <li>Web technologies (HTML, CSS, JavaScript, PHP)</li>
                <li>API integrations and cloud platforms</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Collaboration & Communication</h3>
              <ul>
                <li>Cross-functional collaboration</li>
                <li>Policy documentation and presentations</li>
                <li>Technical writing and thought leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section experience">
        <div className="container">
          <h2>Professional Experience</h2>
          
          <div className="job">
            <h3>Web Developer & IT Support Specialist</h3>
            <div className="job-details">
              <span className="company">Women's Aid Collective (WACOL) — Nigeria</span>
              <span className="duration">March 2023 – Present</span>
            </div>
            <ul>
              <li>Managed digital platforms and supported organizational technology systems.</li>
              <li>Conducted technical troubleshooting and resolved 95% of IT issues within 24 hours, improving operational efficiency.</li>
              <li>Developed and maintained web platforms used for digital education and advocacy.</li>
              <li>Collaborated with multidisciplinary teams to deploy digital tools supporting organizational programs.</li>
              <li>Ensured digital systems aligned with usability, accessibility, and responsible technology practices.</li>
              <li>Contributed to digital initiatives that increased user engagement by 30–40%.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Digital Communications & IT Support Intern</h3>
            <div className="job-details">
              <span className="company">Women's Aid Collective (WACOL) — Nigeria</span>
              <span className="duration">March 2022 – February 2023</span>
            </div>
            <ul>
              <li>Assisted with digital platform maintenance and system configuration.</li>
              <li>Supported technical documentation and internal digital operations.</li>
              <li>Created communication materials and supported research initiatives for advocacy campaigns.</li>
              <li>Assisted with system setup, data organization, and digital communications.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Team Leader</h3>
            <div className="job-details">
              <span className="company">HopefulMe Social Network (UNN Chapter)</span>
              <span className="duration">2018 – 2021</span>
            </div>
            <ul>
              <li>Led the university chapter of an international social impact network.</li>
              <li>Organized events and discussions focused on community engagement and social awareness.</li>
              <li>Collaborated with global teams to support program initiatives.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="section publications">
        <div className="container">
          <h2>Research & Publications</h2>
          <div className="publication-card">
            <h3>Author — Ethics in Code</h3>
            <p>
              A book exploring the ethical implications of artificial intelligence and modern digital technologies, focusing on responsible innovation, governance frameworks, and human-centered technology development.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-card">
            <h3>Bachelor of Arts (B.A.) — Philosophy</h3>
            <div className="education-details">
              <span className="institution">University of Nigeria, Nsukka</span>
              <span className="grade">Second Class Honours (Lower Division)</span>
            </div>
            <div className="relevant-coursework">
              <h4>Relevant Areas of Study:</h4>
              <ul>
                <li>Ethics and moral philosophy</li>
                <li>Logic and critical reasoning</li>
                <li>Philosophy of technology</li>
                <li>Political philosophy and governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section certifications">
        <div className="container">
          <h2>Certifications</h2>
          <div className="cert-list">
            <div className="cert-item">
              <h4>Generative AI Fundamentals Certification</h4>
              <span>Microsoft / UNITAR</span>
            </div>
            <div className="cert-item">
              <h4>Responsive Web Design Certification</h4>
              <span>FreeCodeCamp</span>
            </div>
            <div className="cert-item">
              <h4>Essential Digital Skills for Women and Youth in Africa</h4>
              <span>UNITAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tools */}
      <section className="section tools">
        <div className="container">
          <h2>Technical Tools</h2>
          <div className="tools-grid">
            <div className="tool-category">
              <h3>Programming / Web</h3>
              <p>HTML, CSS, JavaScript, PHP, SQL</p>
            </div>
            <div className="tool-category">
              <h3>Platforms</h3>
              <p>WordPress, WooCommerce, Git, Cloud hosting</p>
            </div>
            <div className="tool-category">
              <h3>Cloud & Systems</h3>
              <p>AWS, Google Cloud, cPanel, API integrations</p>
            </div>
            <div className="tool-category">
              <h3>Design & Research Tools</h3>
              <p>Figma, Adobe Creative Suite, documentation tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Interests */}
      <section className="section interests">
        <div className="container">
          <h2>Professional Interests</h2>
          <div className="interests-list">
            <span className="interest-tag">Responsible AI governance</span>
            <span className="interest-tag">AI ethics and algorithmic accountability</span>
            <span className="interest-tag">Technology policy and regulation</span>
            <span className="interest-tag">Digital rights and data privacy</span>
            <span className="interest-tag">Ethical frameworks for emerging technologies</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Ugochukwu Maduagufor-Ogoke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
