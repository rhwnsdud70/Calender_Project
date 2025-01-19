var Body = {
    setColor:function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor:function(color) {
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length) {
            links[i].style.color = color;
            i=i+1;
        }
    }
}

function setColor(tag, color) {
    var links = document.querySelectorAll(tag);
    var i = 0;
    while(i<links.length) {
        links[i].style.color = color;
         i=i+1;
    }
}

function setBackgroundColor(tag, color) {
    var links = document.querySelectorAll(tag);
    var i = 0;
    while(i<links.length) {
        links[i].style.backgroundColor = color;
         i=i+1;
    }
}

function nightDayHandler(self) {
    if(self.value === 'night') {
        Body.setBackgroundColor('#333')
        Body.setColor('white')
        self.value = 'day'

        Links.setColor('powderblue');
        setColor('.saw', '#00FFFF');
        document.querySelector('#active').style.color='red';
    } else {
        Body.setBackgroundColor('white')
        Body.setColor('black')
        self.value = 'night';
        Links.setColor('black');
        setColor('.saw', 'darkblue');
        document.querySelector('#active').style.color='red';
    }
}