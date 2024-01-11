let projects = [
    {
        "year": 2023,
        "title": "(Ongoing) Paint-By-Numbers",
        "img_src": "https://i.pinimg.com/736x/94/44/ef/9444efb635ae593165e50f7d1985e13c.jpg",
        "abstract": "Paint-by-numbers is similar to a kid's coloring book. The goal is take any image as an input, identify regions and colors in the image and generate an outline image with numbers marked inside each region. The color pallette is also generated so a user can print the outline image on a canvas and paint it up into real-looking paintings.",
        "skills": "Python-Image Processing-K Means",
        "code": "",
    },
    {
        "year": 2023,
        "title": "Transliteration of Hindi Sign Boards to English",
        "img_src": "",
        "abstract": "Indian languages are written in a variety of scripts (Brahmi family of scripts, Arabic-derived scripts, and even alphabetic Roman script). This diversity makes it challenging to support mechanisms which are convenient for typing or creating content in these diverse languages and scripts. Most Indian users are comfortable with the Roman keyboard and thus an optimal solution that users find beneficial is automatic transliteration of the romanized input into the native script. The project uses open-source datasets to achieve transliteration of english language into Hindi langugage using LSTMs.",
        "skills": "Python-PyTorch-RNNs-LSTM",
        "code": "https://colab.research.google.com/drive/1e90vfJgFzCRBc2eCnxBExsjGl4h1L_am?usp=sharing",
    },
    {
        "year": 2023,
        "title": "Implementing MRI Parallel Imaging Techniques - SENSE and Grappa",
        "img_src": "./assets/mri.png",
        "abstract": "Developed and applied SENSE and Grappa MRI parallel imaging techniques, examining the influence of factors such as increasing R-factor and the number of coils on image reconstruction quality.",
        "skills": "Matlab-Python",
        "code": "https://github.com/GSNikhil/mri_parallel_imaging"
    },
    {
        "year": 2021,
        "title": "Cowin Bot",
        "img_src": "./assets/cowin_bot.jpg",
        "abstract": "This bot was created for the sole purpose of finding vaccination slots at a PIN Code. Cowin is a Government of India portal to book your COVID-19 vaccination slots. However, the issue was - the slots were getting booked in a matter of minutes. This bot was created to notify the user when the slots open. \n This bot uses python-telegram-bot module to communicate with the telegram bot servers.",
        "skills": "Python-Heroku",
        "code": "https://github.com/GSNikhil/cowin-bot"
    },
    {
        "year": 2021,
        "title": "Bayer Image Viewer",
        "img_src": "./assets/bayer_image.png",
        "abstract": "Viewing Bayer format images is a problem professional photographers and camera engineers face everyday. There are some tools which help solve the issue a bit. However, most of these solutions/tools are designed by the camera manufacturers and only support their own format(s). Viewing RAW images without header is a bigger issue and there are very few tools which have this feature. An inherent problem with header-less RAW images is the fact that there is no information about the width and height. Formats like JPEG, PNG carry this information and thus it is very easy to view these images one after the other. This tool was designed to overcome the above problem by asking the user the image dimensions before hand. I admit, this tool solves a few problems, not all.",
        "skills": "Python-PyQt5",
        "code": "https://github.com/GSNikhil/bayer-image-viewer"
    },
    {
        "year": 2021,
        "title": "Trading Strategy Analyzer",
        "img_src": "./assets/trading_strategy_analyzer.jpg",
        "abstract": "I employed Python and Zerodha APIs to gather data and evaluate the profitability of a trading strategy for the top 50 stocks in the Indian Stock Market based on their market capitalization (NIFTY50). By developing this script, I gained valuable skills in data retrieval and analysis using APIs. Python allowed me to efficiently retrieve the required data and perform calculations to assess the profitability of the trading strategy. The script further provided insights by indicating the profit or loss for each trade. This project enhanced my understanding of financial markets, data manipulation, and analysis, while also strengthening my programming skills in Python.",
        "skills": "Python-Finance-REST",
        "code": "https://colab.research.google.com/drive/18gkJTR4ndW_92LUHeilMHeSTvASMyunh?usp=sharing"
    },
    {
        "year": 2019,
        "title": "Wallace Multiplier",
        "img_src": "./assets/wallace_multiplier.jpg",
        "abstract": "I successfully designed and validated a 4-bit Wallace multiplier utilizing the software tool Magic. This project allowed me to gain valuable skills in digital circuit design and verification. With Magic, I was able to create a schematic representation of the multiplier, implementing the necessary logic gates and interconnections. Through simulation and verification, I ensured the correctness and functionality of the design. This project enhanced my understanding of complex multiplication algorithms, circuit synthesis, and layout design. Additionally, I learned to effectively utilize Magic as a tool for designing and validating digital circuits, paving the way for further exploration in the field of integrated circuit design.",
        "skills": "Magic-Python-Bash",
        "code": "https://github.com/GSNikhil/Wallace-Multiplier"
    },
    {
        "year": 2019,
        "title": "Dynamic Lane Follower Bot",
        "img_src": "",
        "abstract": "I developed a graphical user interface (GUI) using HTML, CSS, and JavaScript that enables users to draw paths. This project allowed me to enhance my front-end development skills while creating an intuitive and interactive interface. The coordinates of the drawn path were uploaded to Firebase, providing a centralized storage solution. A robot, based on Arduino, retrieved, using bluetooth connected to a computer, the coordinates from Firebase and followed the same path in the physical world. This project improved my ability to integrate different technologies, such as web development and hardware communication, to create a seamless interaction between the virtual and real world. Additionally, I gained experience in data synchronization and real-time communication using Firebase.",
        "skills": "HTML, CSS, Javascript, p5.js, Arduino, Firebase",
        "code": "https://github.com/GSNikhil/ACM-Project"
    },
    {
        "year": 2018,
        "title": "Patatap Clone",
        "img_src": "./assets/patatap_clone.jpg",
        "abstract": "This interactive music game designed for children incorporates HTML, CSS, and JavaScript to create a delightful experience. Each keyboard key corresponds to a unique piece of music and triggers a corresponding animation when pressed. By engaging with this game, kids can explore different musical sounds and enjoy the visual feedback provided by the animations. This project allowed me to enhance my front-end web development skills by working with HTML for structuring the game interface, CSS for styling the elements and animations, and JavaScript for handling key presses and playing the music. Additionally, it provides an opportunity to foster creativity and provide an enjoyable learning experience for young users.",
        "skills": "HTML, CSS, Javascript",
        "code": "https://github.com/GSNikhil/PatatapClone",
        "demo": "https://gsnikhil.github.io/PatatapClone/",
    },
    {
        "year": 2018,
        "title": "Color Guessing Game",
        "img_src": "./assets/color_game.jpg",
        "abstract": "The project utilizes HTML, CSS, and JavaScript to generate RGB value and present five random colors and one color representing the generated RGB value. The user's objective is to identify and select the color that corresponds to the given RGB value. The project incorporates two modes: hard and easy. In the easy mode, the number of additional colors generated is limited to two. By working on this project, I have gained skills in front-end web development, including HTML for structuring the page, CSS for styling elements, and JavaScript for generating random colors and implementing game logic. Additionally, this has enhanced my understanding of RGB color representation and user interaction in web applications.",
        "skills": "HTML, CSS, Javascript",
        "code": "https://github.com/GSNikhil/ColorGame",
        "demo": "https://gsnikhil.github.io/ColorGame/",
    },
    {
        "year": 2018,
        "title": "Todolist",
        "img_src": "./assets/todo_list.jpg",
        "abstract": "By utilizing HTML, CSS, and JavaScript, I developed a straightforward to-do list. This project enabled me to organize and manage my tasks efficiently (for a few days xD). The HTML is employed for structuring the list and creating the user interface. CSS allowed me to style the list, enhancing its visual appeal and user experience. JavaScript empowered me to add functionality such as adding and removing tasks dynamically, marking tasks as completed, and storing data locally. Through this project, I enhanced my front-end development skills, including HTML, CSS, and JavaScript, while also improving my ability to design intuitive user interfaces and handle user interactions effectively.",
        "skills": "HTML, CSS, Javascript",
        "code": "https://github.com/GSNikhil/TodoList_simple",
        "demo": "https://gsnikhil.github.io/TodoList_simple/",
    },
];

const ele = document.getElementById('projects');

projects.forEach(element => {
    const demolink = element.demo != null ? ' | <a target="_blank" href=' + element.demo + '>Demo</a>' : '';
    ele.innerHTML += '<article> \
    <h4>' + element.title + ' - <a target="_blank" href='+ element.code + '>Code</a>' + demolink +
     '</h4><div style=" text-align: center;"> \
        <img src=' + element.img_src + ' alt="" style="width: 50%;"> \
    </div> \
    <br> \
    <div> \
        <p>' + element.abstract + '</p> \
        <p>' + element.year + ' | Skills: ' + element.skills + '</p> \
    </div> \
</article>';
});

console.log("I've changed my website some 7th time now. I've tried it all - Angular, Jekyll, Esoteric CSS templates, Wordpress,... And I've made the\
current website using HTML, very-light CSS and vanilla JS. Kill me if I decide to use someother framework/tool again to create my website!")