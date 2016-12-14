import { Component, OnInit } from '@angular/core';
import { Salert, SALERT_TYPE } from './shared/salert/salert';
import { UiTree, TreeNode } from './shared/uitree/uitree';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Salert';
  salert: Salert;
  uiTree: UiTree;
  alert(): void {
    this.salert = new Salert(SALERT_TYPE.Warn, '出现了一些内部错误');
  }
  alertConfirmed(agreed: boolean) {
    // console.log(agreed);
  }
  ngOnInit() {
    // let uiTree = new UiTree(true);
    // uiTree.addTreeNode(new TreeNode(1, '节点1', 0));
    // uiTree.addTreeNode(new TreeNode(2, '节点2', 0));
    // uiTree.addTreeNode(new TreeNode(3, '节点3', 0));
    // // 第二层
    // uiTree.addTreeNode(new TreeNode(11, '节点1-1', 1));
    // uiTree.addTreeNode(new TreeNode(12, '节点1-2', 1));
    // uiTree.addTreeNode(new TreeNode(21, '节点2-1', 2));
    // uiTree.addTreeNode(new TreeNode(22, '节点2-2', 2));
    // uiTree.addTreeNode(new TreeNode(31, '节点3-1', 3));
    // uiTree.addTreeNode(new TreeNode(32, '节点3-2', 3));
    // // 第三层
    // uiTree.addTreeNode(new TreeNode(111, '节点1-1-1', 11));
    // uiTree.addTreeNode(new TreeNode(112, '节点1-1-2', 11));
    // uiTree.addTreeNode(new TreeNode(121, '节点1-2-1', 12));
    // uiTree.addTreeNode(new TreeNode(211, '节点2-1-1', 21));
    // uiTree.addTreeNode(new TreeNode(212, '节点2-2-2', 21));
    // uiTree.addTreeNode(new TreeNode(311, '节点3-1-1', 31));
    // uiTree.addTreeNode(new TreeNode(312, '节点3-2-2', 31));
    // uiTree.addTreeNode(new TreeNode(321, '节点3-2-1', 32));
    // uiTree.addTreeNode(new TreeNode(322, '节点3-2-2', 32));
    // // 第四层
    // uiTree.addTreeNode(new TreeNode(1111, '节点1-1-1-1', 111));
    // uiTree.addTreeNode(new TreeNode(1112, '节点1-1-1-2', 111));
    // uiTree.addTreeNode(new TreeNode(1121, '节点1-1-2-1', 112));
    // uiTree.addTreeNode(new TreeNode(1122, '节点1-1-2-2', 112));

    // uiTree.addTreeNode(new TreeNode(1211, '节点1-2-1-1', 121));
    // uiTree.addTreeNode(new TreeNode(2111, '节点2-1-1-1', 211));
    // uiTree.addTreeNode(new TreeNode(2112, '节点2-1-1-2', 211));

    // uiTree.addTreeNode(new TreeNode(3111, '节点3-1-1-1', 311));
    // uiTree.addTreeNode(new TreeNode(3112, '节点3-1-1-2', 311));
    // uiTree.addTreeNode(new TreeNode(3113, '节点3-1-1-3', 311));
    // uiTree.addTreeNode(new TreeNode(3114, '节点3-1-1-4', 311));

    // uiTree.addTreeNode(new TreeNode(3221, '节点3-2-2-1', 322));
    // uiTree.addTreeNode(new TreeNode(3222, '节点3-2-2-2', 322));

    // this.uiTree = uiTree;
  }
}
