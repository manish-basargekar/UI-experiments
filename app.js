const projectData = [
	{
		img: "",
		heading: "Blinking Eye",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
	},
	{
		img: "",
		heading: "Social Icons",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
	},
	{
		img: "",
		heading: "CSS button Collection",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
	},
	{
		img: "",
		heading: "MNSH block",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
	},
	{
		img: "",
		heading: "Text shadow",
		desc: "Lorem ipsum, dolor sit amet ctetur sicing elit. Sunt expedita error, iure ea quos libero tempora cupiditate! Inventore suscipit commodi animi omnis quasi ",
	},
];



const uiContainer = document.querySelector(".ui-container");


for (let i = 0; i < projectData.length; i++) {
    let project = document.createElement("div")
    project.classList.add("project");
    let image = document.createElement("div")
    image.classList.add("image");


    let img = document.createElement("img")
    img.setAttribute("src", `${projectData[i].img}`)
    
    let info = document.createElement("div")
    info.classList.add("info");
    
    let h2 = document.createElement("h2")
    h2.innerHTML = projectData[i].heading;
    
    
    let desc = document.createElement("span")
    desc.classList.add("project-desc");
    desc.innerHTML = projectData[i].desc;
    
    info.appendChild(h2)
    info.appendChild(desc)

    project.appendChild(image)
    project.appendChild(info)


    uiContainer.appendChild(project)
}
