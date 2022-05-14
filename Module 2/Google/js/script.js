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
            this.setEmptyLinks(about, "About");
            this.setEmptyLinks(store, "Store");

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
            const profilePic = document.createElement("a");
            const avatar = document.createElement("div");

            //first create the svg
            const dotSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            dotSVG.style.height = "24px";
            dotSVG.style.width = "24px";

            //then create the path
            const dotPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            dotPath.setAttribute("d", "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z");
            dotPath.setAttribute("fill", App.state.fontColor);
            dotPath.setAttribute("viewBox", "0 0 24 24");

            //append path to svg
            dotSVG.appendChild(dotPath);

            //styling elements
            this.setEmptyLinks(gmail, "Gmail");
            this.setEmptyLinks(images, "Images");
            profilePic.href = "#";
            dotIcon.href = "#";

            this.setStyle(avatar, {
                border: "3px solid red",
                width: "30px",
                height: "30px",
                borderRadius: "50%"
            })
            this.setStyle(dotIcon, {
                margin: "0 0.5rem",
            });
            this.setStyle(profilePic, {
                margin: "0 0.5rem",
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

            //search icon svg
            const searchIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            searchIconPath.setAttribute("d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z");
            searchIconPath.setAttribute("fill", App.state.fontColor);
            searchIconPath.setAttribute("viewBox", "0 0 24 24");

            const searchIconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.setStyle(searchIconSVG, {
                height: "24px",
                width: "24px"
            });
            searchIconSVG.appendChild(searchIconPath);

            //mic icon svg
            const micIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            micIconPath.setAttribute("d", "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z");
            micIconPath.setAttribute("fill", App.state.fontColor);
            micIconPath.setAttribute("viewBox", "0 0 24 24");

            const micIconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.setStyle(micIconSVG, {
                height: "24px",
                width: "24px"
            });
            micIconSVG.appendChild(micIconPath);

            //search bar
            const searchBar = document.createElement("input");
            searchBar.type = "text";

            this.setInputOnHover(els.search);

            //buttons
            const googleSearchBtn = document.createElement("button");
            const luckyBtn = document.createElement("button");

            googleSearchBtn.innerHTML = "Google Search";
            luckyBtn.innerHTML = "I'm Feeling Lucky";

            this.setBorderOnHover(googleSearchBtn);
            this.setBorderOnHover(luckyBtn);

            //styling elements
            googleLogo.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

            this.setStyle(googleSearchBtn, {
                color: App.state.fontColor,
                borderRadius: "5px",
                backgroundColor: "rgb(43, 43, 46)",
                margin: "0.5rem 0.2rem",
                padding: "0.5rem 0.8rem",
                border: "none",
                marginTop: "1rem"
            });
            this.setStyle(luckyBtn, {
                color: App.state.fontColor,
                borderRadius: "5px",
                backgroundColor: "rgb(43, 43, 46)",
                margin: "0.5rem 0.2rem",
                padding: "0.5rem 0.8rem",
                border: "none",
                marginTop: "1rem"
            });
            this.setStyle(searchBar, {
                backgroundColor: "transparent",
                border: "none",
                color: App.state.fontColor,
                width: "100%",
                outline: "none"
            });
            this.setStyle(els.search, {
                border: "1px solid grey",
                display: "flex",
                minWidth: "500px",
                borderRadius: "25px",
                justifyContent: "space-between",
                alignContent: "center",
                padding: "0.6rem",
                marginTop: "2rem"
            })
            this.setStyle(els.buttons, {
                display: "flex",
                justifyContent: "center"
            })

            //appending elements to body container
            els.search.appendChild(searchIconSVG);
            els.search.appendChild(searchBar);
            els.search.appendChild(micIconSVG);

            els.buttons.appendChild(googleSearchBtn);
            els.buttons.appendChild(luckyBtn);

            els.container.appendChild(googleLogo);
            els.container.appendChild(els.search);
            els.container.appendChild(els.buttons);
        },
        createFooter() {
            const els = App.elements.footer;
            const leftBottomFooter = document.createElement("div");
            const rightBottomFooter = document.createElement("div");

            els.topFooter.innerHTML = "Carbon Neutral since 2007";

            const ad = document.createElement("a");
            const business = document.createElement("a");
            const howSearchWorks = document.createElement("a");
            const privacy = document.createElement("a");
            const terms = document.createElement("a");
            const settings = document.createElement("a");

            this.setEmptyLinks(ad, "Advertising");
            this.setEmptyLinks(business, "Business");
            this.setEmptyLinks(howSearchWorks, "How Search Works");
            this.setEmptyLinks(privacy, "Privacy");
            this.setEmptyLinks(terms, "Terms");
            this.setEmptyLinks(settings, "Settings");

            leftBottomFooter.appendChild(ad);
            leftBottomFooter.appendChild(business);
            leftBottomFooter.appendChild(howSearchWorks);

            rightBottomFooter.appendChild(privacy);
            rightBottomFooter.appendChild(terms);
            rightBottomFooter.appendChild(settings);

            this.setStyle(els.topFooter, {
                display: "flex",
                justifyContent: "center",
                margin: "1rem"
            })
            this.setStyle(els.bottomFooter, {
                display: "flex",
                justifyContent: "space-around",
                margin: "0 1rem 1rem 1rem"
            })


            els.container.appendChild(els.topFooter);
            els.bottomFooter.appendChild(leftBottomFooter);
            els.bottomFooter.appendChild(rightBottomFooter);
            els.container.appendChild(els.bottomFooter);

        },
        createLayout() {
            const els = App.elements;
            const states = App.state;

            this.setStyle(els.root, {
                backgroundColor: states.backgroundColor,
                color: states.fontColor,
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Helvetica, Arial, Sans-Serif",
                fontSize: "small"
            });

            this.setStyle(els.header.container, {
                // border: "1px solid green",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                alignItems: "center"
            });

            this.setStyle(els.body.container, {
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                paddingTop: "5.5rem",
                flexGrow: "1"
            });

            this.setStyle(els.footer.container, {
                // border: "1px solid blue",
                backgroundColor: "rgb(23, 23, 23)"
            })

            this.createHeaderLeft();
            this.createHeaderRight();
            this.createSearchBody();
            this.createFooter();

            els.root.appendChild(els.header.container);
            els.root.appendChild(els.body.container);
            els.root.appendChild(els.footer.container);
        },
        //Helper functions
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
        },
        setBorderOnHover(el) {
            console.log("element on hover: " + el);
            el.onmouseover = () => {
                el.style.border = "0.01rem solid white";
            };
            el.onmouseleave = () => {
                el.style.border = "none";
            }
        },
        setInputOnHover(el) {
            console.log("element on hover: " + el);
            el.onmouseover = () => {
                this.setStyle(el, {
                    backgroundColor: "rgb(48, 49, 52)",
                    border: "0",
                    boxShadow: "1px solid white"
                })
            };
            el.onmouseleave = () => {
                this.setStyle(el, {
                    backgroundColor: App.state.backgroundColor,
                    border: "1px solid grey",
                    boxShadow: "none"
                })
            }
        },
        setEmptyLinks(el, str) {
            el.href = "#";
            el.innerHTML = str;
            el.style.textDecoration = "none";
            el.style.color = App.state.fontColor;
            el.style.margin = "0 0.5rem";
            this.setUnderlineOnHover(el);
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
            buttons: document.createElement("div")
        },
        footer: {
            container: document.createElement("section"),
            topFooter: document.createElement("div"),
            bottomFooter: document.createElement("div")
        },

    }
};

App.init();