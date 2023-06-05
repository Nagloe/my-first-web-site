var Body = {
    setColor: function(color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
  
  var Links = {
    setColor: function(color){
        $('a').css('color', color);

    }
  }
  
  
  function color(self){   
    if(self.value == 'normal'){
      Body.setBackgroundColor('red');
      Body.setColor('white');    
      self.value = 'strange';
      Links.setColor('powderblue');
    } else {
      Body.setBackgroundColor('black');
      Body.setColor('white');  
      self.value = 'normal';
      Links.setColor('blue');
    }  
  }
  