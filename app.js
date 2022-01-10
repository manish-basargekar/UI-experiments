const projectData = [
	{
		img: "./eye.svg",
		heading: "Blinking Eye",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
		link: "https://8mn.github.io/eye-animation/",
	},
	{
		img: "./social.svg",
		heading: "Social Icons",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
		link: "https://8mn.github.io/social-icons/",
	},
	{
		img: "./btn.svg",
		heading: "CSS button Collection",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
		link: "https://8mn.github.io/buttons/",
	},
	{
		img: "./mnsh.svg",
		heading: "MNSH block",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
		link: "https://8mn.github.io/mnsh-block",
	},
	{
		img: "./shadow.svg",
		heading: "Text shadow",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
		link: "https://8mn.github.io/text-shadow/",
	},
];



const uiContainer = document.querySelector(".ui-container");


for (let i = 0; i < projectData.length; i++) {
	let link = document.createElement("a")
	link.href = projectData[i].link;
	link.classList.add("link");
	link.target = "_blank"


    let project = document.createElement("div")
    project.classList.add("project");

    // let image = document.createElement("div")
    // image.classList.add("image");
	
	
    let img = document.createElement("img")
    // img.setAttribute("src", `${projectData[i].img}`)
    img.classList.add("image");
    img.src = projectData[i].img

	// image.appendChild(img)
    
    let info = document.createElement("div")
    info.classList.add("info");
    
    let h2 = document.createElement("h2")
    h2.innerHTML = projectData[i].heading;
    
    
    let desc = document.createElement("span")
    desc.classList.add("project-desc");
    desc.innerHTML = projectData[i].desc;
    
    info.appendChild(h2)
    info.appendChild(desc)

    project.appendChild(img)
    project.appendChild(info)

		link.appendChild(project);
    uiContainer.appendChild(link)
}
