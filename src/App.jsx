// import React from 'react'
// import Header from './Components/Header'
// import Home from './Components/Home'
// import Skills from './Components/Skills'
// import Education from './Components/Education'
// // import Button from './Components/Button'

// const App = () => {
//   return (
//     <div className='text-white bg-black'>
//       <Header/>
//       <Home/>
//       <Skills/>
//       <Education/>
//     </div>
//   )
// }

// export default App
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Education from './Components/Education';
// import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='text-white bg-black'>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        {/* <section id="experience">
          <Experience />
        </section> */}
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;