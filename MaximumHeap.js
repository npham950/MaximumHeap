class MaximumHeap {
    constructor() {
      this.array = [];
      this.size = 0;
    }

    insertProcess(index, data) {
      let parentInd = Math.floor((index - 1)/2);
      if (index === 0) {
        return;
      }
      if (this.array[parentInd] < data) {
        let temp = this.array[parentInd];
        this.array[parentInd] = data;
        this.array[index] = temp;
      }
      this.insertProcess(parentInd, this.array[parentInd]);
    }

    insert(data) {
      this.size++;
      let index = this.array.push(data) - 1;
      this.insertProcess(index, data);
    }

    reSort(index) {
      let maxIndex = this.size - 1;
      let val = this.array[index];
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex  = leftChildIndex + 1;
      if (leftChildIndex > maxIndex || (this.array[leftChildIndex] < this.array[index]
        && (rightChildIndex > maxIndex || this.array[rightChildIndex] < this.array[index]))) {
        return;
      }
      let temp = (rightChildIndex > maxIndex || this.array[leftChildIndex] > this.array[rightChildIndex]) ?
      leftChildIndex : rightChildIndex;
      this.array[index] = this.array[temp];
      this.array[temp] = val;
      this.reSort(temp);
    }

    extract() {
      let val = this.array[0];
      if (this.size === 1) {
        return;
      }
      this.array[0] = this.array[this.size - 1];
      this.array[this.size - 1] = val;
      this.size--;
      this.reSort(0);
      return val;
    }

    heapSort() {
      let si = this.size;
      for (let i = 0; i < si - 1; i++) {
        this.extract();
      }
      this.size--;
    }

    delete(index) {
      this.array[index] = this.array[0];
      this.insertProcess(index, this.array[0]);
      this.array.pop(this.extract());
    }
  }
module.exports = MaximumHeap;

let heap = new MaximumHeap();
console.log(heap);
heap.insert(0);
console.log(heap);
heap.insert(1);
console.log(heap);
heap.insert(13);
console.log(heap);
heap.insert(9);
console.log(heap);
heap.insert(17);
console.log(heap);
heap.insert(12);
console.log(heap);
heap.insert(2);
console.log(heap);
heap.insert(6);
console.log(heap);
heap.insert(16);
console.log(heap);
heap.insert(8);
console.log(heap);
heap.delete(9);
console.log(heap);
