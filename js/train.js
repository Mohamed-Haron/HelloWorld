"use strict";
/*
function name2(){
    var res = document.getElementById('Name_input').value;

    document.getElementById('result').innerHTML = "Welcom " + res ;
}

const myvar = document.getElementById('H3').style ;

myvar.color = "green";

myvar.paddingLeft = "50px";

function change(){

    document.getElementById('btn').innerHTML = "submit";
}
*/
var store = new Vue({
    el: '#app',
    data: {
        product: 'sock',
        image: './assets/vmSocks-green-onWhite.jpg',
        sale: 1,
        details: ["60% cotton", "40% polyester", "male"],
        cart : 0,

        variants: [
            {
                id: 1245,
                color: 'green',
                image: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                id: 2245,
                color: 'blue',
                image: './assets/vmSocks-blue-onWhite.jpg' 
            }
        ]

    },

    methods: {
         addToCart: function(){
            this.cart += 1 
        },

        updateimage : function(Vimage){
            this.image = Vimage 
        }
    }
})
