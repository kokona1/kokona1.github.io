const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'publications', 'awards']

let currentLang = 'en'

const translations = {
    en: {
        nav_home: 'HOME',
        nav_publications: 'PUBLICATIONS',
        nav_awards: 'AWARDS',
        section_publications: 'PUBLICATIONS',
        section_awards: 'AWARDS',
        lang_button: '中文',
        about_me: 'About Me',
        contact: 'Contact',
        education: 'Education',
        research_interests: 'Research Interests'
    },
    zh: {
        nav_home: '首页',
        nav_publications: '论文发表',
        nav_awards: '获奖情况',
        section_publications: '论文发表',
        section_awards: '获奖情况',
        lang_button: 'English',
        about_me: '关于我',
        contact: '联系方式',
        education: '教育经历',
        research_interests: '研究方向'
    }
}

const homeContent = {
    en: `
### About Me

I am currently working as an Ads Algorithm Engineer at Bytedance Tiktok. I received my Master's Degree in Computer Science from Fudan University in 2025.

---

### Contact
**Email:** guzh22@m.fudan.edu.cn  
**GitHub:** [kokona1](https://github.com/kokona1)

---

### Education
- **M.E., Computer Science**  
  Fudan University, 2022 — 2025
  
- **B.E., Data Science and Big Data Technology**  
  Communication University of China, 2018 — 2022

---

### Research Interests
Deep Learning, Data Mining, Spatial-temporal Problems, Recommendation Systems, Advertising Systems.
`,
    zh: `
### 关于我

我目前在字节跳动Tiktok担任广告算法工程师。我于2025年获得复旦大学计算机科学硕士学位。

---

### 联系方式
**Email:** guzh22@m.fudan.edu.cn  
**GitHub:** [kokona1](https://github.com/kokona1)

---

### 教育经历
- **硕士，计算机科学**  
  复旦大学，2022 — 2025
  
- **学士，数据科学与大数据技术**  
  中国传媒大学，2018 — 2022

---

### 研究方向
深度学习、数据挖掘、时空问题、推荐系统、广告系统。
`
}

const awardsContent = {
    en: `
<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🎓</span>
        <div class="award-title">Professional Master's New Student Scholarship, Fudan University</div>
    </div>
    <div class="award-date">2022</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🏆</span>
        <div class="award-title">Professional Master's Outstanding Academic Scholarship, Fudan University</div>
    </div>
    <div class="award-date">2023 & 2024</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">⭐</span>
        <div class="award-title">Outstanding Student, Fudan University</div>
    </div>
    <div class="award-date">2023</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🎉</span>
        <div class="award-title">Outstanding Graduate of Shanghai</div>
    </div>
    <div class="award-date">2025</div>
</div>
`,
    zh: `
<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🎓</span>
        <div class="award-title">复旦大学专业硕士新生奖学金</div>
    </div>
    <div class="award-date">2022</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🏆</span>
        <div class="award-title">复旦大学专业硕士优秀学业奖学金</div>
    </div>
    <div class="award-date">2023 & 2024</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">⭐</span>
        <div class="award-title">复旦大学优秀学生</div>
    </div>
    <div class="award-date">2023</div>
</div>

<div class="award-item">
    <div class="award-content">
        <span class="award-icon">🎉</span>
        <div class="award-title">上海市优秀毕业生</div>
    </div>
    <div class="award-date">2025</div>
</div>
`
}

window.addEventListener('DOMContentLoaded', event => {

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }
            })
        })
        .catch(error => console.log(error));

    marked.use({ mangle: false, headerIds: false })
    loadContent('home')
    loadContent('publications')
    loadAwards()

});

function loadContent(section) {
    fetch(content_dir + section + '.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(section + '-md').innerHTML = html;
        }).then(() => {
            MathJax.typeset();
        })
        .catch(error => console.log(error));
}

function loadAwards() {
    const awardsMd = document.getElementById('awards-md')
    if (awardsMd) {
        awardsMd.innerHTML = awardsContent[currentLang]
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en'
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en'
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key]
        }
    })

    document.getElementById('lang-text').textContent = translations[currentLang].lang_button

    const homeMd = document.getElementById('home-md')
    if (homeMd) {
        const html = marked.parse(homeContent[currentLang])
        homeMd.innerHTML = html
    }

    loadAwards()

    MathJax.typeset()
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.85) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();