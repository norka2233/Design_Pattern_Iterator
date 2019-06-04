const fibonacciDiv = document.getElementById('fibonacci');

class Fibonacci{
   arr = [0, 1, 1, 2, 3, 5, 8];
   iterator = this.arr [0];

//current
current(){
  this.arr[this.iterator];
}

  //next element
next(){
 ++this.iterator;
if(this.arr[this.iterator + 1]){
  return this.arr[this.iterator];
}
else{
    this.arr[this.iterator] = this.arr[this.iterator-1] + this.arr[this.iterator -2]
        }
  return this.arr[this.iterator];
}

//rewind returns 0;

rewind(){
  return this.iterator = 0;
}

//key returns current index

key() {
  return this.iterator;
}

//prev returns previous number
prev(){
if(this.iterator > o) {
  --this.iterator;
  return this.arr[this.iterator];
}
 else if(this.iterator = 0) {
   return 0;
 }
  else {
    return null;
  }
 }
}


const iterator = new Fibonacci();
