       /******************************************
            Treehouse FSJS Techdegree:
            project 1 - A Random Quote Generator
            ******************* Moukim Hfaidh ***********************/



  /*** 
            * `quotes` array 
            ***/

          
            var quotes=[
            {quote:'Doing well is the result of doing good. That is what capitalism is all about.',
            saidby:'Ralph Waldo Emerson',
            citation:'old irish proverb',
            date:'1750'
            },
            {
              quote:"A good indignation brings out all one 's powers.  ",
              saidby:'Ralph Waldo Emerson',
              citation:'brainyquote',
              date:'1875'

            },
            {
              quote:'Few things are harder to put up with than the annoyance of a good example.',
              saidby:'Mark Twain',
              citation:'brainyquote',
              date:'1950'
            },
            {
              quote:'It takes many good deeds to build a good reputation, and only one bad one to lose it.',
              saidby:'Benjamin Franklin',
              citation:'brainyquote',
              date:''
            },
            {
              quote:'The only thing necessary for the triumph of evil is for good men to do nothing.',
              saidby:'Edmund Burke',
              citation:'brainyquote',
              date:''
            } ] ;
            //My Variables
                  var min=1; 
                  var max=quotes.length ;  
                  var random =Math.floor(Math.random() * (max - min)+min); 
                  var quoted;
               

// getting a random quote function 
                                                  function getRandomQuote(quotes){
                                                    for(var i=0;i<max;i++)
                                                    {
                                                      if(random==i)
                                                      {
                                                        var quoted=quotes[i];
                                                      }

                                                    }
                                                    return quoted; //the return will let the function returns one random quote
                                                      }
            //printQuote function to print the new quote on screen                          
function printQuote(){
  var  randomquote=getRandomQuote(quotes);      
  var html='<p class="quote">'+randomquote.quote+'</p>'+'<p class="source">'+randomquote.saidby;

  if(randomquote.citation!=='')
  {html+='<span class="citation">'+randomquote.citation+'</span>';}
  if(randomquote.date!=='')
  {html+='<span class="year">'+randomquote.date+'</span></p>';}
  document.getElementById("quote-box").innerHTML = html;


}

//the button calls the function when clicked
document.getElementById('load-quote').addEventListener("click", printQuote ,false);



