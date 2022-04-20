const App = {
    //initializes the app
    init() {

        this.controllers.createGameGrid();

        console.log("end");
    },

    //static database (where we keep everything)
    state: {
        playerX: true,

        getters: {
            isPlayerX() {
                return App.state.playerX;
            },
        },
        setters: {
            setPlayerX(newPlayerX) {
                App.state.playerX = newPlayerX;
            }
        },
        inverters: {
            invertPlayerX() {
                App.state.playerX = !App.state.playerX;
            }
        }

    },
    //functions that can be called
    controllers: {

        setTable() {
            const els = App.elements;
            //setting style for the table
            els.table.style.border = "1px solid black";
            els.table.style.borderRadius = "0.2rem";
            els.table.style.padding = "0.2rem";
            els.table.style.margin = "auto";
            const td = document.getElementsByTagName("td");
            //setting style and event listeners for each td 
            for (let i = 0; i < td.length; i++) {
                td[i].style.border = "1px solid black";
                td[i].style.borderRadius = "0.2rem";
                td[i].style.padding = "2rem";
                function userClick() {
                    App.controllers.setElementText(td[i]);
                    td[i].removeEventListener("click", userClick);
                    App.controllers.checkWinner();
                }
                td[i].addEventListener("click", userClick);
            }
        },
        setElementText(el) {
            if (App.state.getters.isPlayerX()) {
                el.innerHTML = "X";
            } else {
                el.innerHTML = "O";
            }
            App.state.inverters.invertPlayerX();
        },
        checkWinner() {
            let table = App.elements.table;
            let trs = table.children;
            var tds = [];
            for (let i = 0; i < trs.length; i++) {
                tds.push(trs[i].cells);
            }
            for (let j = 0; j < tds.length; j++) {
                tds[j].innerHTML = "FUCK";
                console.log(tds[j].innerHTML);
            }

        },
        createGameGrid() {
            const els = App.elements;
            console.log("Start createElements");

            els.title.innerHTML = "Tic-tac-toe!";

            els.tr1.appendChild(els.td11);
            els.tr1.appendChild(els.td12);
            els.tr1.appendChild(els.td13);
            els.tr2.appendChild(els.td21);
            els.tr2.appendChild(els.td22);
            els.tr2.appendChild(els.td23);
            els.tr3.appendChild(els.td31);
            els.tr3.appendChild(els.td32);
            els.tr3.appendChild(els.td33);

            els.table.appendChild(els.tr1);
            els.table.appendChild(els.tr2);
            els.table.appendChild(els.tr3);

            els.root.style.textAlign = "center";

            els.root.appendChild(els.title);
            els.root.appendChild(els.table);

            this.setTable();

            console.log("End createElements");
        }
    },
    //every reference of our elements
    elements: {
        root: document.getElementById("app"),
        title: document.createElement("h1"),
        table: document.createElement("table"),
        tr1: document.createElement("tr"),
        tr2: document.createElement("tr"),
        tr3: document.createElement("tr"),
        td11: document.createElement("td"),
        td12: document.createElement("td"),
        td13: document.createElement("td"),
        td21: document.createElement("td"),
        td22: document.createElement("td"),
        td23: document.createElement("td"),
        td31: document.createElement("td"),
        td32: document.createElement("td"),
        td33: document.createElement("td")
    }
};


App.init();

console.log(App);