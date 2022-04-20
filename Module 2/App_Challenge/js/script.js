const App = {
    //initializes the app
    init() {
        console.log("init init lol");
        //everything else will be here

        this.controllers.createElements();


        console.log("init end double lol");
    },

    //static database (where we keep everything)
    state: {},
    //functions that can be called
    controllers: {
        createElements() {

            console.log("starting to create elements");

            const els = App.elements;
            els.outerDiv.style.border = "1px solid black";
            els.outerDiv.style.width = "fit-content";
            els.outerDiv.style.padding = "5px";

            els.titleDiv.innerHTML = "Ingate Fullstack v5";
            els.titleDiv.style.textAlign = "center";
            els.titleDiv.style.fontWeight = "bold";

            els.descriptionDiv.innerHTML = "The best course ever";

            els.imgDiv.style.display = "flex";
            els.imgDiv.style.justifyContent = "center";
            els.imgDiv.style.alignItems = "center";

            els.img.src = "https://github.com/ingate-educa/fullstack-assets/raw/main/v5/Logo-short.png";
            els.img.style.width = "32px";

            els.imgDiv.appendChild(els.img);
            els.contentDiv.appendChild(els.descriptionDiv);
            els.contentDiv.appendChild(els.imgDiv);

            els.outerDiv.appendChild(els.titleDiv);
            els.outerDiv.appendChild(els.contentDiv);

            els.root.appendChild(els.outerDiv);

            console.log("finished creating elements");

        }
    },
    //every reference of our elements
    elements: {
        root: document.getElementById("app"),
        outerDiv: document.createElement("div"),
        contentDiv: document.createElement("div"),
        descriptionDiv: document.createElement("div"),
        titleDiv: document.createElement("div"),
        imgDiv: document.createElement("div"),
        img: document.createElement("img")
    }
};


App.init();
