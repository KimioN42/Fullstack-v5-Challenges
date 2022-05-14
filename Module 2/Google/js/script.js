const App = {
    init() {
        console.log("Creating the google layout");
        this.controllers.createLayout();
    },
    state: {
        backgroundColor: "rgb(30, 30, 35)",
        fontColor: "rgb(182, 185, 191)"
    },
    controllers: {
        createHeaderLeft() {
            const els = App.elements.header;

            //create elements
            const about = document.createElement("a");
            const store = document.createElement("a");

            //innerhtml of elements
            about.innerHTML = "About";
            store.innerHTML = "Store";

            //style elements
            about.href = "#";
            store.href = "#";

            this.setStyle({ about, store }, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor
            })

            //appending elements to upper layer
            els.left.appendChild(about);
            els.left.appendChild(store);
            els.container.appendChild(els.left);

        },
        createHeaderRight() {
            const els = App.elements.header;


            //creating elements
            const gmail = document.createElement("a");
            const images = document.createElement("a");
            const dotMenu = document.createElement("a");
            const profilePic = document.createElement("a");

            //innerhtml of elements
            gmail.innerHTML = "Gmail";
            images.innerHTML = "Images";
            dotMenu.innerHTML = "...";
            profilePic.innerHTML = "PP";

            //styling elements
            gmail.href = "#";
            images.href = "#";
            dotMenu.href = "#";
            profilePic.href = "#";

            gmail.style.textDecoration = "none";
            images.style.textDecoration = "none";
            dotMenu.style.textDecoration = "none";
            profilePic.style.textDecoration = "none";

            //appending elements to upper layer
            els.right.appendChild(gmail);
            els.right.appendChild(images);
            els.right.appendChild(dotMenu);
            els.right.appendChild(profilePic);
            els.container.appendChild(els.right);
        },
        createLayout() {
            const els = App.elements;
            const states = App.state;



            this.setStyle(els.header.container, {
                border: "1px solid green",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem"

            })

            this.createHeaderLeft();
            this.createHeaderRight();


            this.setStyle(els.root, {
                backgroundColor: states.backgroundColor,
                color: states.fontColor,
            });

            els.root.appendChild(els.header.container);
        },
        setStyle(elements, style) {
            for (let element in elements) {
                console.log("element: ", element);
                for (let key in style) {
                    console.log(key, style[key]);
                    element.style[key] = style[key];
                }
            }
        },
    },
    elements: {
        //only creating divs and sections in here
        root: document.getElementById("App"),
        header: {
            container: document.createElement("section"),
            left: document.createElement("div"),
            right: document.createElement("div"),
        },
        body: {
            container: document.createElement("section"),
            search: document.createElement("div"),
            buttons: document.createElement("div"),
            text: document.createElement("div")
        },
        footer: {
            container: document.createElement("section"),
        },

    }
};

App.init();