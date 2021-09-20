const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav-link');   

function linkAction() {
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');
  
const navMenu = document.getElementById('nav-menu');
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
console.log(`140/160
1. Html code is valid +10
2. Semantic +20
The page code contains HTML5 semantic tags: figure, figcaption, footer, header, main, nav, section. h1, h2, h3 headers are used. 
3. css-styles +10
4. Content is placed in a block that is horizontally centered on the page. The background color stretches to the full width of the page +10
5. Responsive +10
6. Adaptive burger menu. The links in the menu items lead to the main sections of the CV. When clicking on menu items, smooth scrolling by anchors is implemented. As the screen width decreases, the menu becomes responsive. +10
7. Photo of the author CV, the aspect ratio of the image is not distorted, the image has an alt attribute +10
8. Contacts and skills are arranged in the form of a list ul-li +10
9. Contact info, information about yourself, a list of skills, information about education and level of English +10
10. CV contains sample code (solving codewars problem) with code highlighting +10
11. The CV contains image links to the project I have completed. When you click on the image, the project page opens in a new tab. The project has a name, a short description, and a list of technologies used. +5
12. CV made in English +10
13. Pull Request (see repository cv-rsschool) +10
14. video resume + 0
15. Design, quality of CV is not lower than in CV examples +5`);