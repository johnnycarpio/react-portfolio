import React from 'react';
import "./nav.css"


function Nav({ currentPage, handlePageChange }) {
  return (
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse nav-items" id="navbarNav">
      <ul class="navbar-nav">

       <li>
         <a href="#home" data-toggle="collapse" data-target="#home #navbarNav" onClick={() => handlePageChange('Home')}
           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>HOME</a>
       </li>
       <li>
         <a href="#about" data-toggle="collapse" data-target="#about #navbarNav" onClick={() => handlePageChange('About')}
           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>ABOUT</a>
      </li>

       <li>
        <a href="#gallery" data-bs-target="#navbarNav" onClick={() => handlePageChange('Gallery')}
          className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}>PROJECTS</a>
      </li>

        <li>
       <a href="#contact" data-bs-toggle="collapse" data-bs-target="#contact" onClick={() => handlePageChange('Contact')}
         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>CONTACT</a>
     </li>

      </ul>
    </div>
  </div>
</nav>

);
}

export default Nav;