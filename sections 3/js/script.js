window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    /// Timer

    let deadLine = '2019-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(deadLine) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        if ((seconds + '').length == 1) {
            seconds = "0" + seconds;
        }

        if ((minutes + '').length == 1) {
            minutes = "0" + minutes;
        }

        if ((hours + '').length == 1) {
            hours = "0" + hours;
        }

        if (Date.parse(deadLine) < Date.parse(new Date())) {
            seconds = '00';
            minutes = '00';
            hours = '00'

        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            TimeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total < 0) {
                clearInterval(TimeInterval);
            }
        }
    }

    setClock('timer', deadLine);


    //modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreBtn = document.querySelectorAll('.description-btn');

    function openPopup(item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    };


    openPopup(more);


    let modalWrapper = addEventListener('mousemove', function (e) {
        if (e.target.classList.contains('description-btn')) {
            for (let i = 0; i < moreBtn.length; i++) {
                if (e.target == moreBtn[i]) {
                    openPopup(e.target);

                }
            }
        }
    });

    /// form

    let msg = {
        loading: 'Загрузка',
        success: 'Спасибо, мы скоро с вами свяжемся',
        error: 'Что-то пошло не так'
    };

    let form = document.getElementsByTagName('form')[0],
        modalForm = document.getElementsByTagName('form')[1],
        statMsg = document.createElement('div');

    statMsg.classList.add('status');

    function sendForm(element) {
        element.addEventListener('submit', function (e) {
            e.preventDefault();
            element.appendChild(statMsg);
            let formData = new FormData(element);

            function statusData(data) {

                return new Promise(function(resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-formurlencoded');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(data);
                });
            }

            function clearInputs() {
                let inputs = element.getElementsByTagName('input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                };
            }

            statusData(formData)
                .then(() => statMsg.innerHTML = msg.loading)
                .then(() => statMsg.innerHTML = msg.success)
                .catch(() => statMsg.innerHTML = msg.error)
                .then(() => clearInputs())

        })
    };

    sendForm(form);
    sendForm(modalForm);


});

