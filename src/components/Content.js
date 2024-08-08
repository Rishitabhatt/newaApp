import juice from '../assets/juice.jpg';
import pot from '../assets/pot.jpg';
import Fashion from '../assets/Fashion.jpg';
import './Content.css';
import Item from './Item';
function Content() {
  let title = 'Item list';
  const items = [
    {
      img:pot,
      title:'tree pot',
      description:'Original package design from house',
      price:25
    },
    {
      img:Fashion,
      title:'Fashion set',
      description:'costume package',
      price:40
    },
    {
      img:juice,
      title:'juice drinks',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1699408494242-759904290cca?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8anVpY2V8ZW58MHwwfHx8MTcxODc4NTQzMHwx&ixlib=rb-4.0.3',
      title:'juice drinks',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp1aWNlfGVufDB8fDB8fHww',
      title:'juice drinks',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      title:'pizza',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVpY2V8ZW58MHx8MHx8fDA%3D',
      title:'Friut & drinks',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      title:'brocolli salad',
      description:'nature made another world',
      price:50
    },
    {
      img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      title:'food items',
      description:'nature made another world',
      price:50
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {" "}
        <h1 id="product">Featured <span>products</span></h1>
        <Item items={items}/>

      </div>
      <button type="button" className="btn btn-light">
        View more products
      </button>
    </div>

  )
}

export default Content;
