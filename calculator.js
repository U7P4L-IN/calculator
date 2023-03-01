
    
    function DeleteMe()
    {
        document.getElementById('myResult').value='';
    }

    // calculation function
    function calculator(newValue)
    {

         document.getElementById('myResult').value+=newValue;
        // const resultShow = document.getElementById('myResult');
        //  const newValuee= resultShow.innerText;
        //  console.log(newValuee);

    }

    // answer calculation
    function answer(){

      var a= document.getElementById("myResult").value;

    //   eval is a built in function
    
      var b=eval(a);
      document.getElementById('myResult').value=b; 

    
    }



