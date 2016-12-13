import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiTree, TreeNode } from './uitree';

@Component({
  selector: 'app-uitree',
  templateUrl: './uitree.component.html',
  styleUrls: ['./uitree.component.css']
})
export class UiTreeComponent {
  @Input()
  uiTree: UiTree;
  @Output() selectedIds = new EventEmitter<any>();

  constructor() { }

  // 设置最后一个节点的样式
  setLastClasses(treeNode: TreeNode) {
    let classes = {
      'jstree-node': true,
      'jstree-leaf': this.uiTree.isLeaf(treeNode),
      'jstree-open': treeNode.isOpen,
      'jstree-last': this.uiTree.isLastNode(treeNode),
      'jstree-closed': !treeNode.isOpen
    };
    return classes;
  }

  // 设置checkbox样式
  setCheckboxClasses(treeNode: TreeNode) {
    let classes = {
      'jstree-wholerow': true,
      'jstree-wholerow-clicked': treeNode.isSelected
    }
    return classes;
  }

  // 设置A标签样式
  setALabelClasses(treeNode: TreeNode) {
    let classes = {
      'jstree-anchor': true,
      'jstree-clicked': treeNode.isSelected
    };
    return classes;
  }

  // a 标签点击
  aLabelClick(treeNode: TreeNode) {
    this.uiTree.selectChange(treeNode);
  }
  // 展开或者缩回
  oclClick(treeNode: TreeNode) {
    treeNode.isOpen = !treeNode.isOpen;
  }

}
