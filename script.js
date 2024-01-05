let projects = [
    {
        "year": 2022,
        "title": "Bayer Image Viewer",
        "img_src": "/assets/projects/NITK Black.jpg",
        "abstract": "Viewing Bayer format images is a problem professional photographers and camera engineers face everyday. There are some tools which help solve the issue a bit. However, most of these solutions/tools are designed by the camera manufacturers and only support their own format(s). Viewing RAW images without header is a bigger issue and there are very few tools which have this feature. An inherent problem with header-less RAW images is the fact that there is no information about the width and height. Formats like JPEG, PNG carry this information and thus it is very easy to view these images one after the other. This tool was designed to overcome the above problem by asking the user the image dimensions before hand. I admit, this tool solves a few problems, not all.",
        "skills": "Python-PyQt5"
    },
    {
        "year": 2022,
        "title": "Bayer Image Viewer",
        "img_src": "/assets/projects/NITK Black.jpg",
        "abstract": "Viewing Bayer format images is a problem professional photographers and camera engineers face everyday. There are some tools which help solve the issue a bit. However, most of these solutions/tools are designed by the camera manufacturers and only support their own format(s). Viewing RAW images without header is a bigger issue and there are very few tools which have this feature. An inherent problem with header-less RAW images is the fact that there is no information about the width and height. Formats like JPEG, PNG carry this information and thus it is very easy to view these images one after the other. This tool was designed to overcome the above problem by asking the user the image dimensions before hand. I admit, this tool solves a few problems, not all.",
        "skills": "Python-PyQt5"
    },
    {
        "year": 2022,
        "title": "Bayer Image Viewer",
        "img_src": "/assets/projects/NITK Black.jpg",
        "abstract": "Viewing Bayer format images is a problem professional photographers and camera engineers face everyday. There are some tools which help solve the issue a bit. However, most of these solutions/tools are designed by the camera manufacturers and only support their own format(s). Viewing RAW images without header is a bigger issue and there are very few tools which have this feature. An inherent problem with header-less RAW images is the fact that there is no information about the width and height. Formats like JPEG, PNG carry this information and thus it is very easy to view these images one after the other. This tool was designed to overcome the above problem by asking the user the image dimensions before hand. I admit, this tool solves a few problems, not all.",
        "skills": "Python-PyQt5"
    }
];

console.log(projects);
const ele = document.getElementById('projects');


projects.forEach(element => {
    ele.innerHTML += '<article> \
    <h4>' + element.title + '</h4> \
    <div style=" text-align: center;"> \
        <img src=' + element.img_src + 'alt="" style="width: 50%;"> \
    </div> \
    <br> \
    <div> \
        <p>' + element.abstract + '</p> \
        <p>' + element.year + ' | Skills: ' + element.skills + '</p> \
    </div> \
</article>';
});