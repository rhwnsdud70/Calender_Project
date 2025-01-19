var Body = {
    setColor:function(color) {
        $('body').css('color', color);
    },
    setBackgroundColor:function(color) {
        $('body').css('backgroundColor', color);
    }
}

var Links = {
    setColor:function(color) {
        $('a').css('color', color); //'a'태그를 전부 jQuery로 제어하겠다 선언
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