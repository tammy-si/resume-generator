import React, { Component } from "react";
import General from "./components/general";
import Experience from "./components/experience";
import Education from "./components/education";
import Project from "./components/projects";
import Technical from "./components/technical";

import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        github: "",
        linkedIn: ""
      },
      allExperience: [{
        id: uniqid(),
        position: "",
        location: "",
        from: "",
        to: "",
        description: ""
      }],
      allEducation: [{
        id: uniqid(),
        school: "",
        location: "",
        from: "",
        to: "",
        degree: ""
      }],
      allProjects: [{
        id: uniqid(),
        name: "",
        technologies: "",
        from: "",
        to: "",
        description: ""
      }],
      technicalSkills: {
        languages: "",
        frameworks: "",
        developerTools: "",
        libraries: ""
      }
  }
  }

  handleInput = (e) => {
    const value = e.target.value;
    this.setState({
      general: {
        ...this.state.general,
        [e.target.name]: value
        }
      });
  }

  // add a new empty experience
  handleAddExperience = () => {
    let newExperience = {
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
      description: ""
    }
    this.setState({
      allExperience: [...this.state.allExperience, newExperience]
    })
  }

  handleExperienceInput = (e) => {
    // figure out with experience to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedExperience = {...this.state.allExperience.find(exp => exp.id === id)}
    // change the values in experience
    updatedExperience[e.target.name] = e.target.value;
    // update the experience list with the new modified experience.
    this.setState({
      // if the experience isn't the one we modified, return just exp. e
      allExperience: this.state.allExperience.map(exp => { return (exp.id !== id) ? exp : updatedExperience})
    })
  }

  handleExperienceDelete = (e) => {
    // figure out with experience to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the experience 
    this.setState({
      // if the experience isn't the one we modified, return just exp. e
      allExperience: this.state.allExperience.filter(exp => exp.id !== id)
    })
  }

  // add a new empty education
  handleAddEducation = () => {
    let newEducation = {
      id: uniqid(),
      school: "",
      location: "",
      from: "",
      to: "",
      degree: ""
    }
    this.setState({
      allEducation: [...this.state.allEducation, newEducation]
    })
  }

  // changing values for education
  handleEducationInput = (e) => {
    // figure out with education to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedEducation = {...this.state.allEducation.find(edu => edu.id === id)}
    // change the values in education
    updatedEducation[e.target.name] = e.target.value;
    // update the education list with the new modified education.
    this.setState({
      // if the education isn't the one we modified, return just edu. 
      allEducation: this.state.allEducation.map(edu => { return (edu.id !== id) ? edu : updatedEducation})
    })
  }

  // delete and education
  handleEducationDelete = (e) => {
    // figure out with education to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the education 
    this.setState({
      // if the education isn't the one we modified, return just exp. e
      allEducation: this.state.allEducation.filter(edu => edu.id !== id)
    })
  }

  /* for projects */
  // add a new empty project
  handleAddProject = () => {
    let newProject = {
      id: uniqid(),
      name: "",
      technologies: "",
      from: "",
      to: "",
      description: ""
    }
    this.setState({
      allProjects: [...this.state.allProjects, newProject]
    })
  }

  // changing values for projects
  handleProjectInput = (e) => {
    // figure out with project to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedProject = {...this.state.allProjects.find(proj => proj.id === id)}
    // change the values in project
    updatedProject[e.target.name] = e.target.value;
    // update the project list with the new modified education.
    this.setState({
      // if the education isn't the one we modified, return just edu. 
      allProjects: this.state.allProjects.map(proj => { return (proj.id !== id) ? proj : updatedProject})
    })
  }

  // delete a project
  handleProjectDelete = (e) => {
    // figure out with project to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the project 
    this.setState({
      // if the project isn't the one we modified, return just exp. e
      allProjects: this.state.allProjects.filter(proj => proj.id !== id)
    })
  }

  /* for the technical skills area */
  handleTechnicalSkillsInput = (e) => {
    const value = e.target.value;
    this.setState({
      technicalSkills: {
        ...this.state.technicalSkills,
        [e.target.name]: value
        }
      });
  }
  render() {
    const handleInput = this.handleInput;
    const handleAddExperience = this.handleAddExperience;
    const handleExperienceInput = this.handleExperienceInput;
    const handleExperienceDelete = this.handleExperienceDelete;
    const experienceList = this.state.allExperience;
    // for education
    const educationList = this.state.allEducation;
    const handleAddEducation = this.handleAddEducation;
    const handleEducationInput = this.handleEducationInput;
    const handleEducationDelete = this.handleEducationDelete;
    /* for the projects */
    const projectList = this.state.allProjects;
    const handleAddProject = this.handleAddProject;
    const handleProjectInput = this.handleProjectInput;
    const handleProjectDelete = this.handleProjectDelete;

    /* for technical skills */
    const handleTechnicalSkillsInput = this.handleTechnicalSkillsInput;
    // string
    const string = String.raw`
    %-------------------------
    % Resume in Latex
    % Author : Jake Gutierrez
    % Based off of: https://github.com/sb2nov/resume
    % License : MIT
    %------------------------
    
    \documentclass[letterpaper,11pt]{article}
    
    \usepackage{latexsym}
    \usepackage[empty]{fullpage}
    \usepackage{titlesec}
    \usepackage{marvosym}
    \usepackage[usenames,dvipsnames]{color}
    \usepackage{verbatim}
    \usepackage{enumitem}
    \usepackage[hidelinks]{hyperref}
    \usepackage{fancyhdr}
    \usepackage[english]{babel}
    \usepackage{tabularx}
    \input{glyphtounicode}
    
    
    %----------FONT OPTIONS----------
    % sans-serif
    % \usepackage[sfdefault]{FiraSans}
    % \usepackage[sfdefault]{roboto}
    % \usepackage[sfdefault]{noto-sans}
    % \usepackage[default]{sourcesanspro}
    
    % serif
    % \usepackage{CormorantGaramond}
    % \usepackage{charter}
    
    
    \pagestyle{fancy}
    \fancyhf{} % clear all header and footer fields
    \fancyfoot{}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
    
    % Adjust margins
    \addtolength{\oddsidemargin}{-0.5in}
    \addtolength{\evensidemargin}{-0.5in}
    \addtolength{\textwidth}{1in}
    \addtolength{\topmargin}{-.5in}
    \addtolength{\textheight}{1.0in}
    
    \urlstyle{same}
    
    \raggedbottom
    \raggedright
    \setlength{\tabcolsep}{0in}
    
    % Sections formatting
    \titleformat{\section}{
      \vspace{-4pt}\scshape\raggedright\large
    }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]
    
    % Ensure that generate pdf is machine readable/ATS parsable
    \pdfgentounicode=1
    
    %-------------------------
    % Custom commands
    \newcommand{\resumeItem}[1]{
      \item\small{
        {#1 \vspace{-2pt}}
      }
    }
    
    \newcommand{\resumeSubheading}[4]{
      \vspace{-2pt}\item
        \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
          \textbf{#1} & #2 \\
          \textit{\small#3} & \textit{\small #4} \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubSubheading}[2]{
        \item
        \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
          \textit{\small#1} & \textit{\small #2} \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeProjectHeading}[2]{
        \item
        \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
          \small#1 & #2 \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}
    
    \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
    
    \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
    \newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
    \newcommand{\resumeItemListStart}{\begin{itemize}}
    \newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
    
    %-------------------------------------------
    %%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    
    \begin{document}
    
    %----------HEADING----------
    % \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
    %   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
    %   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
    % \end{tabular*}
    
    \begin{center}
        \textbf{\Huge \scshape Jake Ryan} \\ \vspace{1pt}
        \small 123-456-7890 $|$ \href{mailto:x@x.com}{\underline{jake@su.edu}} $|$ 
        \href{https://linkedin.com/in/...}{\underline{linkedin.com/in/jake}} $|$
        \href{https://github.com/...}{\underline{github.com/jake}}
    \end{center}
    
    
    %-----------EDUCATION-----------
    \section{Education}
      \resumeSubHeadingListStart
        \resumeSubheading
          {Southwestern University}{Georgetown, TX}
          {Bachelor of Arts in Computer Science, Minor in Business}{Aug. 2018 -- May 2021}
        \resumeSubheading
          {Blinn College}{Bryan, TX}
          {Associate's in Liberal Arts}{Aug. 2014 -- May 2018}
      \resumeSubHeadingListEnd
    
    
    %-----------EXPERIENCE-----------
    \section{Experience}
      \resumeSubHeadingListStart
    
        \resumeSubheading
          {Undergraduate Research Assistant}{June 2020 -- Present}
          {Texas A\&M University}{College Station, TX}
          \resumeItemListStart
            \resumeItem{Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems}
            \resumeItem{Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data}
            \resumeItem{Explored ways to visualize GitHub collaboration in a classroom setting}
          \resumeItemListEnd
          
    % -----------Multiple Positions Heading-----------
    %    \resumeSubSubheading
    %     {Software Engineer I}{Oct 2014 - Sep 2016}
    %     \resumeItemListStart
    %        \resumeItem{Apache Beam}
    %          {Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines}
    %     \resumeItemListEnd
    %    \resumeSubHeadingListEnd
    %-------------------------------------------
    
        \resumeSubheading
          {Information Technology Support Specialist}{Sep. 2018 -- Present}
          {Southwestern University}{Georgetown, TX}
          \resumeItemListStart
            \resumeItem{Communicate with managers to set up campus computers used on campus}
            \resumeItem{Assess and troubleshoot computer problems brought by students, faculty and staff}
            \resumeItem{Maintain upkeep of computers, classroom equipment, and 200 printers across campus}
        \resumeItemListEnd
    
        \resumeSubheading
          {Artificial Intelligence Research Assistant}{May 2019 -- July 2019}
          {Southwestern University}{Georgetown, TX}
          \resumeItemListStart
            \resumeItem{Explored methods to generate video game dungeons based off of \emph{The Legend of Zelda}}
            \resumeItem{Developed a game in Java to test the generated dungeons}
            \resumeItem{Contributed 50K+ lines of code to an established codebase via Git}
            \resumeItem{Conducted  a human subject study to determine which video game dungeon generation technique is enjoyable}
            \resumeItem{Wrote an 8-page paper and gave multiple presentations on-campus}
            \resumeItem{Presented virtually to the World Conference on Computational Intelligence}
          \resumeItemListEnd
    
      \resumeSubHeadingListEnd
    
    
    %-----------PROJECTS-----------
    \section{Projects}
        \resumeSubHeadingListStart
          \resumeProjectHeading
              {\textbf{Gitlytics} $|$ \emph{Python, Flask, React, PostgreSQL, Docker}}{June 2020 -- Present}
              \resumeItemListStart
                \resumeItem{Developed a full-stack web application using with Flask serving a REST API with React as the frontend}
                \resumeItem{Implemented GitHub OAuth to get data from user’s repositories}
                \resumeItem{Visualized GitHub data to show collaboration}
                \resumeItem{Used Celery and Redis for asynchronous tasks}
              \resumeItemListEnd
          \resumeProjectHeading
              {\textbf{Simple Paintball} $|$ \emph{Spigot API, Java, Maven, TravisCI, Git}}{May 2018 -- May 2020}
              \resumeItemListStart
                \resumeItem{Developed a Minecraft server plugin to entertain kids during free time for a previous job}
                \resumeItem{Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review}
                \resumeItem{Implemented continuous delivery using TravisCI to build the plugin upon new a release}
                \resumeItem{Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin}
              \resumeItemListEnd
        \resumeSubHeadingListEnd
    
    
    
    %
    %-----------PROGRAMMING SKILLS-----------
    \section{Technical Skills}
     \begin{itemize}[leftmargin=0.15in, label={}]
        \small{\item{
         \textbf{Languages}{: Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R} \\
         \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI} \\
         \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse} \\
         \textbf{Libraries}{: pandas, NumPy, Matplotlib}
        }}
     \end{itemize}
    
    
    %-------------------------------------------
    \end{document}`
    return <div>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
        <Education educationList = {educationList} handleAddEducation = { handleAddEducation} handleEducationInput = { handleEducationInput } handleEducationDelete= { handleEducationDelete }/>
        <Experience experienceList = {experienceList} handleAddExperience = { handleAddExperience } handleExperienceInput= {handleExperienceInput} handleExperienceDelete={handleExperienceDelete}/>
        <Project projectList = {projectList} handleAddProject = { handleAddProject } handleProjectInput= {handleProjectInput} handleProjectDelete={handleProjectDelete}/>
        <Technical handleTechnicalSkillsInput = { handleTechnicalSkillsInput }/>
      </div>
      <div className='preview'>
        <form action="https://www.overleaf.com/docs" method="post" target="_blank">
        <textarea rows="8" cols="60" name="snip" value={string}>
        </textarea>
        <input type="submit" value="Open in Overleaf"></input>
        </form>
      </div>
    </div>;
  }
}

export default App;
