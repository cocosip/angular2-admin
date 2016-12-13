// 定义树ii
export class UiTree{
    public isCheckbox: boolean;
    public treeNodes: Array<TreeNode> = new Array<TreeNode>();
    constructor(isCheckbox: boolean) {
        this.isCheckbox = isCheckbox;
    }
    // 树div样式
    public get treeStyle(): string {
        if (this.isCheckbox) {
            return 'tree-demo jstree jstree-2 jstree-default jstree-checkbox-selection';
        }
        return 'tree-demo jstree jstree-1 jstree-default';
    }
    // ul样式
    public get treeUlStyle(): string {
        if (this.isCheckbox) {
            return 'jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-dots';
        }
        return 'jstree-container-ul jstree-children';
    }
    // 添加节点集合
    public addTreeNodes(treeNodes: Array<TreeNode>): void {
        this.treeNodes.concat(treeNodes);
    }
    // 添加节点
    public addTreeNode(treeNode: TreeNode): void {
        this.treeNodes.push(treeNode);
    }
    // 判断某个节点是否为叶子节点(如果没有子节点,就代表该节点是叶子节点)
    public isLeaf(treeNode: TreeNode): boolean {
        let childNodes = this.treeNodes.filter(x => x.parentId === treeNode.id);
        return childNodes.length === 0;
    }

    // 是否为最后一个节点(如果只有一个节点,那就为false)
    public isLastNode(treeNode: TreeNode): boolean {
        let brotherNodes = this.treeNodes.filter(x => x.parentId === treeNode.parentId);
        if (brotherNodes.length > 1) {
            return treeNode.id === brotherNodes[brotherNodes.length - 1].id;
        }
        return false;
    }

    // 根据父节点id查询子节点
    public getChildNodes(id: any): Array<TreeNode> {
        let childNodes = this.treeNodes.filter(x => x.parentId === id);
        return childNodes;
    }


    // 选中或者不选中某个子节点
    public selectChange(treeNode: TreeNode) {
        // 当前点击之后的选中状态,选中->未选中,未选中->选中
        let isSelected = !treeNode.isSelected;
        this.childSelectChange(treeNode, isSelected);
        this.parentSelectChange(treeNode, isSelected);
    }

    // 父节点改变选中状态,子节点跟随变化
    private childSelectChange(treeNode: TreeNode, isSelected: boolean) {
        treeNode.isSelected = isSelected;
        let childNodes = this.treeNodes.filter(x => x.parentId === treeNode.id);
        childNodes.forEach(childNode => {
            if (childNode.isSelected !== isSelected) {
                this.childSelectChange(childNode, isSelected);
            }
        });
    }

    // 子节点改变选中状态,父节点跟随变化
    private parentSelectChange(treeNode: TreeNode, isSelected: boolean) {
        // 查询出父亲节点
        let parentNode = this.treeNodes.find(x => x.id === treeNode.parentId);
        if (parentNode !== undefined && parentNode !== null) {
            // 查询兄弟节点
            let brotherNodes = this.treeNodes.filter(x => x.parentId === treeNode.parentId && x.id !== treeNode.id);
            let diffNodes = brotherNodes.filter(x => x.isSelected !== isSelected);
            if ((diffNodes.length <= 0 || !isSelected) && parentNode.isSelected !== isSelected) {
                parentNode.isSelected = isSelected;
                this.parentSelectChange(parentNode, isSelected);
            }
        }
    }
}

export class TreeNode {
    public id: any;
    public name: string; // 节点名称
    public parentId: any; // 父节点id
    public icon: string; // 显示的图标
    public isOpen: boolean = true; // 是否展开
    public isSelected: boolean = false; // 是否被选中
    public isCheckBox: boolean = false; // 是否为checkbox
    constructor(id: any, name: string, parentId: any) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }
}
