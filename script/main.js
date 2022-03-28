/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no*/

//inserire in data un array di oggetti che hanno come propietà text e done

const app = new Vue({
  el: "#app",
  data: {
    toDoItems: [
      { text: "Fare colazione", done: true },

      { text: "Seguire la lezione", done: true },

      { text: "Prendere un caffè", done: false },

      { text: "Seguire la spiegazione dell'esercizio", done: true },

      { text: "Preparare il pranzo", done: false },
    ],
    itemsDone: [],
  },
  // MILESTONE 2
  //Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
  methods: {
    removeTask(index) {
      console.log(index);
      this.itemsDone.push(index);
      console.log(this.itemsDone);
    },
  },
});
