/**
 * Definition for a binary tree node.
 */
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null): TreeNode
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {

  let resultArr: number[][] = [];
  if (!root) {
    return resultArr;
  }
  let currPassStack = new Array<TreeNode>();
  let nextPassStack = new Array<TreeNode>();
  let currPusher = leftPush;
  let nextPusher = rightPush;
  currPassStack.push(root)

  let tempArr = [];
  while (currPassStack.length !== 0) {
    let next = currPassStack.pop() as TreeNode;
    tempArr.push(next.val);
    currPusher(next, nextPassStack)
    if (currPassStack.length === 0) {
      [currPassStack, nextPassStack] = [nextPassStack, currPassStack];
      [currPusher, nextPusher] = [nextPusher, currPusher];
      resultArr.push(tempArr);
      tempArr = [];
    }
  }
  return resultArr;
};

function leftPush(node: TreeNode, stack: Array<TreeNode>) {
  if (node.left) {
    stack.push(node.left);
  }
  if (node.right) {
    stack.push(node.right);
  }
}

function rightPush(node: TreeNode, stack: Array<TreeNode>) {
  if (node.right) {
    stack.push(node.right);
  }
  if (node.left) {
    stack.push(node.left);
  }
}
