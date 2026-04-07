import React, { Component } from 'react';
import './Coffee.css'
import Topbar from '../Components/Tobbar';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';

const Coffee = () => {

const drinks5 = [
{
name:"Cappuccino",
image:"https://cdn-icons-png.flaticon.com/512/924/924514.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Latte",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Salted caramel",
image:"https://cdn-icons-png.flaticon.com/512/590/590836.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Tea",
image:"https://cdn-icons-png.flaticon.com/512/415/415733.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Matcha",
image:"https://cdn-icons-png.flaticon.com/512/924/924507.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Lemonade",
image:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Strawberry",
image:"https://cdn-icons-png.flaticon.com/512/590/590685.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
},
{
name:"Hot Chocolate",
image:"https://cdn-icons-png.flaticon.com/512/590/590812.png",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
price:"35LE",
size:"S-M-L",
status:"Available"
}
];

    return ( <>
          <div className="dashboard">

      <Navbar />

      <div className="mainContent">

        <Topbar />

<div className="coffeeContainer5">

<div className="headerRow5">

<div>
<h1 className="title5">COFFEE DRINKS</h1>
<p className="subtitle5">Manage coffee drinks and coffee experiences</p>
</div>

<button className="addButton5">+ Add coffee</button>

</div>


<table className="coffeeTable5">

<thead className="tableHead5">
<tr>
<th>IMAGE</th>
<th>DESCRIPTION</th>
<th>PRICE</th>
<th>SIZE</th>
<th>STATUS</th>
<th>ACTIONS</th>
</tr>
</thead>


<tbody className="tableBody5">

{drinks5.map((drink5,index5)=>(
<tr key={index5} className="tableRow5">

<td className="imageCell5">

<div className="drinkInfo5">

<img src={drink5.image} alt="" className="drinkImage5"/>

<span className="drinkName5">
{drink5.name}
</span>

</div>

</td>


<td className="description5">
{drink5.description}
</td>


<td>
<span className="priceBadge5">
{drink5.price}
</span>
</td>


<td className="size5">
{drink5.size}
</td>


<td className="status5">
{drink5.status}
</td>


<td className="action5">
⋮
</td>

</tr>
))}

</tbody>

</table>

</div>



<Footer />

      </div>
    </div>
    
    </> );
}
 
export default Coffee;