const App = {
    //initializes the app
    init() {
        console.log("init");
        //everything else will be here

        this.controllers.setBorder();
        this.controllers.createElements();



        console.log("end");
    },

    //static database (where we keep everything)
    state: {},
    //functions that can be called
    controllers: {
        setBorder() {
            const root = App.elements.root;
            root.style.border = "1px solid red";
            root.innerHTML = "Hello world";
        },
        createElements() {
            const els = App.elements;
            console.log("Start createElements");
            console.log(els);
            els.td11.innerHTML = "td11";
            els.td12.innerHTML = "td12";
            els.td21.innerHTML = "td21";
            els.td22.innerHTML = "td22";

            els.table.border = 1;

            els.tr1.appendChild(els.td11);
            els.tr1.appendChild(els.td12);
            els.tr2.appendChild(els.td21);
            els.tr2.appendChild(els.td22);

            els.table.appendChild(els.tr1);
            els.table.appendChild(els.tr2);

            els.root.appendChild(els.table);

            console.log("End createElements");
        }
    },
    //every reference of our elements
    elements: {
        root: document.getElementById("app"),
        table: document.createElement("table"),
        tr1: document.createElement("tr"),
        tr2: document.createElement("tr"),
        td11: document.createElement("td"),
        td12: document.createElement("td"),
        td21: document.createElement("td"),
        td22: document.createElement("td"),
    }
};


App.init();

console.log(App);