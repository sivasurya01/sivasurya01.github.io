const repo_url = "https://api.github.com/users/MdNaina/repos"
const work__container = document.querySelector('.work__container')

const get_repos = async () => {
    let res = await fetch(repo_url);
    if(res.ok){
        datas = await res.json();
        datas.forEach(data =>{
            if(data['stargazers_count'] > 0){
                console.log(data['name'])
                let link = document.createElement('a')
                link.href = data['svn_url']
                link.classList.add('work__img')
                link.innerHTML = `<img src="https://raw.githubusercontent.com/MdNaina/${data['name']}/master/screenshots/thumbnail.png" alt="${data['name']}">
                    <div class="overlay">
                        <div class="description">
                            <h3>${data['name']}</h3> 
                            <p>${data['description']}</p>
                        </div>
                    </div>`
                work__container.appendChild(link)
            }
        })
    }
}

const showMenu = (toggleId, navId) =>{
    nav = document.getElementById(navId)
    toggle = document.getElementById(toggleId)

    if(nav&&toggle){
        toggle.addEventListener("click",() =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function activeLink(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu button
    let menu = document.getElementById('nav-menu')
    menu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', activeLink))

// Scroll Animation
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2000,
    reset: true
})

// Scroll Home 
sr.reveal(`.home__title, .button, .home__img, .home__social-icon, .about__text, .about__subtitle, .about__img, .skills__subtitle, .skills__text, .skills__img, .skills__data, .work__img, .contact__form`,{
    interval: 200
})


get_repos()
