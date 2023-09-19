class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
      <ul class="navbar-nav">
          <li class="nav-item">
              <a href="index.html" class="nav-link">
                  <i class="fa-solid fa-house fa-2xl icon"></i>
                  <span class="link-text">Home</span>
              </a>
          </li> 
        <li class="nav-item">
          <a href="familypage.html" class="nav-link">
              <i class="fa-solid fa-people-group fa-2xl icon"></i>
              <span class="link-text">Family</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="experience.html" class="nav-link">
              
              <i class="fa-solid fa-briefcase fa-2xl icon"></i>
              <span class="link-text">Experience</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="contactme.html" class="nav-link">
              
              <i class="fa-solid fa-address-book fa-2xl icon"></i>
              <span class="link-text">Contact Me</span>
          </a>
        </li>
         
      </ul>
  </nav>
      `;
  }
}
class Footer extends HTMLElement{
  connectedCallback() {
    this.innerHTML=`
      <footer>
        <p>&copy;2023 Jayden's Life, all photos taken from Google, Unsplash or personal photos</p>
      </footer>
    `;
  }
}
customElements.define('main-header', Header);
customElements.define('main-footer',Footer);

/* 
<li class="nav-item">
          <a href="constructionpage.html" class="nav-link">
              <i class="fa-sharp fa-solid fa-medal fa-2xl icon"></i>
              <span class="link-text">Projects</span>
          </a>
</li> 
<li class="nav-item">
          <a href="constructionpage.html" class="nav-link">
              <i class="fa-solid fa-person-hiking fa-2xl icon"></i>
              <span class="link-text">Hobbies</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="constructionpage.html" class="nav-link">
              
              <i class="fa-sharp fa-solid fa-bullseye fa-2xl icon"></i>
              <span class="link-text">Dreams</span>
          </a>
        </li> 
*/
