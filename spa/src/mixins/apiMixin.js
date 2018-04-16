//
// Mixin added to components, all API logic here 
// ----------------------------------------------
// Ben C, April 2018
//

export default {
  data: function () {
    return {
      apiEndpoint: "/api"
      //apiEndpoint: "http://localhost:4000/api"
    }
  },
  
  methods: {
    apiGetMetrics: function() {  
      return fetch(`${this.apiEndpoint}/metrics`)
        .then(resp => {
          return resp.json();
        })
        .catch(err => {
          console.log(`### API Error! ${err}`);
        })
    },

    apiGetInfo: function() {  
      return fetch(`${this.apiEndpoint}/info`)
        .then(resp => {
          return resp.json();
        })
        .catch(err => {
          console.log(`### API Error! ${err}`);
        })
    }    
  }
}