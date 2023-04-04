**When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.(2-3hours)**

**a.What is the main functionality of the browser?
b.High Level Components of a browser.
c.Rendering engine and its use.
d.Parsers (HTML, CSS, etc)
e.Script Processors
f.Tree construction
g.Order of script processing
h.Layout and Painting**


------------
**WHAT IS THE MAIN FUNCTIONALITY OF THE BROWSER?**
- The main function is to retrieve information from the World Wide Web and making it available for users
- Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website
- Browsers user internal cache which gets stored and the user can open the same webpage time and again without losing extra data


**High Level Components of a browser**
- User Interface
- Browser Engine
- Networking
- Data Storage
- JavaScript Interpreter

**Rendering engine and its use**
- Rendering engine is use to decode the HTML codes into human understanding language it's convert it into images and text
- Chrome use :- Blink
- Safari use :- WebKit

**Parsers (HTML, CSS, etc)**
- HTML parse it construct the HTML DOM tree 

```HTML
<table>
  <tbody> 
    <tr> 
      <td>Shady Grove</td>
      <td>Aeolian</td> 
    </tr> 
    <tr>
      <td>Over the River, Charlie</td>        
      <td>Dorian</td> 
    </tr> 
  </tbody>
</table>```

- HTML parse will conver the following code into HTML DOM which look likes this

[![image](https://miro.medium.com/max/714/1*GnyB98oRTzRpjayGWzPcTg.png "image")](http://https://miro.medium.com/max/714/1*GnyB98oRTzRpjayGWzPcTg.png "image")


**Layout and Painting**

- Render Tree only contains visible element/content it's not consist spacing and colour and styling, all these thing achive by 'Layout' and 'Painting'

- Layout, It's a recursive process it start from html tag and check with all the element how much spacing is taken by all the elements and it's output is boxmodel
- Painting, this is last process of all the work after this user can see the web page. Painting do all the color, border, styling fonts and many more

- Here is complete process which comes in figure



[![](https://miro.medium.com/max/1400/1*UcHkn6pPJtvQN-b3c23QIQ.png)](http://https://miro.medium.com/max/1400/1*UcHkn6pPJtvQN-b3c23QIQ.png)

