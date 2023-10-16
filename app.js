

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: "",
      // fullName: "",
      lastName:""
    };
  },
  computed: {
    fullName(){
      console.log("Running again")
      if(this.name == ''){
        return '';
      }
      return this.name + ' ' + this.lastName
    },
    counter(value){
      console.log(value)
        if(value > 50){
        this.counter = 0;
      }
    }
  },
  watch: {
     //! try to calculate counter with computed properties
    // counter(value){
    //   if(value > 50){
    //     this.counter = 0;
    //   }
    // }
    // name(value) {
    //   if (value == '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value == ''){
    //     this.fullName = '';
    //   }else{
    //     this.fullName = this.name +  ' ' + value;
        
    //   }
    // }
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
    },
    subscrapt(number) {
      this.counter = this.counter - number;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert("Submitted")
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      console.log("Running again")
      if (this.name == '') {
        return '';
      }
      return this.name + ' ' + "Çiftci"
    }
  },

});

app.mount('#events');
