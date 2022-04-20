const App = {
    //initializes the app
    init() {
        this.controllers.createGameGrid();
    },

    //static database (global variables, getters and setters)
    state: {
        playerX: true,
        winner: "",
        getters: {
            isPlayerX() {
                return App.state.playerX;
            },
            getWinner() {
                return App.state.winner;
            }
        },
        setters: {
            setPlayerX(newPlayerX) {
                App.state.playerX = newPlayerX;
            },
            setWinner(winner) {
                App.state.winner = winner;
            }
        },
        inverters: {
            invertPlayerX() {
                App.state.playerX = !App.state.playerX;
            }
        }

    },
    //functions
    controllers: {
        setTable() {
            const els = App.elements;

            //first player will always be X
            App.state.setters.setPlayerX(true);

            //setting style for the table
            els.table.style.border = "1px solid black";
            els.table.style.backgroundColor = "black";
            els.table.style.borderRadius = "0.2rem";
            els.table.style.padding = "0.2rem";
            els.table.style.margin = "auto";

            const td = document.getElementsByTagName("td");
            //setting style and event listeners for each td 
            for (let i = 0; i < td.length; i++) {
                function userClick() {
                    App.controllers.setElementText(td[i]);
                    td[i].removeEventListener("click", userClick);
                    //if the winner was found, it will display on the gameResult p and disable table
                    if (App.controllers.checkWinner()) {
                        els.gameResult.innerHTML = "Player " + App.state.getters.getWinner() + " won!";
                        disableTable();
                    }
                }
                td[i].innerHTML = "";
                td[i].style.border = "1px solid black";
                td[i].style.borderRadius = "0.2rem";
                td[i].style.padding = "2rem";
                td[i].style.backgroundColor = "white";
                td[i].addEventListener("click", userClick);

            }
            //why is this not working????
            function disableTable() {
                for (let i = 0; i < td.length; i++) {
                    console.log("disabling table element ", i);
                    if (td[i].innerHTML === "") {
                        td[i].innerHTML = "!!!";
                    }
                    td[i].removeEventListener("click", userClick);
                }
            }

            els.gameResult.innerHTML = "";
            els.gameResult.style.fontSize = "2rem";
            els.gameResult.style.fontWeight = "bold";
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
            //this will pretty much be a 2d array[row][column]
            const fullTable = [];
            for (let i = 0; i < trs.length; i++) {
                fullTable.push(trs[i].cells);
            }
            //converting this to a 1d array to make it easier xD
            let tableArray = [];
            for (let i = 0; i < fullTable.length; i++) {
                for (let j = 0; j < fullTable[i].length; j++) {
                    // console.log("table[" + i + "][" + j + "] = " + fullTable[i][j].innerHTML);
                    tableArray.push(fullTable[i][j]);
                }
            }
            //this will be the 1d array to check
            console.log(tableArray);

            //winning conditions
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            //checking the tablearray for any of the winning conditions
            let win = false;
            for (let i = 0; i < winningConditions.length; i++) {
                const winCondition = winningConditions[i];
                const a = tableArray[winCondition[0]].innerHTML;
                const b = tableArray[winCondition[1]].innerHTML;
                const c = tableArray[winCondition[2]].innerHTML;
                if (a === "" && b === "" && c === "") {
                    continue;
                }
                if (a === b && b === c) {
                    win = true;
                    App.state.setters.setWinner(a);
                    tableArray[winCondition[0]].style.backgroundColor = "green";
                    tableArray[winCondition[1]].style.backgroundColor = "green";
                    tableArray[winCondition[2]].style.backgroundColor = "green";
                    return win;
                }
            }
            return win;
        },
        createGameGrid() {
            const els = App.elements;

            els.root.style.display = "flex";
            els.root.style.flexDirection = "column";

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

            els.resetButton.type = "button";
            els.resetButton.value = "Restart";
            els.resetButton.style.maxWidth = "5rem";
            els.resetButton.style.margin = "auto";
            els.resetButton.style.marginTop = "2rem";
            els.resetButton.addEventListener("click", this.setTable);

            els.root.style.textAlign = "center";

            els.root.appendChild(els.title);
            els.root.appendChild(els.table);

            els.root.appendChild(els.resetButton);
            els.root.appendChild(els.gameResult);

            this.setTable();

        }
    },
    //every reference of our elements
    elements: {
        root: document.getElementById("app"),
        title: document.createElement("h1"),
        gameResult: document.createElement("p"),
        resetButton: document.createElement("input"),
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
