'use strict';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");

    new Swiper('.swiper', {
        loop: true,
        spaceBetween: 20,

        pagination: {
            el: '.pagination',
            type: 'bullets',
            clickable: true
        },

        navigation: {
            //   nextEl: '.swiper-button-next',
            prevEl: '.button-prev',
        },
    });


    let form = document.querySelector('#form'),
        formInputs = document.querySelectorAll('.input-js'),
        inputEmail = document.querySelector('.input-email'),
        errorAlert = document.querySelectorAll('.error_alert');


    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    form.onsubmit = function () {

        let emailVal = inputEmail.value,
            emptyInputs = Array.from(formInputs).filter(input => input.value === '');


        formInputs.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error')
                errorAlert.forEach(item => {
                    item.classList.add('show_alert')
                })
            } else {
                input.classList.remove('error')
                errorAlert.forEach(item => {
                    item.classList.remove('show_alert')
                })
            }
        })

        if (emptyInputs.length) {
            return false
        }

        if (!validateEmail(emailVal)) {
            inputEmail.classList.add('error')
            errorAlert.forEach(item => {
                item.classList.add('show_alert')
            })
            return false
        } else {
            inputEmail.classList.remove('error')
            errorAlert.forEach(item => {
                item.classList.remove('show_alert')
            })
        }

        return false
    }

});
