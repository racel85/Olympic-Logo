'use strict';

// drawing the Olympic Logo

const $ = function (foo) { return document.getElementById(foo); };

const olRing = function () {
    let canvas = $('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        canvas.style.background = '#e9e9e2';

        ctx.arc(170, 35, 21, 0, Math.PI * 2, true); //red
        ctx.strokeStyle = '#DB0008';
        ctx.lineWidth = '4';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(120, 35, 21, 0, Math.PI * 2, true); //black
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = '4';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(70, 35, 21, 0, Math.PI * 2, true); //blue
        ctx.strokeStyle = '#2345DB';
        ctx.lineWidth = '4';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(145, 55, 21, 0, Math.PI * 2, true); //green
        ctx.strokeStyle = '#008F26';
        ctx.lineWidth = '4';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(95, 55, 21, 0, Math.PI * 2, true); //yellow
        ctx.strokeStyle = '#DBD000';
        ctx.lineWidth = '4';
        ctx.stroke();

        
    }
}

window.addEventListener('load', olRing);