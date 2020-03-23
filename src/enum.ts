interface Item {
  id: number,
  name: string,
}
function print(item:Item) {
  console.log(item);
}
print({id:1,name:'yefei', age:18})

interface Result {
  list: Item[]
}

let result = {
  list: [{id:1,name: 'dark', age:1}]
};

function render(result:Result) {
  result.list.forEach(e => {
    console.log(e);
  })
}

render(<Result>{
  list: [
    {id:1,name: 'dark', age:1},
    {id:2,name: 'blue'}
  ]
});

interface StringInArray {
  [index: number]: string
}

let chars:StringInArray = ['a','b'];

interface Names {
  [x: string]: string,
  // y: number
}
