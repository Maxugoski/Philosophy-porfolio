import './App_new.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaBook, FaGraduationCap, FaAward, FaTools, FaLightbulb, FaCode, FaRobot, FaFileAlt, FaUsers, FaCloud, FaDatabase, FaBriefcase, FaMicrosoft } from 'react-icons/fa'
import { SiFreecodecamp } from 'react-icons/si'
import ugoImage from '../assets/images/ugo.png'
import ugoOfficeImage from '../assets/images/ugo-in-office.png'
import ethicsBookCover from '../assets/images/Ethics in code cover 3 design.jpg'
import genaiImage from '../assets/images/genai.jpg'
import skillbuildImage from '../assets/images/skillbuild.jpg'
import webdesignImage from '../assets/images/webdesign.jpg'

function App() {
 return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="profile-section">
            <img src={ugoImage} alt="Ugochukwu Maduagufor-Ogoke" className="profile-image" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Ugochukwu Maduagufor-Ogoke</h1>
            <p className="hero-subtitle">AI Ethics and Technology Policy Enthusiast</p>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Nigeria</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:ugochukwuogoke@gmail.com">ugochukwuogoke@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+234 813 796 0837</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ugochukwu-ogoke-212508177/" target="_blank"rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Maxugoski" target="_blank"rel="noopener noreferrer" className="social-link">
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="section summary">
        <div className="container">
          <div className="section-header">
            <FaFileAlt className="section-icon" />
            <h2>Professional Summary</h2>
          </div>
          <div className="summary-content">
            <div className="summary-image">
              <img src={ugoOfficeImage} alt="Ugochukwu in Office" />
            </div>
            <div className="summary-text">
              <p>
                AI Ethics and Technology Policy enthusiast with a background in Philosophy and hands-on experience in digital systems, web technologies, and emerging AI tools. Skilled in analyzing the ethical implications of technology, evaluating risks in automated systems, and translating ethical principles into practical governance frameworks.
              </p>
              <p>
                Experienced in collaborating with multidisciplinary teams to support responsible technology development and digital platforms. Author of <strong>Ethics in Code</strong>, exploring the intersection of artificial intelligence, ethics, and society. Passionate about advancing responsible AI policies that promote fairness, transparency, accountability, and human-centered innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="section skills">
        <div className="container">
          <div className="section-header">
            <FaCheckCircle className="section-icon" />
            <h2>Core Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FaRobot className="skill-icon" />
              </div>
              <h3>AI Ethics & Governance</h3>
              <ul>
                <li>Responsible AI frameworks</li>
                <li>Algorithmic fairness and bias awareness</li>
                <li>AI risk and impact assessment</li>
                <li>Technology ethics and digital governance</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FaFileAlt className="skill-icon" />
              </div>
              <h3>Research & Policy Analysis</h3>
              <ul>
                <li>Policy research and documentation</li>
                <li>Ethical impact analysis</li>
                <li>Technical research and report writing</li>
                <li>Data governance and privacy awareness</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FaCode className="skill-icon" />
              </div>
              <h3>Technical Knowledge</h3>
              <ul>
                <li>Artificial Intelligence fundamentals</li>
                <li>Machine learning concepts and datasets</li>
                <li>Web technologies (HTML, CSS, JavaScript, PHP)</li>
                <li>API integrations and cloud platforms</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <FaUsers className="skill-icon" />
              </div>
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
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2>Professional Experience</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
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
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
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
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="section publications">
        <div className="container">
          <div className="section-header">
            <FaBook className="section-icon" />
            <h2>Research & Publications</h2>
          </div>
          <div className="publication-card">
            <div className="publication-image">
              <img src={ethicsBookCover} alt="Ethics in Code Book Cover" />
            </div>
            <div className="publication-content">
              <h3>Author — Ethics in Code</h3>
              <p>
                A book exploring the ethical implications of artificial intelligence and modern digital technologies, focusing on responsible innovation, governance frameworks, and human-centered technology development.
              </p>
              <a href="https://www.amazon.com/Ethics-Code-Framework-Modern-Software/dp/B0G2B7J6QY" target="_blank"rel="noopener noreferrer" className="book-link">
                Get it on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education">
        <div className="container">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
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
          <div className="section-header">
            <FaAward className="section-icon" />
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon-wrapper">
                <FaMicrosoft className="cert-icon" />
              </div>
              <h4>Generative AI Fundamentals Certification</h4>
              <span>Microsoft / UNITAR</span>
              <img src={genaiImage} alt="Generative AI" className="cert-image" />
            </div>
            <div className="cert-item">
              <div className="cert-icon-wrapper">
                <SiFreecodecamp className="cert-icon" />
              </div>
              <h4>Responsive Web Design Certification</h4>
              <span>FreeCodeCamp</span>
              <img src={webdesignImage} alt="Web Design" className="cert-image" />
            </div>
            <div className="cert-item">
              <div className="cert-icon-wrapper">
                <FaAward className="cert-icon" />
              </div>
              <h4>Essential Digital Skills for Women and Youth in Africa</h4>
              <span>UNITAR</span>
              <img src={skillbuildImage} alt="Digital Skills" className="cert-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tools */}
      <section className="section tools">
        <div className="container">
          <div className="section-header">
            <FaTools className="section-icon" />
            <h2>Technical Tools</h2>
          </div>
          <div className="tools-grid">
            <div className="tool-category">
              <div className="tool-icon-wrapper">
                <FaCode className="tool-icon" />
              </div>
              <h3>Programming / Web</h3>
              <p>HTML, CSS, JavaScript, PHP, SQL</p>
            </div>
            <div className="tool-category">
              <div className="tool-icon-wrapper">
                <FaCloud className="tool-icon" />
              </div>
              <h3>Platforms</h3>
              <p>WordPress, WooCommerce, Git, Cloud hosting</p>
            </div>
            <div className="tool-category">
              <div className="tool-icon-wrapper">
                <FaDatabase className="tool-icon" />
              </div>
              <h3>Cloud & Systems</h3>
              <p>AWS, Google Cloud, cPanel, API integrations</p>
            </div>
            <div className="tool-category">
              <div className="tool-icon-wrapper">
                <FaTools className="tool-icon" />
              </div>
              <h3>Design & Research Tools</h3>
              <p>Figma, Adobe Creative Suite, documentation tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Interests */}
      <section className="section interests">
        <div className="container">
          <div className="section-header">
            <FaLightbulb className="section-icon" />
            <h2>Professional Interests</h2>
          </div>
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
