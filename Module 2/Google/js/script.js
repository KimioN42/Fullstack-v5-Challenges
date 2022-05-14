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

            this.setUnderlineOnHover(about);
            this.setUnderlineOnHover(store);

            this.setStyle(about, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor,
                fontFamily: "Helvetica, Arial, Sans-Serif"
            });

            this.setStyle(store, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor,
                fontFamily: "Helvetica, Arial, Sans-Serif"
            });


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
            const dotIcon = document.createElement("a");

            const dotSVG = document.createElementNS("http://www.w3.org/2000/svg", "path");
            dotSVG.style.height = "24px";
            dotSVG.style.width = "24px";
            dotSVG.setAttribute("d", "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z");
            dotSVG.setAttribute("fill", "none");
            dotSVG.setAttribute("viewBox", "0 0 24 24");
            dotSVG.setAttribute("stroke", "currentColor");

            const profilePic = document.createElement("a");
            const avatar = document.createElement("div");



            dotIcon.href = "#";


            gmail.innerHTML = "Gmail";
            images.innerHTML = "Images";


            //styling elements
            gmail.href = "#";
            images.href = "#";
            dotSVG.href = "#";
            profilePic.href = "#";


            this.setUnderlineOnHover(gmail);
            this.setUnderlineOnHover(images);

            this.setStyle(avatar, {
                border: "3px solid red",
                width: "30px",
                height: "30px",
                borderRadius: "50%"
            })
            this.setStyle(gmail, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor,
                fontFamily: "Helvetica, Arial, Sans-Serif"
            });
            this.setStyle(images, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor,
                fontFamily: "Helvetica, Arial, Sans-Serif"
            });
            this.setStyle(profilePic, {
                textDecoration: "none",
                margin: "0 0.5rem",
                color: App.state.fontColor,
                fontFamily: "Helvetica, Arial, Sans-Serif"
            });

            //appending elements to upper layer
            profilePic.appendChild(avatar);
            dotIcon.appendChild(dotSVG);

            els.right.appendChild(gmail);
            els.right.appendChild(images);
            els.right.appendChild(dotIcon);
            els.right.appendChild(profilePic);

            this.setStyle(els.right, {
                display: "flex",
                alignItems: "center"
            })


            els.container.appendChild(els.right);
        },
        createSearchBody() {
            const els = App.elements.body;

            //creating elements
            const googleLogo = document.createElement("img");




            //styling elements
            googleLogo.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
            this.setStyle(googleLogo, {
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                paddingTop: "5.5rem",
                flexGrow: "1"
            })



            //appending elements to body container
            els.container.appendChild(googleLogo);


        },
        createLayout() {
            const els = App.elements;
            const states = App.state;

            this.setStyle(els.root, {
                backgroundColor: states.backgroundColor,
                color: states.fontColor,
            });

            this.setStyle(els.header.container, {
                border: "1px solid green",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                alignItems: "center"
            })

            this.setStyle(els.body.container, {
                border: "1px solid red"
            })

            this.createHeaderLeft();
            this.createHeaderRight();
            this.createSearchBody();




            els.root.appendChild(els.header.container);
            els.root.appendChild(els.body.container);
        },
        setStyle(el, style) {
            console.log("element: ", el);
            for (let key in style) {
                console.log("style: " + key + " =", style[key]);
                el.style[key] = style[key];
            }
        },
        setUnderlineOnHover(el) {
            console.log("element on hover: " + el);
            el.onmouseover = () => {
                el.style.textDecoration = "underline";
            };
            el.onmouseleave = () => {
                el.style.textDecoration = "none";
            }
        }

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