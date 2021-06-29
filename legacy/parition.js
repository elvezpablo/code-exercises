function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const insertEndRecursive = (head, val) => {
  if (!head) {
    return new ListNode(val);
  }
  head.next = insertEnd(head.next, val);
  return head;
};

const insertEndIterative = (head, val) => {
  if (!head) {
    return new ListNode(val);
  }
  let tmp = head;
  while (tmp.next) {
    tmp = tmp.next;
  }
  tmp.next = new ListNode(val);
  return head;
};

const makeList = (ary) => {
  let list;
  while (ary.length) {
    list = insertEndIterative(list, ary.shift());
  }
  return list;
};

let head = [1, 4, 3, 2, 5, 2];
let x = 3;

let list = makeList(head);

const partition = (head, x) => {  
  if(!head) {
    return head;
  }
  let p1;
  let p2;
  let tmp = head;
  while (tmp) {
    if (tmp.val < x) {
      p1 = insertEndIterative(p1, tmp.val);
    } else {
      p2 = insertEndIterative(p2, tmp.val);
    }
    tmp = tmp.next;
  }
  if(p1 && p2) {
    let end = p1;  
    while (end.next) {
      end = end.next;
    }  
    end.next = p2;  
  } else {
    return head;
  }
  return p1;
};


partition(list, 3);
partition(makeList([2, 1]), 2);

var partitionBest = function(head, x) {
    let fdum = new ListNode(0);
    let bdum = new ListNode(0);
    let front = fdum;
    let back = bdum;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
          front.next = curr; 
          front = curr;
        }
        else {
          back.next = curr;
          back = curr;
        }
        curr = curr.next
    }
    front.next = bdum.next;
    back.next = null
    return fdum.next
};
